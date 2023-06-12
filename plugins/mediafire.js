const {
	Function,
	mediafiredownload,
	getUrl,
	isPublic
} = require('../lib/');
Function({
	pattern: 'mediafire ?(.*)',
	fromMe: isPublic,
	desc: 'Download mediafire file',
	type: 'download'
}, async (message, match) => {
	match = getUrl(match || message.reply_message.text)
	const response = await mediafiredownload(match)
	await message.reply('```Name : ' + response[0].nama + '\nSize : ' + response[0].size + '\nLink : ' + response[0].link + '```\n\n_Downloading.._')
	await message.client.sendMessage(message.chat, {
			document: {
				url: response[0].link
			},
			mimetype: response[0].mime,
			fileName: response[0].name
		}, {
			quoted: message.data
		})
		.catch((e) => message.reply('_fileLength is too high_'))
})