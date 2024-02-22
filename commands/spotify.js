const moment = require('moment-timezone')
const {fetchJson,cmd, tlang } = require('../lib')
let gis = require("async-g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')


    cmd({
        pattern: "bing",
        alias :['ff','microsoft'],
        category: "search",
        desc: "Sends info of given query from Google Search.",
        use: '<text>',
        filename: __filename,
    },
    async(Void, citel, text) => {
        if (!text) return citel.reply(`give me a query\n*Example : .bing Who is dark shan yt.*`);
        let bing = await axios.get(`https://rest-api.akuari.my.id/search/bingsearch?query=${text}`);
        bing({ 'query': text}).then(res => {
            let msg= `bing Search From : ${text} \n\n`;
            for (let b of res) {
                msg+= `➣ Title : ${b.title}\n`;
                msg+= `➣ link : ${b.url}\n`;
                msg+= `➣ Description : ${b.description}\n\n────────────────────────\n\n`;
            }
         
            return citel.reply(msg);
        })
    }
)
//-----------------------------------------------------------------------//
