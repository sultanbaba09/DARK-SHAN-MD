const moment = require('moment-timezone')
const {fetchJson,cmd, tlang } = require('../lib')
let gis = require("async-g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')

//---------------------------------------------------------------------------

cmd({
            pattern: "𝚜𝚙𝚘",
            react: "💿️",
            category: "check",
            desc: "Sends info of given query from Google Search.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {

const response = await fetch(`https://vihangayt.me/search/spotify?q=${text}`);
  const sps = await response.json();
console.log(sps);
                    let textw = `◉┉❮❮ 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙽 𝙼𝙳 𝚂𝙿𝙾𝚃𝙸𝙵𝚈 𝚂𝙷𝙴𝙰𝚁𝙲𝙷 ❯❯┉◉\𝚗\n\n`;
      
        for (let i=1; i<5; i++){
  
textw +=`🕯️ _*TITLE*_ : ${sps.data[i].title}\n\n`;
textw +=`💹 _*DURATION*_ : ${sps.data[i].duration}\n\n`;
textw +=`📌️ _*URL*_ : ${sps.data[i].url}\n\n`
textw +=`📊 _*POPULARITY*_ : ${sps.data[i].popularity}\n\n`;
textw +=`🖊️ _*ARTIST*_ : ${sps.data[i].artist}\n\n`;
        }

 return await citel.reply(textw );


})
