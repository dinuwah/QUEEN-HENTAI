
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let user = global.db.data.users[m.sender]
    
      if (!user.chatbot)
        return !0
        let api = await fetch(`https://api.simsimi.net/v2/?text=${m.text}&lc=en`)
        let res = await api.json()
        m.reply(res.success.replace('simsimi', 'ABHISHEK-SER').replace('Simsimi', 'ABHISHEK-SER').replace('sim simi', 'ABHISHEK-SER'))
    
}
