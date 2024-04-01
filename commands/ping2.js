const { cmd } = require('../lib')

cmd({
        pattern: "kushan",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        
        const speed = await Void.sendMessage(citel.chat, {text: '```ᴘɪɴɢ ᴅᴀʀᴋ sʜᴀɴ ᴍᴅ..```'});
        

       


 await Void.relayMessage(citel.chat, {
      messageId: { key: speed.key }
   }) 
 } );
