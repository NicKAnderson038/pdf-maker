const AWS = require('aws-sdk')
const PDFDocument = require('pdfkit')

// import core
const middy = require('@middy/core')
// import some middlewares
const jsonBodyParser = require('@middy/http-json-body-parser')
const httpErrorHandler = require('@middy/http-error-handler')
const validator = require('@middy/validator')
// const doNotWaitForEmptyEventLoop = require('@middy/do-not-wait-for-empty-event-loop')
// const fetch = require('node-fetch')

const { randomBytes } = require('crypto')
const s3 = new AWS.S3()

const generatePdf = ({ vendorName, vendorStreet, vendorZipCity }) => {
	return new Promise((resolve, reject) => {
		const doc = new PDFDocument()
		doc.text(vendorName)
		doc.text(vendorStreet)
		doc.text(vendorZipCity)
		doc.end()
		const buffers = []
		doc.on('data', buffers.push.bind(buffers))
		doc.on('end', () => {
			const pdfData = Buffer.concat(buffers)
			return resolve(pdfData)
		})
	})
}

const controller = async (event, context, callback) => {
	console.log('GO!')
	console.log(event.body)
	const data = event.body

	const stream = await generatePdf(data)
	const pdfKey = `pdf/report.${randomBytes(8).toString('hex')}.pdf`

	const result = await s3
		.putObject({
			Bucket: process.env.bucketName,
			Key: pdfKey,
			Body: stream,
			// ACL: null,
			ContentType: 'application/pdf', // rm this will force auto downloading
		})
		.promise()

	const url = await s3.getSignedUrl('getObject', {
		Bucket: process.env.bucketName,
		Key: pdfKey,
		Expires: 120,
	})

	// const keyJpg = `jpg/report.${randomBytes(8).toString('hex')}.jpg`
	// const result = await fetch(
	// 	'https://steamcdn-a.akamaihd.net/steam/apps/742300/header.jpg?t=1581580402'
	// )
	// 	.then(response => response.buffer())
	// 	.then(buffer =>
	// 		s3
	// 			.putObject({
	// 				Bucket: process.env.bucketName,
	// 				Key: keyJpg,
	// 				Body: buffer,
	// 			})
	// 			.promise()
	// 	)

	//  const url = await s3.getSignedUrl('getObject', {
	//     Bucket: process.env.bucketName,
	//     Key: keyJpg,
	//     Expires: 120,
	// })

	return {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': '*',
			'Access-Control-Allow-Credentials': true,
			'Content-Type': 'application/json',
			// 'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
		},
		body: JSON.stringify({ description: 'file created', result, url }),
	}
}

const inputSchema = {
	type: 'object',
	properties: {
		body: {
			type: 'object',
			properties: {
				vendorName: { type: 'string', minLength: 2, maxLength: 30 },
				vendorStreet: { type: 'string', minimum: 1, maximum: 50 },
				vendorZipCity: { type: 'number', minimum: 100, maximum: 99999 },
			},
			required: ['vendorName', 'vendorStreet', 'vendorZipCity'],
		},
	},
}

const handler = middy(controller)
	.use(jsonBodyParser()) // parses the request body when it's a JSON and converts it to an object
	.use(validator({ inputSchema })) // validates the input
	.use(httpErrorHandler()) // handles common http errors and returns proper responses
// .use(doNotWaitForEmptyEventLoop())

module.exports = { handler }
