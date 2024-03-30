const { cmd, fetchJson } = require('../lib');


            
cmd({
        pattern: "shan",
        desc: "Sends official support link.",
        category: "downloader",
        filename: __filename,
    },
    async(Void, citel, text) => {
           
            
               await Void.sendpoll(citel.chat, "Please Choose, I Hope You're Happy!", ['.menu', '.ping'] )

                                   },
                
                
);

/*cmd({
        pattern: "sp",
        desc: "Sends official support link.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text) => {
        await Void.sendMessage(`${citel.chat}`, {
            image: log0,
            caption: `*Support : Official DARK SHAN MD-Support*\n*Group Link:* https://chat.whatsapp.com/K2lRN8OTnYS6ROsxvvA4dd`,
        });

    }
)
*/
