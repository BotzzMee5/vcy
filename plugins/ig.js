let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!args[0]) throw `Linknya?`
  let res = await fetch(`https://xznsenpai.xyz/api/igdl?url=${text}`)
  let json = await res.json()
  conn.sendFile(m.chat, json.media[0], 'Nih', "", m)
}
handler.help = ['ig']
handler.tags = ['downloader']
handler.command = /^(ig(dl)?)$/i
module.exports = handler