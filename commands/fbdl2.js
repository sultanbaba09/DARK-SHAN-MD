const { cmd, fetchJson } = require('../lib');
const axios = require('axios')

cmd({
        pattern: "shan",
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        
      

          Void.sendPoll(citel.chat, 'please choice one' , ['.menu', '.ping']),
           {
            quoted: citel,
        });
    }
 )
    
      
      


            
