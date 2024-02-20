const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')

cmd( 
    {   
        pattern: "spotify",
        alias: ["sp"],
        category: "spotify",
        react: "✨",
        filename: __filename
    },   
    async (void, citel, text) => {
        try {
            if (!text) {
                citel.reply("please enter song name 🍍");
                return;
            } 
           
            const data = await fetchjson(`https://rest-api.akuari.my.id/downloader/scdl?link=${text}`);
            if (!data.result || !data.result.link) {
                citel.reply("faild to fetch song 🌐");
                return;
            } 

            await void.sendMessage(
                clite.chat,
                {
                    song: {url: data.result.link},
                    mimetype: "audio/mpeg",
                    caption: ' DARK SHAN MD AUDIO DOWNLOAD'
                },
                { quoted: citel }
            );
        } catch (error) {
            citel.reply("an erro occurred: "erro.message);
        }
   }
);
                        
                





















 
