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

const { cmd, fetchJson, prefix, Config } = require('../lib');
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
            
            await Void.sendPoll(citel.chat, cap, [`${prefix}menu`, `${prefix}kushan`],
                     


                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);


if (isBanChat) return m.reply(mess.bangc);
  await doReact("🕘");
  const startTime = new Date();
  const pingMsg = await gss.sendMessage(m.chat, { text: '*cheking...*' });

 await gss.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*Pong:* ${new Date() - startTime} ms`
        }
      }
    }, {});    
      
      


            
