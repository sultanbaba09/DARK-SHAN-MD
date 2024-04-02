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


    
      

/*cmd({
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
  
    
cmd(
    {
        pattern: "mode",
        category:"downloader",
        react: "📽️",
        filename: __filename
    },
    async (Void, citel, text) => {
            
    
    const validModes = ['onlygroup', 'onlypc', 'public', 'self'];

    if (args.length < 1 || !validModes.includes(args[0].toLowerCase())) {
        Void.sendPoll(citel.chat, "Choose Bot Mode:", validModes.map(mode => `${prefix}mode ${mode}`));
    } else {
        const selectedMode = args[0].toLowerCase();

        if (selectedMode === 'onlygroup') {
            Void.sendPoll(citel.chat, "Choose Mode Status:", ['.onlygroup true', '.onlygroup false']);
        } else if (selectedMode === 'onlypc') {
            Void.sendPoll(citel.chat, "Choose Mode Status:", ['.onlypc true', '.onlypc false']).then((msg) => {
                const handler = (votes) => {
                    const modeStatus = votes[0] > votes[1]; // 'on' is selected if votes[0] > votes[1]
                    global[selectedMode] = modeStatus;
                    citel.reply(`Bot mode ${selectedMode} ${modeStatus ? 'turned on' : 'turned off'}. ${mess.success}`);
                    msg?.clearReactions();
                    Void.off('poll_update', handler);
                };
                Void.on('poll_update', handler);
            });
        } else {
            Void.public = selectedMode === 'public';
            Void.reply(`Successful in Changing To ${selectedMode === 'public' ? 'Public' : 'Self'} Usage.`);
        }
    }
})    
      

*/
            
