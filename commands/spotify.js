//const fetch = require("node-fetch")

//cmd({
//
//            pattern: "spotify",
//            desc: "video dl",
//            react: "📽️",
//            category: "downloader",
//            filename
//
//        },

//        async(Void, citel, text) => {    
//            if (!text) return citel.reply("Provide me a name")
//            try {
//                const shan = `https://vihangayt.me/download/spotify?url=${text}`;
//                fetch(shan)
//                    .then (sdata => shan.json());
//
//            if (!sdata.data || !sdata.data.url) {
//                citel.reply("Failed to fetch video URL link ❌.");
//                return;
//            }
//            
//            await Void.sendMessage(
//                citel.chat,
//                {
//                    audio: { url: sdata.data.url },
//                    mimetype: "audio/mpeg",
//                },
//                { quoted: citel }
//            );
//
//        } catch (error) {
//            citel.reply("An error occurred: " + error.message);
//        }
//    }
//);



const { cmd, fetchJson } = require('../lib');

cmd(
    {
        pattern: "spotify",
        alias: ['st'],
        category:"shan",
        react: "📽️",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* ✏️.");
                return;
            }

            const shan = await fetchJson(`https://vihangayt.me/download/spotify?url=${text}`);

            if (!shan.data || !shan.data.url) {
                citel.reply("Failed to fetch video URL or HD link ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    audio: { url: shan.data.url },
                    mimetype: "audio/mpeg",
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);

//----------------------------------------------------------------------------------------// 
                    
                        
                               
