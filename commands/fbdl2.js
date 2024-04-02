/*const { cmd } = require('../lib');
const axios = require('axios')

cmd({
        pattern: "shan",
        desc: "Sends info about repo.",
        category: "test",
        filename: __filename,
    },

      async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* ✏️.");
                return;
            },
let { data } = await axios.get('https://api.github.com/repos/kushansewmina1234/DARK-SHAN-MD')
        let cap = `💈 *DARK SHAN MD REPO* \n
*⭐ Total Stars:* ${data.stargazers_count} stars

*🍽️ Forks:* ${data.forks_count} forks

*🍁 Repo:* https://github.com/kushansewmina1234/DARK-SHAN-MD`

            Void.sendPoll(citel.chat, cap, ['.menu', '.ping'],
           
                   
                      { quoted: citel }
         );
          } 
      }
 );*/

const { cmd, fetchJson, prefix } = require('../lib');
const axios = require('axios');

cmd(
    {
        pattern: "zxc",
        alias: ['vbn'],
        category:"downloader",
        react: "📽️",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            

            let { data } = await axios.get('https://api.github.com/repos/kushansewmina1234/DARK-SHAN-MD')
        let cap = `💈 *DARK SHAN MD REPO* \n
*⭐ Total Stars:* ${data.stargazers_count} stars

*🍽️ Forks:* ${data.forks_count} forks

*🍁 Repo:* https://github.com/kushansewmina1234/DARK-SHAN-MD`
            
            await Void.sendPoll(citel.chat, cap, [`${prefix}sewmina`, `${prefix}kushan`],
                     


                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);


    
      

cmd({
        pattern: "sewmina",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {

            let cap 'dspoll request successful'

       if (citel.text) {
    const lowerText = citel.text.toLowerCase();

    if (lowerText.includes('sewmina')){
            let buttonMessage = {image: { url: 'https://telegra.ph/file/c8de25a120fd7d35793c8.jpg'},
                                               caption: dspoll
                                };
             await Void.sendMessage(citel.chat, buttonMessage, {
                    quoted: citel,
            });
    }
       }
    }
)
  
    
    
      


            
