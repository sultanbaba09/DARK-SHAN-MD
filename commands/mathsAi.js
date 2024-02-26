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

cmd ({    
            pattern: "gpt4",
            category: "ai",
            desc: "chatgpt 4",
            filename: __filename,

     },
     async(Void, citel, text) => {
                 try{
                    if (!text) {
                       citel.reply(`example :- ${prefix}gpt4 hi`);
                                return;
                    }

                    const gdata fetchJson(`https://vihangayt.me/tools/chatgpt?q=${text}`);

                    if (!gdata.data|| !gdata.data) {
                        citel.reply("Failed to shearch");
                return;
                    }   

            await Void.sendMessage(
                citel.chat,
                {
                       text: { data: gdata.data },

                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);             
                        
                             


