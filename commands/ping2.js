const { cmd } = require('../lib')

cmd({
        pattern: "kushan",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        
        const speed = '```ᴘɪɴɢ ᴅᴀʀᴋ sʜᴀɴ ᴍᴅ..```'
        

       


 await Void.relayMessage(citel.chat, {
      protocolMessage: { key: speed.key, 
                        type: 14,
                       }
   }, {}) 
 } );
