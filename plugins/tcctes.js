let fs = require ('fs')
let fetch = require ('node-fetch')
let handler  = async (m, { conn, usedPrefix: _p }) => {
	
await conn.sendMessage(m.chat, {
                text: "Tess",
                contextInfo: {
                    externalAdReply: {
                        title: "",
                        body: "Powered by",
                        thumbnailUrl: "https://telegra.ph/file/ec8cf04e3a2890d3dce9c.jpg",
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
}
handler.help = ['tqtq', 'tqto', '?']
handler.tags = ['main']
handler.command = /^(tqtq|tqto|thanksto|thanks|\?)$/i

module.exports = handler