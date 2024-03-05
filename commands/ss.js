const moment = require('moment-timezone')
const {fetchJson,cmd, tlang } = require('../lib')
let gis = require("async-g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')

//---------------------------------------------------------------------------//


cmd({
            pattern: "wikipedia",
            alias :['wiki','wp'],
            react: "🎐",
            category: "shearch",
            desc: "Sends info of given query from Google Search.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {

const response = await fetch(`https://erdwpe-api.herokuapp.com/api/search/wikimedia?text=${text}`);
  const wiki = await response.json();
console.log(wiki);
                    let textw = `◉┉❮❮ 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙽 𝙼𝙳 𝚆𝙸𝙺𝙸𝙼𝙴𝙳𝙸𝙰 𝚂𝙷𝙴𝙰𝚁𝙲𝙷 ❯❯┉◉\n\n`;
      
        for (let i=1; i<36; i++){
  
textw +=`❒ TITLE : ${wiki.result[i].title}\n`;
textw +=`❒ SOURCE : ${wiki.result[i].source}\n\n`

        }

 return await citel.reply(textw );


})

//-----------------------------------------------------------------------------//

cmd(
    {
        pattern: "twitter",
        alias: ['tw'],
        category:"downloader",
        react: "🩵",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* ✏️.");
                return;
            }

            const fxd = await fetchJson(`https://api.erdwpe.com/api/dowloader/twitter?url=${text}`);

            if (!fxd.result || !fxd.result.HD) {
                citel.reply("Failed to fetch video URL or HD link ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    video: { url: fxd.result.HD },
                    mimetype: "video/mp4",
                    caption:`┏━━━━━━━━━━━━━┓\n\n🍁 * DARK SHAN MD  𝚃𝚆𝙸𝚃𝚃𝙴𝚁 ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*🍁\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✷▎🎋⃟🥷 *ᴄʀᴇᴀᴛᴇʀ*: kushansewmina\n\n✷▎🎋⃟🥷 *DESCRIPTION*:  ${result.desc}\n\n┗━━━━━━━━━━━━━┛\n\n*ʏᴏᴜʀ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ*...🔥🔥`
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);



