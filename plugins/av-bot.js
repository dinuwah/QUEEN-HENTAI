
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `./src/mp3/${pickRandom(["Abhi", "Abhi1", "Abhi2", "Abhi3", "Abhi4"])}.mp3`

m.reply( `Hello ${taguser} Need Help?  Type /help `)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(bot|abhishek)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
