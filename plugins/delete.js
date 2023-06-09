let handler = function (m) {
    if (!m.quoted) throw false
    let { chat, fromEveryone, id, isBaileys } = m.quoted
    conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromEveryone: true, id: m.quoted.id, participant: m.quoted.sender } })

}
handler.help = ['del', 'delete']
handler.tags = ['tools']

handler.command = /^del(ete)?$/i
handler.limit = true

module.exports = handler