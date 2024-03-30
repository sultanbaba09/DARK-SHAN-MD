const { cmd, fetchJson } = require('../lib');
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

*🍁 Repo:* https://github.com/kushansewmina1234/DARK-SHAN-MD
🎏️️ *Group:*
 https://whatsapp.com/channel/0029VaFLAgi90x2oD70Hwq1z

🀄 *developer:*-KUSHAN SEWMINA`

            Void.sendPoll(citel.chat, cap , ['.menu', '.ping'],
           {
            quoted: citel,
           });
    }
 )
    
      
      


            
