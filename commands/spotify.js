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
           
            const data = await fetchjson(`https://vihangayt.me/search/spotify?q=${text}`);

            if (!data.result || !data.result.preview) {
                citel.reply("faild to fetch song 🌐");
                return;
            } 

            await void.sendMessage(
                clite.chat,
                {
                    song: {url: data.result.preview},
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
                        
                





















 
