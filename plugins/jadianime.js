let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (!mime) throw 'Reply Gambar nya'
m.reply('Tunggu sedang diproses..')
let media = await q.download()
let url = await uploadImage(media)
await conn.sendFile(m.chat, await (await fetch(`https://xznsenpai.xyz/api/toanime?url=${url}`)).buffer(), 'anime.jpg', '*DONE!*', m)
}
handler.help = ['jadianime']
handler.tags = ['maker', 'premium']
handler.command = /^(toanime|jadianime)$/i
handler.limit = true

module.exports = handler