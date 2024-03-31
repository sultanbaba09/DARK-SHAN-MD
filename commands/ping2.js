const { cmd } = require('../lib')

cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        
        const speed = await Void.sendMessage(citel.chat, {text: '```ᴘɪɴɢ ᴅᴀʀᴋ sʜᴀɴ ᴍᴅ..```'});
        await Void.relayMessage(citel.chat,{
                protocolMessage:{
                        key: speed.key,
                        type: 14,
                        editedMessage:{
                                conversation: 'KUSHAN SEWMINA'
                        }
                }
        }
                                )
    }
    );
                                
    
                

       


 

/*const { cmd, fetchJson, prefix, Config } = require('../lib');
const axios = require('axios');

cmd(
    {
        pattern: "kushan",
        category:"downloader",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            

            let { data } = await axios.get('https://api.github.com/repos/kushansewmina1234/DARK-SHAN-MD')
        let cap = `💈 *DARK SHAN MD REPO* \n
*⭐ Total Stars:* ${data.stargazers_count} stars

*🍽️ Forks:* ${data.forks_count} forks

*🍁 Repo:* https://github.com/kushansewmina1234/DARK-SHAN-MD`
            
            await Void.relayMessage(citel.chat, {
      protocolMessage: {
        key: cap.key,
        type: 14,
        
      }
   }),


             
        } 
    }
);

const Secktor = require('../lib')
Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        const { speed } = await Void.sendMessage(citel.chat, {text: '```ᴘɪɴɢ ᴅᴀʀᴋ sʜᴀɴ ᴍᴅ..```'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       const pingMsg await Void.sendMessage(citel.chat, {text: '_𝐷𝐴𝑅𝐾 𝑆𝐻𝐴𝑁 𝑃𝑂𝑁𝐺_\n *' + (final - inital) + ' ms* ', edit: speed});
    


await Void.relayMessage(citel.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
}
        
        
       } 
   )}  
 )
*/
