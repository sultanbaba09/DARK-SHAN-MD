const { cmd, fetchJson } = require('../lib');

cmd(
    {
        pattern: "ssa",
        alias: ['screen'],
        category:"test",
        react: "💃",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* ✏️.");
                return;
            }

            const shan = await fetchJson(`https://vihangayt.me/tools/ssweb?url=${text}`);

            if (!shan || !shan) {
                citel.reply("Failed to fetch video URL ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    image: { url: shan },
                    
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);

