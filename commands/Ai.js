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
                citel.reply("*Please give me text.");
                return;
            }

            const gpt = await fetchJson(`https://api.vihangayt.me/tools/chatgpt?q=${text}`);

            if (!gpt.data || !gpt.data) {
                citel.reply("Failed to fetch ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    video: { q: gpt.data },
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);
