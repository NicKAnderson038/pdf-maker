import PDFDocument from 'pdfkit'
import middy from '@middy/core'
import doNotWaitForEmptyEventLoop from '@middy/do-not-wait-for-empty-event-loop'

const generatePdf = async ({ vendorName = 'Test Data' }) => {
	return new Promise((resolve, reject) => {
		console.log(vendorName)
		const doc = new PDFDocument()
		doc.text(vendorName)
		doc.end()
		const buffers = []
		doc.on('data', buffers.push.bind(buffers))
		doc.on('end', () => {
			const pdfData = Buffer.concat(buffers)
			resolve(pdfData)
		})
	})
}
console.log(process.env.BUCKET_NAME)

const handler = async (context, event) => {
	const data = JSON.parse(context.body)
	const stream = await generatePdf(data)
	return {
		statusCode: 200,
		isBase64Encoded: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
			'Content-type': 'application/pdf',
		},
		body: stream.toString('base64'),
	}
	// return {
	// 	statusCode: 200,
	// 	// headers
	// 	headers: {
	// 		'Access-Control-Allow-Origin': '*',
	// 		'Access-Control-Allow-Credentials': true,
	// 		'Content-Type': 'application/json',
	// 		'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
	// 	},
	// 	body: JSON.stringify(data),
	// 	// body: JSON.stringify({ Location: url })
	// }
}

export const generate = middy(handler).use(doNotWaitForEmptyEventLoop())
