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

const { cmd, fetchJson } = require('../lib');
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
            
            await Void.sendPoll(citel.chat, cap, ['.menu', '.ping'],
                     


                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);


    
      
      


            
