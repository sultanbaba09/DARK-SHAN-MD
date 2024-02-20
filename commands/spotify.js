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

        let textt = "*spotify Search*\n\n Result From " + text + "\n\n───────────────────\n";
        let no = 1;
        for (let i of search.all) {
            textt += `⚡ No : ${no++}\n ❤Title : ${d.title}\n♫ preview : ${
      d.preview}\n⌛Duration : ${
      d.duration
    }\n\n──────────────\n\n`;
		
        }
        return Void.sendMessage(citel.chat, {
            image: {
                url: "https://telegra.ph/file/801d1aea02b90650ce841.jpg",
            },
            caption: textt,
        }, {
            quoted: citel,
        });
    }
)
