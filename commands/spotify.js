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
        let shan = await axios.get(`https://rest-api.akuari.my.id/search/bingsearch?query=${text}`);
        results({ 'query': text}).then(results  => {
            let msg= `bing Search From : ${text} \n\n`;
            for (let r of results) {
                msg+= `➣ Title : ${shan.r.title}\n`;
                msg+= `➣ link : ${shan.r.url}\n`;
                msg+= `➣ Description : ${shan.r.description}\n\n────────────────────────\n\n`;
            }
         
            return citel.reply(msg);
        })
    }
)
//-----------------------------------------------------------------------//
