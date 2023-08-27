let handler = m => m
handler.all = async function (m) {

    if (/^.alive$/i.test(m.text) ) {
      let av = './src/mp3/menu.mp3'
      this.sendPresenceUpdate('recording', m.chat);
      this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
      }

  if (/^.menu$/i.test(m.text) ) {
    let av = './src/mp3/menu.mp3'
    this.sendPresenceUpdate('recording', m.chat);
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^hi|gm|hey|hentai$/i.test(m.text) ) {
    let av = './src/mp3/20230827161407.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
  
return !0
 }
 
export default handler
