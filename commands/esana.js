const {cmd,fetchJson,botpic,getBuffer,prefix,tlang,formatp,runtime} = require('../lib')
const esana = require('@sl-code-lords/esana-news')

cmd({
            pattern: "esana",
            desc: "esana news",
            category: "news",
            filename: __filename,
            use: '<helakuru>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply("please use esana");
            try {
                 const URL = `https://www.helakuru.lk/esana/${last_id}`;
                fetch(URL, {
            );    
                        console.log(date);
                        let textw = "";
                        textw +=;      
                        textw += `❖ 𝑺𝑻𝑨𝑻𝑼𝑺: Active`;
                        textw += `㋡ 𝑪𝑹𝑬𝑨𝑻𝑶𝑹: KUSHAN`;
                        textw += `☞ 𝑵𝑬𝑾𝑺: ${title}`;
                        textw += `📅 Date: ${published}`;
                        textw += `🔗 URL: ${url}`;
                        textw += `🗞️ Description: ${full_news}`;

            Void.sendMessage(
                citel.chat, {
                    text: textw,
                }, {
                    quoted: citel,
                }
            );

        }
    ) 
            
//---------------------------------------------------------------------------
