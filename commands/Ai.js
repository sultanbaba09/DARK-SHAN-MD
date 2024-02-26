const { cmd, fetchJson } = require('../lib');

cmd(
    {
        pattern: "ai",
        category: "test",
        react: "🌷",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* ✏️.");
                return;
            }

            const gpt = await fetchJson(`https://vihangayt.me/tools/chatgpt?q=${text}`);

            if (!gpt.data || !gpt.data) {
                citel.reply("Failed to fetch ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    text: { q: gpt.data },
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);

//----------------------------------------------------------------------------------------// 
