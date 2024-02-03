const {cmd,fetchJson,botpic,ffmpeg,getBuffer,prefix} = require('../lib')
const esana = require('@sl-code-lords/esana-news')

cmd({
            pattern: "esana",
            desc: "esana news",
            category: "downloader",
            filename: __filename,
            use: '<helakuru>',
        },



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
}

async function sendSpecificNews(newsId, m, conn) {
  const newsInfo = await api.news(newsId);

  const newsCaption = `•───── 💝 DARK SHAN 💝 ─────•
❖ 𝑺𝑻𝑨𝑻𝑼𝑺: Active
㋡ 𝑪𝑹𝑬𝑨𝑻𝑶𝑹: KUSHAN
☞ 𝑵𝑬𝑾𝑺: ${newsInfo.results.TITLE}
📅 Date: ${newsInfo.results.PUBLISHED}
🔗 URL: ${newsInfo.results.URL}
🗞️ Description: ${newsInfo.results.full_news}
•───── 💝 DARK SHAN 💝 ─────•`;

  conn.sendFile(m.chat, newsInfo.results.COVER, 'thumbnail.jpg', newsCaption, m);
  m.react('✅');
}
//---------------------------------------------------------------------------
