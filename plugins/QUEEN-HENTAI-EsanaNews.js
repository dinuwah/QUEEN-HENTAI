import Esana from '@sl-code-lords/esana-news';


const api = new Esana();

let handler = async (m, { conn }) => {
  try {
    const [command, newsId] = m.text.split(' ');

    if (command === '.esana' && !newsId) {
      await sendNewsList(m, conn);
    } else if (command === '.esana' && newsId) {
      await sendSpecificNews(newsId, m, conn);
    }
  } catch (error) {
    console.error(error);
    m.react('❌');
  }
};

async function sendNewsList(m, conn) {
  const newsList = await api.list();
  const newsItems = newsList.results;
  let newsText = '';

  for (const news of newsItems) {
    newsText += `•───── 💝 Queen Hentai 💝 ─────•
❖ 𝑺𝑻𝑨𝑻𝑼𝑺: Active
㋡ 𝑪𝑹𝑬𝑨𝑻𝑶𝑹: Dinuwa
☞ 𝑵𝑬𝑾𝑺: ${news.title}
🆔 News ID: ${news.id}
•───── 💝 Queen Hentai 💝 ─────•\n\n`;
  }

  conn.sendMessage(m.chat, { text: newsText, quoted: m, contextInfo: { mentionedJid: [m.sender] } });
  m.react('✅');
}

async function sendSpecificNews(newsId, m, conn) {
  const newsInfo = await api.news(newsId);

  const newsCaption = `•───── 💝 Queen Hentai 💝 ─────•
❖ 𝑺𝑻𝑨𝑻𝑼𝑺: Active
㋡ 𝑪𝑹𝑬𝑨𝑻𝑶𝑹: Dinuwa
☞ 𝑵𝑬𝑾𝑺: ${newsInfo.results.TITLE}
📅 Date: ${newsInfo.results.PUBLISHED}
🔗 URL: ${newsInfo.results.URL}
🗞️ Description: ${newsInfo.results.full_news}
•───── 💝 Queen Hentai 💝 ─────•`;

  conn.sendFile(m.chat, newsInfo.results.COVER, 'thumbnail.jpg', newsCaption, m);
  m.react('✅');
}

handler.help = ['esana'];
handler.tags = ['news'];
handler.command = ['esana'];

export default handler;
