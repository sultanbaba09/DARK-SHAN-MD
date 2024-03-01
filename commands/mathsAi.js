const {fetchJson,cmd, tlang } = require('../lib')
const axios = require('axios')
const fetch = require('node-fetch')


cmd({
            pattern: "maths",
            category: "maths",
            react: "💬",
            desc: "maths solver",
            use: '<location>',
            filename: __filename,
    },
       async(Void, citel, text) => {
            if (!text) return citel.reply("example:- 20×20");
 
           const response = await fetch(`https://vihangayt.me/tools/mathssolve?q=${text}`);
  const mts = await response.json();
console.log(mts);
                    let textw = ``;
      
        
  

textw +=`${mts.data}`

return await citel.reply(textw );


})    
