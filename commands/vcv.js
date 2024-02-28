/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const moment = require('moment-timezone')
const {fetchJson,cmd, tlang } = require('../lib')
let gis = require("async-g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')

//---------------------------------------------------------------------------

cmd({
            pattern: "sps",
            react: "💿️",
            category: "search",
            desc: "Sends info of given query from Google Search.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {


const response = await fetch(`https://vihangayt.me/search/spotify?q=${text}`);
  const sps = await response.json();
      
        for (let i=1; i<5; i++){
  textw+=`
TITLE : ${sps.data[i].title}
DURATION : ${sps.data[i].duration}
URL : ${sps.data[i].url}\n`
        }

 return await citel.reply(textw );


})
