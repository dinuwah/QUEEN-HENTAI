//import db from '../lib/database.js'

let handler = async (m, { text, usedPrefix, command }) => {
    global.db.data.sticker = global.db.data.sticker || {}
    if (!m.quoted) throw `💝 Queen Hentai 💝 Reply to a message with *${usedPrefix + command}*`
    if (!m.quoted.fileSha256) throw '💝 Queen Hentai 💝 Mention the message'
    if (!text) throw `💝 Queen Hentai 💝 command is missing`
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw '💝 Queen Hentai 💝 You do not have permission to change this Sticker command'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`✅ command saved 💝 Queen Hentai 💝`)
}


handler.help = ['cmd'].map(v => 'set' + v + ' <txt>')
handler.tags = ['cmd']
handler.command = ['setcmd']
handler.owner = true

export default handler
