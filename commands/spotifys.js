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
                    let textw = `spotify search result\n\n\n`;
      
        for (let i=1; i<10; i++){
  
textw +=`🕯️ TITLE* : ${sps.data[i].title}\n\n`;
textw +=`💹 DURATION : ${sps.data[i].duration}\n\n`;
textw +=`📌️ URL : ${sps.data[i].url}\n\n`
textw +=`📊 POPULARITY : ${sps.data[i].popularity}\n\n`;
textw +=`🖊️ ARTIST : ${sps.data[i].artist}\n\n`;
        }

 return await citel.reply(textw );


})
