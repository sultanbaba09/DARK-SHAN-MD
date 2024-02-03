const { tlang, cmd,fetchJson, botpic,ffmpeg, getBuffer, prefix, Config } = require('../lib')
const ytdl = require('ytdl-secktor')
cmd({
            pattern: "song",
            desc: "download yt song",
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
            let titleYt = infoYt.videoDetails.title;        { quoted: message.data, mimetype: 'audio/mpeg', fileName: `${title}.mp3` },
        'audio'
      )
    }
    const result = await yts(match, 0, 1)
    if (!result.length) return await message.send(`_Not result for_ *${match}*`)
    const msg = generateList(
      result.map(({ title, id, duration, author, album }) => ({
        _id: `🆔&id\n`,
        text: `🎵${title}\n🕒${duration}\n👤${author}\n📀${album}\n\n`,
        id: `song https://www.youtube.com/watch?v=${id}`,
      })),
      `Searched ${match} and Found ${result.length} results\nsend 🆔 to download song.\n`,
      message.jid,
      message.participant
    )
    return await message.send(msg.message, { quoted: message.data }, msg.type)
    // return await message.send(
    // 	genListMessage(
    // 		result.map(({ title, id, duration }) => ({
    // 			text: title,
    // 			id: `song https://www.youtube.com/watch?v=${id}`,
    // 			desc: duration,
    // 		})),
    // 		`Searched ${match}\nFound ${result.length} results`,
    // 		'DOWNLOAD'
    // 	),
    // 	{},
    // 	'list'
    // )
  }
)
//---------------------------------------------------------------------------
