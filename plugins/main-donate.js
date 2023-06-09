
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
Send Redeem Code To This WhatsApp Number +919074692450 👻`
let img = 'https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
