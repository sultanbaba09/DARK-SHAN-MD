cmd({

            pattern: "video4",
            desc: "video dl",
            react: "📽️",
            category: "downloader"

        },

        async(Void, citel, text) => {    
        let yts = require("secktor-pack");
        let search = await yts(text);
        let anu = search.videos[0];
        if (!text) return     

const tvideo = await fetchJson(`https://vihangayt.me/download/spotify?url={anu.url}`)
const videolink = tvideo.result.url
            citel.reply (`📽️ ━━━━━━━━━━ *𝗩𝗜𝗗𝗘𝗢_𝗜𝗡𝗙𝗢* ━━━━━━━━━━ 📽️\n\n\n\nℹ️ *Title:* ${anu.title}\n\n🕑 *Duration:* ${anu.timestamp}\n\n👀 *Viewers:* ${anu.views}\n\n🖇️ *Url:* ${anu.url}\n\n⬆️ *Uploaded:* ${anu.ago}\n\n🎗️ *Author:* ${anu.author.name}`);
            return Void.sendMessage(citel.chat, {

                video: {
                    url: videolink ,

                },

                mimetype: "video/mp4",
                caption: tlang().footer,

            }, {
                quoted: citel,
            });
        }
    )
