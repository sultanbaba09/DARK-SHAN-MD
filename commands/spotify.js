const moment = require('moment-timezone')
const {fetchJson,cmd, tlang } = require('../lib')
let gis = require("async-g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')


    cmd({
        pattern: "bing",
        alias :['ff','microsoft'],
        category: "search",
        desc: "Sends info of given query from microsoft Search.",
        use: '<text>',
        filename: __filename,
    },
    async(Void, citel, text) => {
        if (!text) return citel.reply(`give me a query\n*Example : .bing Who is dark shan yt.*`);
        let shan = await axios.get(`https://vihangayt.me/download/spotify?url=${text}`);

         
            return citel.reply(msg);
        })
    }
)
//-----------------------------------------------------------------------//
