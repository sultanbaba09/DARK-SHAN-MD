cmd({
       pattern: "#", 
       desc: "Save whatsapp status",
       category: "whatsapp",
       filename: __filename},
     }
   async(Void, citel, text,{cmdName , isCreator}) => {
   if(!citel.quoted) return await citel.send("*Uhh Please, reply to whatsapp status*")
   let ᴅᴀʀᴋꜱʜᴀɴ_ᴍᴅ_num = await Void.bot.decodeJid(msg.user)
   return await forwardMessage(ᴅᴀʀᴋꜱʜᴀᴊ_ᴍᴅ_num, Void,citel, cmdName )
//------------------------------------------------------------

