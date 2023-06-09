let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes Cheat !*`, m)
        global.db.data.users[m.sender].money = 9999999999999999999
}
handler.command = /^(cheatd)$/i
handler.premium = true
handler.mods = false

module.exports = handler