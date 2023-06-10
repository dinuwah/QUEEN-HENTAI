
import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

 let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `💝 Queen Hentai 💝 this group doesnot support nsfw \n\nto turn on  \n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 17) throw `💝 Queen Hentai 💝 age must be 18 to use this feature`
  if (!text) throw `💝 Queen Hentai 💝 what to search?\n📌 Use : *${usedPrefix + command} <search>*\n\nExample:- Mia කලීපා 😂\nExample .xnxx link *`
    
    m.react(rwait)
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('xnxx.com')) return m.reply(`💝 Queen Hentai 💝 Invalid link  *xnxx.com*`)
        try {
            let xn = await (await fetch(global.API('fgmods', '/api/dowloader/xnxxdl', { url: text }, 'apikey'))).json()
            conn.sendFile(m.chat, xn.result.files.high, xn.result.title + '.mp4', `
≡  *XNXX DL*
            
▢ *🇱🇰Title*: ${xn.result.title}
▢ *🇱🇰Duration:* ${xn.result.duration}
▢ *🇱🇰Quality:* ${xn.result.quality}
`.trim(), m, false, { asDocument: chat.useDocument })
 m.react(done)
 } catch (e) {
    m.reply(`💝 Queen Hentai 💝 Error`)
 }
    } else {
        try {
            let res = await fetch(global.API('fgmods', '/api/search/xnxxsearch', { text }, 'apikey'))
            let json = await res.json()
             let listSections = []
              Object.values(json.result).map((v, index) => {
              listSections.push([`${index}┃ ${v.title}`, [
                    ['🇱🇰 MP4', `${usedPrefix}xnxxdl ${v.link}`, `▢ 🇱🇰 *Título* : ${v.title}`]
                  ]])
              })
              //return conn.sendList(m.chat, '  ≡ *XNXX DL*🔎🇱', `\n 🔞 Results:\n *${text}*`, fgig, `🇱Click Here🇱`, listSections, m)
              let ff = json.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (json.status) m.reply(ff)
            } catch (e) {
              m.reply(`💝 Queen Hentai 💝 Error`)
               }
    }
}
handler.help = ['xnxx'] 
handler.tags = ['nsfw', 'prem']
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'] 
handler.diamond = false
handler.premium = false
handler.register = true

export default handler
