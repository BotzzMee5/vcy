let fetch = require('node-fetch')
let handler = async (m, {conn, text}) => { 
let user = global.db.data.users[m.sender];
  let apikey = user.apis;
       let usernam = ["anak_emak909","anime_music68","i.love.anime.xxx","satanic123p","ota_576","pemanduwisatamalam","arnosh_masamune","shiro_wangy","theboys27_","anaimiya","pluralisme._","nontylive09","greyrat74","ocitoc1t","shinq4r","motivasibinsik","shoyoru_anime","tiktoker_kii","ssukasuka12","aa8070857","aguskoplingg","nga.jerit","kutulisi","lucifer99888","rikixkenz3","maa._0ne","silviar42","geibdkt"]
let ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2023,
    status: 404,
    surface : 404,
    message: `BotzzMee`, 
    orderTitle: ``,
    thumbnail: await (await fetch('https://helper--startgrow.repl.co/buffer?url=https://telegra.ph/file/5f028205d010a090a21fb.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
m.reply("tunggu yah agak lama loading nya....")
    let username = usernam[Math.floor(Math.random() * usernam.length)]
    let f = await fetch(`https://web.api-kyouka.my.id/api/other/tiktok/stalk?user=${username}&apikey=DiFCuhB83D`)
    let x = await f.json()
    let kann = x.ttlu.result.videos
    let hasil = kann[Math.floor(Math.random() * kann.length)]
    //conn.sendButton(m.chat, `Source : ${x.images[0].source}\nUpload : ${x.images[0].uploaded_at}`, wm, x.images[0].url, [['NEXT', '/kitagawamarin']], m) 
    let tet = `Post : ${hasil.video.post}\n${hasil.video.likes} Like\n${hasil.video.comments} Komen\n${hasil.video.share} Di Bagikan\nDeskripsi Video : ${hasil.video.description}\nUsername : ${hasil.author.username}\n${x.ttlu.result.followers} Followers\n${x.ttlu.result.following} Following\n Deskripsi Profile: ${x.ttlu.result.description}\nUrl: ${hasil.video.url2}
`

conn.sendFile(m.chat, hasil.video.url, 'tiktok.mp4', tet, ftroli)
//conn.sendButton(m.chat, tet, wm, hasil.video.url , [['Next', '.ttfyp'],['NO WM', `.tiktok ${hasil.video.url2}`]],m,{quoted: ftroli})
}
handler.help = ['tiktokfyp']
handler.tags = ['main']
handler.command = /^(ttfyp|tiktokfyp)$/i
module.exports = handler