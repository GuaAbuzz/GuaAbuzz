/**


   * Create By Dika Ardnt.


   * Contact Me on wa.me/6289636827082


   * Follow https://github.com/Abuzzpoet


*/
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {

'https://zenzapi.xyz': 'a0270383d3ea' // Kalau Habis Beli Sendiri
}

// Other
global.namabot = 'GuaAbuzzBot'
global.namaowner = 'GuaAbuzz'
global.myweb = 'https://tiktok.com/@guaabuzz'
global.owner = [ '6289636827082','6282171978174' ]
global.premium = ['6289636827082','6282171978174']
global.packname = 'GuaAbuzz'
global.author = 'WhatsApp Bot'
global.sessionName = 'GuaAbuzz'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '*Jepang*\n_seikō shimashita_\n*Indonesia*\n_Berhasil_',
    admin: '*Jepang*\n_kono kinō wa , gurūpu kanrisha nomi ga shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN OLEH ADMIN GROUP!!!_',
    botAdmin: '*Jepang*\n_kono kinō wa , botto ga kanrisha ni natta toki ni nomi shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN JIKA BOT MENJADI ADMIN!!!_',
    owner: '*Jepang*\n_kono kinō wa , shoyūsha gurūpu nomi ga shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN OLEH PEMILIK BOT!!!_',
    group: '*Jepang*\n_kono kinō wa gurūpu ni nomi shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN UNTUK GRUP!!!_',
    private: '*Jepang*\n_kono kinō wa , puraibēto chatto de nomi shiyō dekimasu_\n*Indonesia*\n_FITUR INI HANYA BISA DIGUNAKAN UNTUK PRIVATE CHAT!!!_',
    bot: '*Jepang*\n_kono kinō wa , yūzā koyū no botto bangō nomidesu_\n*Indonesia*\n_FITUR INI HANYA KHUSUS PENGGUNA NOMOR BOT!!!_',
    wait: '*Jepang*\n_chotto matte_\n*Indonesia*\n_Tunggu Sebentar_',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)',
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)', 
}

global.limitawal = {
    premium: "Infinity",
    free: 20
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.chatDB = JSON.parse(fs.readFileSync('./chatsDB.js'))

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})