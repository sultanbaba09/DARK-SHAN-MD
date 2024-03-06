const { cmd, fetchJson } = require('../lib');

cmd(
    {
        pattern: "tk",
        alias: ['kk'],
        category:"downloader",
        react: "📽️",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* ✏️.");
                return;
            }

            const data = await fetchJson(`https://rest-api.akuari.my.id/downloader/tiktok4?link=${text}`);

            if (!data.respon || !data.respon.download.wm) {
                citel.reply("Failed to fetch video URL or HD link ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    video: { url: data.respon.download.wm},
                    mimetype: "video/mp4",
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);
