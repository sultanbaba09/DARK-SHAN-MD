const { sck, sck1,cmd, jsonformat, botpic, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix } = require('../lib')
const moment = require("moment-timezone");
const fs = require('fs-extra')
const Levels = require("discord-xp");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");

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
      


            
