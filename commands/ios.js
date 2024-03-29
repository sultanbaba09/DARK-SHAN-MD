const { cmd } = require('../lib')
const { IOSNEWS } = require('ios-news')

cmd({
        pattern: "sirasa",
        category: "news",
        react: "📰",

        filename: __filename
    },
    async(Void, citel,text) => {
      const data = await IOSNEWS()
      const ios = data.latest()

      const kushan = ` 🗞️ *DARK SHAN MD IOS NEWS*
      ⌨️ TITLE ${ios.title}\n\n
      💎 DESCRIPTION ${ios.desc}\n\n
      🎗️ LINK ${ios.link}\n\n
©️ POWER BY DARK SHAN MD`

    await Void.sendMessage(citel.chat, { image: { url: ios.images }, caption: kushan }, { quoted: citel })
