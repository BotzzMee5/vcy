let fs = require ('fs')
let fetch = require ('node-fetch')
let handler  = async (m, { conn, usedPrefix: _p }) => {
	
let log = `*❏ UPDATE LOG*
*Informasi riwayat update*

*[12/05/23]*
UPDATE : *Perbaikan download instagram*

*[12/05/23]*
UPDATE : *Perbaikan download tiktok*

*[13/05/23]*
UPDATE : *Perbaikan openai/chatgpt*

*[13/05/23]*
UPDATE : *Perbaikan play youtube*

*[13/05/23]*
UPDATE : *Perbaikan aiimage*

*[13/05/23]*
UPDATE : *Perubahan pada menu*

*[14/05/23]*
UPDATE : *Perbaikan image hd/remini

*[14/05/23]*
UPDATE : *Perbaikan totalfitur*

*[14/05/23]*
UPDATE : *Penambahan fitur game ngewe*

*[14/05/23]*
UPDATE : *Penambahan fitur game ngocok*

*[16/05/23]*
UPDATE : *Perbaikan fitur ping*`
await conn.sendMessage(m.chat, {
                text: `${log}`,
                contextInfo: {
                    externalAdReply: {
                        title: "",
                        body: "",
                        thumbnailUrl: "https://telegra.ph/file/b608a1e5ef553170bf500.jpg",
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
}
handler.help = ['log', 'logfix']
handler.tags = ['main']
handler.command = /^(log|logfix)$/i

module.exports = handler