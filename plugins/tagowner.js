let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
await conn.reply(m.chat, 'Terima kasih telah menghubungi Owner bot Silakan beri tahu apa yang dapat kami bantu.', m)
                        
}
handler.customPrefix = /(@+62 831-7450-89621|@+62831745089621|@⁨Zuka⁩|@0831745089621)/i
handler.command = new RegExp

module.exports = handler

//let handler = async (m, { conn }) => {
   //let krizyn = `https://telegra.ph/file/cd37b4f991d633caa6306.jpg`
//let caption = `Ada perlu apa panggil panggil bos saya, kangen yaa ðŸ¤ª`
 
//conn.send3But( m.chat, krizyn, caption, `ðŸ“® Silahkan pilih Button dibawah ini`, `Menu`, `.menu`, `Sewa`, `.sewa`, `Group`, `.allgc`, m)
       //}
//handler.customPrefix = /@Nizar|@jey/i
//handler.command = new RegExp

//module.exports = handler\\