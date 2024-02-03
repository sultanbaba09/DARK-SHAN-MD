const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const = ytdl (sector-pack)






cmd(
  {
    pattern: 'song ?(.*)',
    fromMe: true,
    desc: 'download yt song',
    type: 'download',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send('*Example : song indila love story/ yt link*')
    const vid = ytIdRegex.exec(match)
    if (vid) {
      const _song = await song(vid[1])
      const [result] = await yts(vid[1], true)
      const { author, title, thumbnail } = result
      const meta = title ? await addAudioMetaData(_song, title, author, '', thumbnail.url) : _song
      return await message.send(
        meta,
        { quoted: message.data, mimetype: 'audio/mpeg', fileName: `${title}.mp3` },
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
