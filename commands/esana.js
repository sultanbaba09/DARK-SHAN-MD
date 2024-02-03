const {cmd,fetchJson,botpic,ffmpeg,getBuffer,prefix} = require('../lib')
const esana = require('@sl-code-lords/esana-news')

cmd({
            pattern: "esana",
            desc: "esana news",
            category: "downloader",
            filename: __filename,
            use: '<helakuru>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply("please use esana");
            try {
                 const URL = `https://www.helakuru.lk/esana/${last_id}`;
                fetch(URL, {
                        method: 'POST'
                    })
                    .then(response => response.json())
                    .then(json => {
                        const date = json.current_date;
                        console.log(date);
                        let textw = "";
                        textw +=;      
                        textw += `❖ 𝑺𝑻𝑨𝑻𝑼𝑺: Active`;
                        textw += `㋡ 𝑪𝑹𝑬𝑨𝑻𝑶𝑹: KUSHAN`;
                        textw += `☞ 𝑵𝑬𝑾𝑺: ${title}`;
                        textw += `📅 Date: ${published}`;
                        textw += `🔗 URL: ${url}`;
                        textw += `🗞️ Description: ${full_news}`;
                        citel.reply(textw)
                    });

            } catch (e) {
                console.log(e)
            }
        }
    )
//---------------------------------------------------------------------------
