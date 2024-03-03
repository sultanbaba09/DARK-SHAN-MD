const { cmd, fetchJson } = require('../lib');
const fetch = require('node-fetch')


cmd({
            pattern: "soundcloud",
            alias :['sdc','scp','sd'],
            react: "🪩",
            category: "test",
            desc: "Sends info of given query from Google Search.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {

const response = await fetch(`https://vihangayt.me/search/soundcloud?q=${text}`);
  const shan = await response.json();
console.log(shan);
                    let textw = `◉┉❮❮ 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙽 𝙼𝙳 𝚂𝙾𝚄𝙽𝙳𝙲𝙻𝙾𝚄𝙳 𝚂𝙷𝙴𝙰𝚁𝙲𝙷 ❯❯┉◉\n\n`;
      
        for (let i=1; i<4; i++){
  
textw +=`❒ TITLE : ${shan.result[i].title}\n`;
textw +=`❒ DURATION : ${shan.result[i].timestamp}\n`;
textw +=`❒ ARTIST : ${shan.result[i].artist}\n`;
textw +=`❒ 𝚅𝙸𝙴𝚆𝚂 : ${shan.result[i].views}\n`;         
textw +=`❒ URL : ${shan.result[i].url}\n\n`
        }

 return await citel.reply(textw );


})

//---------------------------------------------------------------------------------------//

/*cmd({   
            pattern: "soundcloud",
            alias :['sdc','scp','sd'],
            react: "🪩",
            category: "test",
            desc: "Sends info of given query from Google Search.",
            use: '<text>',
            filename: __filename*/
