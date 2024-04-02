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
        Void.sendPoll(citel.chat, "Choose Bot Mode:", validModes.map(mode => `${prefix}alive`));
    } 
})    
      


            
