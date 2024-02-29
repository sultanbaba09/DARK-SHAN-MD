const { cmd, fetchJson } = require('../lib');
const fetch = require('node-fetch')


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

            const gpt = await fetchJson(`https://api.neoxr.eu/api/gpt?q=${text}`);

            if (!gpt.data || !gpt.data.message) {
                citel.reply("Failed to fetch ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    text: {q: gpt.data.message },
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);
