/**
========================================================

██████╗░░█████╗░██████╗░██╗░░██╗
██╔══██╗██╔══██╗██╔══██╗██║░██╔╝
██║░░██║███████║██████╔╝█████═╝░
██║░░██║██╔══██║██╔══██╗██╔═██╗░
██████╔╝██║░░██║██║░░██║██║░╚██╗
╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝

░██████╗██╗░░██╗░█████╗░███╗░░██╗
██╔════╝██║░░██║██╔══██╗████╗░██║
╚█████╗░███████║███████║██╔██╗██║
░╚═══██╗██╔══██║██╔══██║██║╚████║
██████╔╝██║░░██║██║░░██║██║░╚███║
╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝

███╗░░░███╗██████╗░
████╗░████║██╔══██╗
██╔████╔██║██║░░██║
██║╚██╔╝██║██║░░██║
██║░╚═╝░██║██████╔╝
╚═╝░░░░░╚═╝╚═════╝░
========================================================
 Copyright (C) 2022.                                                                                        
 Licensed under the  GPL-3.0 License;                                                      
 You may not use this file except in compliance with the License.    
 It is supplied in the hope that it may be useful                                     
 * @project_name : DARK SHAN MD                                                                    
 * @author : kushansewmina1234 <https://github.com/kushansewmina1234>   
 * @description : DARK SHAN MD ,A Multi-functional whatsapp bot.       
 * @version 0.0.1                                                                                             
 ========================================================
 **/
const { formatp , formatDate , tlang, botpic,cmd, prefix, runtime,Config , parsedJid ,sleep } = require('../lib')
const axios = require('axios')
const fetch = require('node-fetch');
 const os = require('os')
const speed = require('performance-now')
const API_KEY = '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'
//===============================================
      async function getDateTime() {
        const now = new Date();
        const date = now.toISOString().slice(0, 10);
        const time = now.toLocaleTimeString();
        return { date, time };
      }
///=============================================
cmd({
  pattern: "uptime",
  alias: ["runtime"],
  desc: "Tells runtime/uptime of bot.",
  category: "misc",
  filename: __filename
},
async(darkshan, msg, text) => {
  const upt = runtime(process.uptime())
  msg.reply(`*_Uptime of dark shan md: ${upt}_*`)
}
)
//---------------------------------------------------------------------------
//                  RREPOSITORY  COMMAND
//---------------------------------------------------------------------------
cmd({
        pattern: "repo",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo",
        category: "general",
        filename: __filename,
    },
    async(darkshan, citel) => {
      try{
          let { data } = await axios.get('https://api.github.com/repos/kushansewmina1234/DARK-SHAN-MD')
        let cap = `
        
🔰 *DARK SHAN MD REPO INFO* 🔰
  *❲❒❳ Stars:* ${data.stargazers_count} stars
  *❲❒❳ Forks:* ${data.forks_count} forks
  *❲❒❳ Auther:* kushansewmina
  *❲❒❳ Create:* ${data.created_at}
  *❲❒❳ Repo:* _${github}_
  *❲❒❳ Scan:* _${scan}_\n
  *❲❒❳ Visit For Tutorial* _https://www.Youtube.com/c/darkshanyt1`.trim();
	
        return await darkshan.bot.sendMessage(citel.chat,  {   image: { url: await botpic() },    caption: cap,  } , {   quoted: citel, });
      }catch(e){return await citel.error(e)}
  });
//---------------------------------------------------------------------------
//                  BOT STATUS COMMAND
//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["about" , "info"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(darkshan, citel) => {

        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
        
  🔰 *I am ${Config.botname}* 🔰
  *❲❒❳ Description:* A WhatsApp bot with rich features, Created By *${Config.ownername}*.\n
  *❲❒❳ Speed:* ${latensie.toFixed(4)} ms
  *❲❒❳ Uptime:* ${runtime(process.uptime())}
  *❲❒❳ Version:* ${Config.VERSION}
  *❲❒❳ Owner:*  ${Config.ownername}\n
  *❲❒❳ Support:* _https://www.Youtube.com/c/darkshanyt1`.trim();
        return await darkshan.bot.sendMessage(citel.chat, { image: { url: await botpic() },    caption:ter, },{ quoted: citel, });

    }
)
//========================================================================

cmd({
  pattern: "cpu",
  desc: "To check bot status",
  category: "general",
  filename: __filename,
},
async(darkshan, msg) => {
  try{
      const used = process.memoryUsage()
      const cpus = os.cpus().map(cpu => {
          cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
          return cpu
      })
      const cpu = cpus.reduce((last, cpu, _, { length }) => 
      {

          last.total += cpu.total
          last.speed += cpu.speed / length
          last.times.user += cpu.times.user
          last.times.nice += cpu.times.nice
          last.times.sys += cpu.times.sys
          last.times.idle += cpu.times.idle
          last.times.irq += cpu.times.irq
          return last
      },{ speed: 0,total: 0,times: {user: 0,nice: 0,sys: 0,idle: 0,irq: 0 } }
      )
    timestampe = speed();
    latensie = speed() - timestampe;
    var neww = performance.now()
    var oldd = performance.now()
                  
    respon = `*❲❒❳ dark shan md Server Info ❲❒❳*
    
  *❲❒❳ Runtime:* ${runtime(process.uptime())}
  *❲❒❳ Speed:* ${latensie.toFixed(3)}/${(oldd - neww).toFixed(3)} ms
  *❲❒❳ RAM:* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
  
  *❲❒❳ Memory Usage:*
      ${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n      ')}
  
${cpus[0] ? `  *❲❒❳ Total CPU Usage:*
  *${cpus[0].model.trim()} (${cpu.speed} MHZ)*
      ${Object.keys(cpu.times).map(type => `-${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n      ')}
\n  *❲❒❳ CPU Core Usage (${cpus.length} Core CPU)*
  ${cpus.map((cpu, i) => `*Core ${i + 1}: ${cpu.model.trim()} (${cpu.speed} MHZ)*
      ${Object.keys(cpu.times).map(type => `-${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n      ')}`).join('\n\n')}` : ''}
`.trim()
      return await msg.send(respon,{},"",msg)
  }catch(e){msg.error(e)}
})
 


  //=========================================================
