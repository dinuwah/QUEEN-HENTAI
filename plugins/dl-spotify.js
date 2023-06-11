import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*ENTER NAME OF SONG 💝 Queen Hentai 💝*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists } = json2.result
let spotifyi = `💝 Queen Hentai 💝 𝐒𝐏𝐎𝐓𝐈𝐅𝐘\n💝\n💝‣💝 *TITLE:* ${title}\n💝\n💝\n💝‣💝 *ARTIST:* ${artists}\n💝\n💝\n💝‣💝 *𝚄𝚁𝙻*: ${link}\n💝\n💝\n💝‣💝 *SEARCH URL:* ${json2.result.link}\n💝`
conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)
let aa = await conn.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch {
throw '*💝 Queen Hentai 💝 𝙴𝚁𝚁𝙾𝚁*'
}}
handler.command = /^(spotify|song)$/i
export default handler
