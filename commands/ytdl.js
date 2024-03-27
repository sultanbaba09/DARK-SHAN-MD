const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mbconst { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb

cmd({
        pattern: "play2",
        desc: "Gives descriptive info of query from youtube..",
        react: "🔥",
        category: "downloader",
        filename: __filename,
        use: '<yt search text>',
    },
    async(Void, citel, text) => {
        let yts = require("secktor-pack");
        if (!text) return citel.reply(`Example : ${prefix}yts ${tlang().title} WhatsApp Bot`);
        let search = await yts(text);
        let textt = "*YouTube Search*\n\n Result From " + text + "\n\n───────────────────\n";
        let no = 1;
        for (let i of search.all) {
            textt += `${no++}\n ❤Title : ${i.title}\n♫ Type : ${
      i.type
    }\n🙈Views : ${i.views}\n⌛Duration : ${
      i.timestamp
    }\n🌟Upload At : ${i.ago}\n👑Author : ${i.author.name}\n🎵Url : ${
      i.url
    }\n\n──────────────\n\n`;
		
        }
      
        return Void.sendMessage(citel.chat, {
            image: {
                url: search.all[0].thumbnail,
            },
            caption: textt,
        }, {
            quoted: citel,
        });
    }
)

cmd({
            on: `${no}`,
            alias :['song2'],
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            let search = await yts(text);
            let anu = search.videos[0];
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            let infoYt = await ytdl.getInfo(anu.url);
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`😔 Video file too big!`);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            citel.reply('*Downloadig:* '+titleYt)
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
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: citel.pushName,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: text,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`❌ File size bigger than 100mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
                 
                   
            


        }
    )
//---------------------------------------------------------------------------//
