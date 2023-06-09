const timeout = 1800000

let handler = async (m, { conn, usedPrefix, text }) => {
	    let time = global.db.data.users[m.sender].lastmaling + 1800000
  if (new Date - global.db.data.users[m.sender].lastmaling< 1800000) throw `Anda sudah mengclaim\nTunggu selama ${msToTime(time - new Date())} lagi`
	let money = `${Math.floor(Math.random() * 30000)}`.trim()
	let limit = `${Math.floor(Math.random() * 100)}`.trim()
	global.db.data.users[m.sender].money += money * 1
	global.db.data.users[m.sender].limit += limit * 1
	global.db.data.users[m.sender].lastmaling = new Date * 1
  m.reply(`Reward : \n+${money} Money\n+${limit} Limit`)
  setTimeout(() => {
					conn.reply(m.chat, `Yuk waktunya Claim Lagi👋…`, m)
					}, timeout)
}
handler.help = ['claim']
handler.tags = ['rpg']
handler.command = /^(claim)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false
handler.exp = 0
handler.money = 0

module.exports = handler 

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}