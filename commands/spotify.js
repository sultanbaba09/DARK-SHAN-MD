
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
                    
                        
                               
