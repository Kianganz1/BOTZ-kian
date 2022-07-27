let handler = async (m, { conn }) => {
const ftroli = {
    key : {
    remoteJid: '-1614953337@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999999999,
    status: 1,
    surface : 1,
    message: 'Kian botz', 
    orderTitle: `kian`,
    thumbnail: 'https://github.com/Kianganz1', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
	conn.reply(m.chat, price1, ftroli)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)?$/i

module.exports = handler
