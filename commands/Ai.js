const { cmd, fetchJson } = require('../lib');
const fetch = require('node-fetch')



//---------------------------------------------------------------------//

cmd({
            pattern: "qw",
            category: "test",
            react: "🌷",
            desc: "Sends info of given query from Google Search.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {

const response = await fetch(`https://api.neoxr.eu/api/gpt?q=${text}`);
  const gpt = await response.json();
console.log(gpt);
                    let textw = ``;
      
        
  

textw +=`${gpt.data.message}\n\n`;
textw +=`MODULES BY DARK SHAN MD`
            
        

 return await citel.reply(textw );


})
