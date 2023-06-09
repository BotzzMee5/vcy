let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes!*`, m)
        global.db.data.users[m.sender].money = 80000
}
handler.command = /^(dbmem)$/i
handler.premium = false
handler.mods = false

module.exports = handler