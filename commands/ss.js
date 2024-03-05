const moment = require('moment-timezone')
const {fetchJson,cmd, tlang } = require('../lib')
let gis = require("async-g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')

//---------------------------------------------------------------------------


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
