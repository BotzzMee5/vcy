let fetch = require ("node-fetch")
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Hay adakah yang bisa saya bantu??`
let zykomd = await fetch(`https://xzn.wtf/api/openai?text=${text}&apikey=Zukas`)
let hasil = await zykomd.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['menuai']
handler.command = /^(ai|openai)$/i
module.exports = handler