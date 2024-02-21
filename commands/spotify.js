const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')

cmd({
        pattern: "bing",
        category: "test",
        desc: "Sends info of given query from microsoft Search.",
        use: '<text>',
        filename: __filename,
    },
 
    async(Void, citel, text) => {
        if (!text) return citel.reply(`give me a query\n*Example : .google Who is Suhail Tech.*`);
        const bing = await fetchJson(`https://rest-api.akuari.my.id/search/bingsearch?query=${text}`);
        let search = await bing(text)
        let textt = "*YouTube Search*\n\n Result From " + text + "\n\n───────────────────\n";
        for (let b of search.all){
                textt+= `➣ Title : ${b.title}\n`;
                textt+= `➣ Description : ${b.description}\n`;
                textt+= `➣ Link : ${b.url}\n\n────────────────────────\n\n`;
            }
         
            return citel.reply(msg);
        })
    }
) 
//-----------------------------------------------------------------------//
