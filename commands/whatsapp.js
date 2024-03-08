 const moment = require("moment-timezone")
 const Config = require('../config')
 let { fancytext, tlang, tiny, botpic ,prefix,cmd } = require("../lib");
 let ᴅᴀʀᴋꜱʜᴀɴ_ᴍᴅ ;
 
const {updateProfilePicture,forwardMessage, getAdmin} = require("../lib")




//============================================================================================
cmd({ pattern: "ptv", desc: "send ptv Message of video", category: "whatsapp",react: "♠️",filename: __filename},async(Void, citel, text,{cmdName , isCreator}) => {
   if(!citel.quoted) return await citel.send("*Uhh please, reply to a video Message*")
??   let mtype = citel.quoted.mtype 
   if(mtype !== "videoMessage") return await msg.send("*Replied Message is not a video, Idiot.*")
   return await forwardMessage(citel.chat, Void, citel, cmdName )
})////------------------------------------------------------------
cmd({pattern: "#", desc: "Save whatsapp status",category: "whatsapp",react: "♠️",filename: __filename},async(Void, citel, text,{cmdName , isCreator}) => {
   if(!citel.quoted) return await citel.send("*Uhh Please, reply to whatsapp status*")
   let ᴅᴀʀᴋꜱʜᴀɴ_ᴍᴅ_num = await Void.bot.decodeJid(citel.user)
   return await forwardMessage(ᴅᴀʀᴋꜱʜᴀɴ_ᴍᴅ_num, Void, citel, cmdName )
})//--------------------------------------------------------------------

