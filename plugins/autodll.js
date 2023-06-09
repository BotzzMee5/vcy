const fg = require('api-dylux');

const handler = function(m) {
  return m;
};

handler.before = async function(m) {
  if (m.text.includes("https://chat.whatsapp.com/")) {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");
  } else if (m.text.match(/(?<!\S)https?:\/\/vt\.tiktok\.com\/[^\s]+/)) {
    let url = m.text.match(/(?<!\S)https?:\/\/vt\.tiktok\.com\/[^\s]+/)[0];
    let p = await fg.tiktok(url);
    if (!p) {
      conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mengambil data TikTok', m);
      return;
    }
    let te = `
*Nama:* ${p.nickname || 'undefined'}
*Username:* ${p.unique_id || 'undefined'}
*Durasi:* ${p.duration || 'undefined'}
*Deskripsi:* ${p.description || 'undefined'}`;
    conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m);
    let jk = [
    '✅'
    ]
    conn.sendMessage(m.chat, {
    react: {
    text: `${jk}`,
    key: m.key,
    }})
    
      } else if (m.text.match(/(?<!\S)https?:\/\/www\.tiktok\.com\/[^\s]+/)) {
    let url = m.text.match(/(?<!\S)https?:\/\/www\.tiktok\.com\/[^\s]+/)[0];
    let p = await fg.tiktok(url);
    if (!p) {
      conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mengambil data TikTok', m);
      return;
    }
    let te = `
*Nama:* ${p.nickname || 'undefined'}
*Username:* ${p.unique_id || 'undefined'}
*Durasi:* ${p.duration || 'undefined'}
*Deskripsi:* ${p.description || 'undefined'}`;
    conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m);
    let jk = [
    '✅'
    ]
    conn.sendMessage(m.chat, {
    react: {
    text: `${jk}`,
    key: m.key,
    }})
    
    } else if (m.text.match(/(?<!\S)https?:\/\/www\.instagram\.com\/[^\s]+/)) {
    let url = m.text.match(/(?<!\S)https?:\/\/www\.instagram\.com\/[^\s]+/)[0];
    let p = await fg.instagram(url);
    if (!p) {
      conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mengambil data Instagram', m);
      return;
    }
    let te = `
*Nama:* ${p.nickname || 'undefined'}
*Username:* ${p.unique_id || 'undefined'}
*Durasi:* ${p.duration || 'undefined'}
*Deskripsi:* ${p.description || 'undefined'}`;
    conn.sendFile(m.chat, p.play, 'instagram.mp4', te, m);
    let jk = [
    '✅'
    ]
    conn.sendMessage(m.chat, {
    react: {
    text: `${jk}`,
    key: m.key,
    }})
  }
};

module.exports = handler;