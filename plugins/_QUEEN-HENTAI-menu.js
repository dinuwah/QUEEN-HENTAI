import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Kolkata').format('HH')
let wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `The user is not found in my database`
let pp = './Hentai.jpg'
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
┌┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈▷
│👋WELCOME  ${name}

│🔮 Uptime : ${uptime}
│🔮 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${author}
│🔮 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
│🔮 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 - Dinuwa   
│   Official²⁰²³
│
│🔮 𝙽𝚄𝙼𝙱𝙴𝚁 - 94740804536
│
└─┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈▷

┌┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈▷
🇱🇰 : Queen Hentai 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 ɴᴏᴡ ᴀᴠᴀɪʟᴀʙʟᴇ ᴏɴ COOLIFY ᴅᴇᴩʟᴏY ɴᴏᴡ.
└┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈▷
┌┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈▷
This wa bot created by 💝 Dinuwa Official²⁰²³ 💝
└┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈▷
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
🔮ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ🔮
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
╭╌═══════════════╌◈
│┃🩸.instagram 
│┃🩸.mediafire 
│┃🩸.gdrive
│┃🩸.tiktok  
│┃🩸.fb
│┃🩸.gimage
│┃🩸.ytmp3 
│┃🩸.ytmp4doc
│┃🩸.ytmp3doc
│┃🩸.pinterest
╰╌═══════════════╌◈
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
🔮ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ🔮
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
╭╌═══════════════╌◈
│┃💭.play 
│┃💭.play2 
│┃💭.play3
│┃💭.spotify
│┃💭.yts 
│┃💭.ytsearch
╰╌═══════════════╌◈
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
🔮ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅꜱ🔮
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
╭╌═══════════════╌◈
│┃🇱🇰.sticker 
│┃🇱🇰.sticker2
│┃🇱🇰.s
│┃🇱🇰.ss
│┃🇱🇰.sfull
│┃🇱🇰.url
│┃🇱🇰.tourl
│┃🇱🇰.translate
│┃🇱🇰.toimg
│┃🇱🇰.tovid
╰╌══════════                                                           ◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊                                                       🔮maker commands🔮
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊                        ╭╌═══════════════╌◈       
│┃✔.attp 
│┃✔.attp2
│┃✔.attp3
│┃✔.ttp
│┃✔.ttp2
│┃✔.ttp3                                                                                                           ╰╌══════════ 
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
🔮owner commands🔮                                                                      ◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
╭╌═══════════════╌◈
│┃💰.kick 
│┃💰.add
│┃💰.promote 
│┃💰.demote
│┃💰.setwelcome
│┃💰.setbye
│┃💰.ban
│┃💰.unban
│┃💰.enable 
│┃💰.disable 
│┃💰.link
│┃💰.tagall
│┃💰.hentairestart
│┃💰.update                                                                                                                        ╰╌══════════ 
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
🔮other commands🔮                                                                           ◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
╭╌═══════════════╌◈
│┃🔞.xnxxsearch 
│┃🔞.xnxx 
│┃🔞.xnxxdl 
│┃🔞.xvideosdl
│┃🔊.ping 
│┃🔊.runtime
│┃🔊.hentaiinfo
│┃🔊.script 
│┃🔊.sc
│┃🔊.qhw
│┃🔊.dinuserial
│┃🔊.unhentai                                                                                                                                                                    ╰╌══════════
`
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
    m.react(done)

}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu', 'queen','dinuwa','h'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Asia/Kolkata').format('HH')
      let res = "happy early in the day☀️"
      if (time >= 4) {
        res = "Good Morning 🌄"
      }
      if (time >= 10) {
        res = "Good Afternoon ☀️"
      }
      if (time >= 15) {
        res = "Good Afternoon 🌇"
      }
      if (time >= 18) {
        res = "Good Night 🌙"
      }
      return res
    }
