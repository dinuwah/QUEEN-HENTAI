//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `💝 You are already registered with 💝 Queen Hentai 💝\n\n🇱🇰 Do you want to re-register to 💝 Queen Hentai 💝 ?🇱🇰\n\n 🇱🇰 Use this command to remove your register 🇱🇰\n*.unhentai* (Serial number)`
  if (!Reg.test(text)) throw `🇱🇰 Format incorrect\n\n 🇱🇰 Use this command of 💝 Queen Hentai 💝: *.qhw name.age*\n💝Exemple : *.qhw* Dinuwa.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '💝 The name cannot be empty'
  if (!age) throw '💝 age cannot be empty'
  if (name.length >= 30) throw '💝 The name is too long' 
  age = parseInt(age)
  if (age > 100) throw '💝 හම්මට නාකියා wants to play with 💝 Queen Hentai 💝 bot'
  if (age < 5) throw '💝  there is a Carima podi eka '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─*💝 Queen Hentai 💝*─
💝 *Registered*
💝 *NUMBER:* ${name}
💝 *AGE* : ${age} years
💝 *SERIEL NUMBER* :
${sn}
└──────────────

 💝 Queen Hentai 💝
`.trim())
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'qhw'] 

export default handler

