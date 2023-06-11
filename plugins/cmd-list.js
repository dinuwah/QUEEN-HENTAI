//import db from '../lib/database.js'

let handler = async (m, { conn }) => {
    conn.reply(m.chat, `
*💝 Queen Hentai 💝 LIST  COMANDS*

▢ *💝 Queen Hentai 💝 Info:* If it is in *bold* it is blocked

──────────────────
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `(bloqueado) ${key}` : key} : ${value.text}`).join('\n')}

`.trim(), null, {
        mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
    })
}


handler.help = ['listcmd']
handler.tags = ['cmd']
handler.command = ['listcmd']

export default handler
