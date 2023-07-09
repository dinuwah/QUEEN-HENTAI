
import { xnxxSearch, xnxxdl } from '../lib/scraper.js';



let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let chat = global.db.data.chats[m.chat];
  if (!chat.nsfw) throw `💝 QUEEN HENTAI 💝  does not support NSFW.\n\nTo turn it on, use: ${usedPrefix}on nsfw \n\n🤤🤤🤤🤤🤤🤤🤤🤤🤤`;
  let user = global.db.data.users[m.sender].age;
  if (user < 18) throw `Bza,18+ hode. 😁You must be 18 year.`;
  if (!text) throw `💝 QUEEN HENTAI 💝 , What do you want to search on 💝 QUEEN HENTAI 💝?\n📌 Usage: ${usedPrefix + command} <search>\n\nEx:Mia කලීපා 🤣  or bza can use a link \nEx: .xnxx link *`;

  m.react('🇱🇰');

  let url;
  try {
    url = new URL(text);
  } catch (error) {
    url = null;
  }

  if (url) {
    try {
      const files = await xnxxdl(url.href);
      if (files && files.high) {
        conn.sendFile(
          m.chat,
          files.high,
          'video.mp4',
          'Queen Hentai Adult Video
          Downloader


            
 🇱🇰  Title: ${xn.result.title}


 🇱🇰  Duration: ${xn.result.duration}


 🇱🇰  Quality: ${xn.result.quality}',
          m
        );
        m.react('🤤');
      } else {
        m.reply('*💝 QUEEN HENTAI 💝 Failed to found the download link*.');
      }
    } catch (e) {
      console.error(e);
      m.reply('*💝 QUEEN HENTAI 💝 Error*');
    }
  } else {
    try {
      const results = await xnxxSearch(text);
      if (results.length > 0) {
        const message = results.map((r, i) => `${i + 1}. [${r.title}](${r.link})`).join('\n');
        m.reply(message, null, {
          contextInfo: {
            mentionJid: conn.parseMention(message),
          },
        });
      } else {
        m.reply('*💝 QUEEN HENTAI 💝 search results not found*.');
      }
    } catch (e) {
      console.error(e);
      m.reply('*💝 QUEEN HENTAI 💝 Error*');
    }
  }
};

handler.help = ['xnxx'];
handler.tags = ['nsfw', 'prem'];
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'];
handler.group = true;
handler.premium = false;
handler.register = true;

export default handler;
