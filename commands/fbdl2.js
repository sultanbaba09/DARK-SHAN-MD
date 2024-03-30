const { cmd, fetchJson } = require('../lib');
const axios = require('axios')

cmd({
        pattern: "shan",
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/kushansewmina1234/DARK-SHAN-MD')
        let cap = `💈 *DARK SHAN MD REPO* \n
*⭐ Total Stars:* ${data.stargazers_count} stars

*🍽️ Forks:* ${data.forks_count} forks

*🍁 Repo:* https://github.com/kushansewmina1234/DARK-SHAN-MD
🎏️️ *Group:*
 https://whatsapp.com/channel/0029VaFLAgi90x2oD70Hwq1z

🀄 *developer:*-KUSHAN SEWMINA


©️ *DARK SHAN MD 2024*`
        let buttonMessaged = {
            caption: cap,
            
        };

          Void.sendPoll(citel.chat, uy, ['.menu', '.ping'],
            Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });
    }
 )
    
      
      


            
