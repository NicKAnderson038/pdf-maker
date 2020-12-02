import pdfMakePrinter from 'pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import middy from '@middy/core'
import doNotWaitForEmptyEventLoop from '@middy/do-not-wait-for-empty-event-loop'
// import fontkit from 'fontkit'

const pdfTemplate = require('./template.json')
console.log(Object.keys(pdfFonts.pdfMake.vfs))

const generatePDF = async docDefinition => {
	const fontDescriptors = {
		Roboto: {
			normal: pdfFonts.pdfMake.vfs['Roboto-Regular.ttf'],
			bold: pdfFonts.pdfMake.vfs['Roboto-Medium.ttf'],
			italics: pdfFonts.pdfMake.vfs['Roboto-Italic.ttf'],
			bolditalics: pdfFonts.pdfMake.vfs['Roboto-MediumItalic.ttf'],
		},
	}
	// const printer = new pdfMakePrinter(fontDescriptors)
	// const doc = printer.createPdfKitDocument(docDefinition)

	return new Promise(resolve => {
		const printer = new pdfMakePrinter(fontDescriptors)
		const doc = printer.createPdfKitDocument(docDefinition)
		const chunks = []
		doc.end()
		doc.on('data', chunks.push.bind(chunks))
		doc.on('end', () => {
			const pdfData = Buffer.concat(chunks)
			resolve(pdfData)
		})
		// doc.on('data', chunk => {
		// 	chunks.push(chunk)
		// })
		// doc.on('end', () => {
		// 	resolve(Buffer.concat(chunks))
		// })
	})
}

const handler = async (context, req) => {
	const voucher = context.body
	// const voucher = { "vendorName": "Free Voucher", "vendorStreet": "123 South Street", "vendorZipCity": "19103" }
	let templateStr = JSON.stringify(pdfTemplate)

	templateStr = templateStr.replace('{vendor_name}', voucher.vendorName)
	templateStr = templateStr.replace('{vendor_street}', voucher.vendorStreet)
	templateStr = templateStr.replace('{vendor_zip_city}', voucher.vendorZipCity)

	const stream = await generatePDF(JSON.parse(templateStr))

	// context.res = {
	// 	body: stream,
	// }
	return {
		statusCode: 200,
		isBase64Encoded: true,
		headers: {
			'Content-type': 'application/pdf',
		},
		body: stream.toString('base64'),
	}
}

export const generate = middy(handler).use(doNotWaitForEmptyEventLoop())
