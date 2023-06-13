//import db from '../lib/database.js'

import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) throw `✔ *Enter 💝 Queen Hentai 💝 serial number*\nCheck your 💝 Queen Hentai 💝 serial number with the command...\n\n*${usedPrefix}nserie*`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '😤 *Incorrect 💝 Queen Hentai 💝 serial number*'
  user.registered = false
  m.reply(`💭 Register ok by 💝 Queen Hentai 💝`)
}
handler.help = ['unreg <Num Serie>'] 
handler.tags = ['rg']

handler.command = ['unreg', 'unhentai'] 
handler.register = true

export default handler

