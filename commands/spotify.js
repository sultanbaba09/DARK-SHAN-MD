const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')

cmd({
        pattern: "bing",
        category: "search",
        desc: "Sends info of given query from microsoft Search.",
        use: '<text>',
        filename: __filename,
    },
 
    async(Void, citel, text) => {
        if (!text) return citel.reply(`give me a query\n*Example : .google Who is Suhail Tech.*`);
        const bing = await fetchJson(`https://rest-api.akuari.my.id/search/bingsearch?query=${text}`);
        bing({ 'query': text}).then(res => {
            let msg= `Google Search From : ${text} \n\n`;
            for (let b of res) {
                msg+= `➣ Title : ${b.title}\n`;
                msg+= `➣ Description : ${b.description}\n`;
                msg+= `➣ Link : ${b.url}\n\n────────────────────────\n\n`;
            }
         
            return citel.reply(msg);
        })
    }
) 
//-----------------------------------------------------------------------//
