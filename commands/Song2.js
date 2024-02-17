const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb



cmd(
  {
    pattern: 'song',
    desc: 'download yt song',
    category: "downloader",
    filename: __filename,
    use: '<Hii,this is dark shan>',    

  },
  async (ck,citel, match) => {
    match = match || citel.reply_message.text
    if (!match) return await citel.reply('*Example : song indila love story/ yt link*')
    const vid = ytIdRegex.exec(match)
    if (vid) {
      const _song = await song(vid[1])
      const [result] = await yts(vid[1], true)
      const { author, title, thumbnail } = result
      const meta = title ? await addAudioMetaData(_song, title, author, '', thumbnail.url) : _song
      return await citel.reply(
        meta,
        { quoted: citel.data, mimetype: 'audio/mpeg', fileName: `${title}.mp3` },
        'audio'
      )
    }
    const result = await yts(match, 0, 1)
    if (!result.length) return await citel.reply(`_Not result for_ *${match}*`)
    const msg = generateList(
      result.map(({ title, id, duration, author, album }) => ({
        _id: `🆔&id\n`,
        text: `🎵${title}\n🕒${duration}\n👤${author}\n📀${album}\n\n`,
        id: `song https://www.youtube.com/watch?v=${id}`,
      })),
      `Searched ${match} and Found ${result.length} results\nsend 🆔 to download song.\n`,
      citel.jid,
      citel.participant
    )
