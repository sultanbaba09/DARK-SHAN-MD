const {fetchJson,cmd, tlang } = require('../lib')
const axios = require('axios')

cmd({
            pattern: "maths",
            category: "maths AI",
            desc: "maths solver",
            use: '<location>',
            filename: __filename,
    },
        async(Void, citel, text) => {
            if (!text) return citel.reply("example:- 20×20");
   
            let mdata = await axios.get(`https://vihangayt.me/tools/mathssolve?q=${text}`);
 
            let textw = "";
  
            textw += `*RESULT* ${mdata.data}`;

            Void.sendMessage(
                citel.chat, {
                    text: textw,
                }, {
                    quoted: citel,
                }
            );

        }
    )
//----------------------------------------------------------------------------//

cmd(
    {
        pattern: "ai4",
        category:"dark",
        react: "🛞",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please give me text ✏️.");
                return;
            }

            const kushan  = await fetchJson(`https://vihangayt.me/tools/chatgpt?q=${text}`);

            if (!kushan.data || !kushan.data) {
                citel.reply("Failed to fetch");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    text: {!kushan.data},
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);
