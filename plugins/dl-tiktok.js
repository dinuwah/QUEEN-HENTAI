
import fg from 'api-dylux' 
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `💝 Queen Hentai 💝, Enter a Tiktok link\n\n 💝 Ex: ${usedPrefix + command} https://vm.tiktok.com/ZSLjV2eoP/`
if (!args[0].match(/tiktok/gi)) throw `💝 verify that the link is from tiktok 💝 Queen Hentai 💝`
m.react(rwait)

try {
    let p = await fg.tiktok(args[0]) 
    let te = `
┌─💝 Queen Hentai 💝 TIKTOK
💝 *Username:* ${p.unique_id}
💝 *Description:* ${p.title}
💝 *Duration:* ${p.duration}
└───────────`
   conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
    m.react(done)
    } catch {  	
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw '💝 Error downloading the video'
     conn.sendFile(m.chat, url, 'fb.mp4', `
┌─*💝 Queen Hentai 💝 TIKTOK DL*
💝 *Username:* ${nickname} ${description ? `\n💝 *Description:* ${description}` : ''}
└───────────`, m)
m.react(done)
} 
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = false

export default handler
