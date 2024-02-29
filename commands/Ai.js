const { cmd, fetchJson } = require('../lib');
const fetch = require('node-fetch')


cmd(
    {
        pattern: "ai",
        category: "test",
        react: "🌷",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please give me text.");
                return;
            }

            const gpt = await fetchJson(`https://api.neoxr.eu/api/gpt?q=${text}`);

            if (!gpt.data || !gpt.data.message) {
                citel.reply("Failed to fetch ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    text: {q: gpt.data.message },
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);

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
      
        for (let i=1; i<2; i++){
  

textw +=`❒ URL : ${gpt.data[i].message}`
        }

 return await citel.reply(textw );


})
