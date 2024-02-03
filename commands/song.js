const { tlang, cmd,fetchJson, botpic,ffmpeg, getBuffer, prefix, Config } = require('../lib')
const ytdl = require('ytdl-secktor')
 Module_Exports({
        pattern: "song",
        desc: "Downloads audio from youtube.",
        category: "downloader",
        filename: __filename,
        use: 'bella ciao',
    },
    async(bot, citel, tax) => {
        let yts = require("secktor-pack");
    if (!tax) return citel.send(`Example: ${prefix}song My Babe i love Your Voice`);
        let search = await yts(tax);
        let anu = search.videos[0];
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        let infoYt = await ytdl.getInfo(anu.url);
        if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`Audio File Too Big!`);
        let titleYt = infoYt.videoDetails.title;
        let randomName = getRandom(".mp3");
        citel.reply('*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶:* '+tax)
        const stream = ytdl(anu.url, {
                filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
            })
            .pipe(fs.createWriteStream(`./${randomName}`));
        await new Promise((resolve, reject) => {
            stream.on("error", reject);
            stream.on("finish", resolve);
        });

        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMegabytes <= dlsize) {
            let buttonMessage = {
                audio: fs.readFileSync(`./${randomName}`),
                mimetype: 'audio/mpeg',
                caption: sgen,
                fileName: titleYt + ".mp3",
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: snam,
                        body: `sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                        renderLargerThumbnail: true,
                        thumbnailUrl: search.all[0].thumbnail,
                        mediaUrl: tax,
                        mediaType: 1,
                        thumbnail: await getBuffer(search.all[0].thumbnail),
                        sourceUrl: zyt,
                        
                    },
                },
            }
            await bot.sendMessage(citel.chat, buttonMessage, { quoted: citel })
            return fs.unlinkSync(`./${randomName}`);
        } else {
            citel.reply(`File Size Bigger Then 100MB.`);
        }
        fs.unlinkSync(`./${randomName}`);
        


    }
)
    
