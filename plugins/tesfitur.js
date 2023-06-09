let cp = require ('child_process')
let { promisify } = require ('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn}) => {
	
 let tess = `Kbsj`
conn.sendMessage(m.chat, {
text: tess,
contextInfo: {
externalAdReply: {
title: "",
body: "",
thumbnailUrl: "https://telegra.ph/file/ec8cf04e3a2890d3dce9c.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
    }
  }
}
handler.help = ['speedtest']
handler.command = /^(zuka|ookla)$/i
handler.premium = false
module.exports = handler