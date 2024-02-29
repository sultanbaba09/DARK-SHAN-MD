const moment = require('moment-timezone')
const {fetchJson,cmd, tlang } = require('../lib')
let gis = require("async-g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')

//---------------------------------------------------------------------------


cmd({
            pattern: "spo",
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
                    let textw = `spotify search results\n\n`;
      
        for (let i=1; i<5; i++){
  
textw +=`TITLE : ${sps.data[i].title}\n`;
textw +=`DURATION : ${sps.data[i].duration}\n`;
textw +=`ARTIST : ${sps.data[i].artist}\n`;
textw +=`URL : ${sps.data[i].url}\n\n`
        }

 return await citel.reply(textw );


})
