import hirunews from 'hirunews-scraper';
import fs from 'fs';
import os from 'os';

let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {

  let chat = global.db.data.chats[m.chat];
  m.react(rwait);
  try {
    const newsdata = await hirunews();
    const res = newsdata.result;

      conn.sendFile(
        m.chat,
        res.image,
        `${res.title}.jpg`,
        `\n*┏━[💝 QUEEN HENTAI 💝]─❂\n\n┣━( _🧾 HIRU NEWS _ )* \n\n*┃⿻ 📄 Title :* ${res.title}\n\n*┃⿻* 📅 Date : ${res.dateandtime}\n\n*┃⿻* 🗞️ Description : ${res.description}\n\n*┃⿻* 🖇️ Link : ${res.link}\n\n*┗━━━━━━━━━━━━━━◆\n\nQUEEN-HENTAI⦁ ᴍᴀᴅᴇ ʙʏ *Dinuwa`,
        m
      );

      m.react(done);

  } catch (error) {
    console.error(error);
    m.reply('Error while trying to process the news. Please try again.\n' + error);
  }
};

handler.help = ['hiru'];
handler.tags = ['dl'];
handler.command = ['hiru', 'news'];
handler.diamond = false;

export default handler;
