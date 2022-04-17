/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6289636827082
   * Follow https://github.com/Abuzzpoet
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, WAMessageStubType, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const moment = require("moment-timezone");
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
let { TelegraPh } = require('./lib/uploader')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')

// read database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []


moment.tz.setDefault("Asia/Jakarta").locale("id")

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	    const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false


const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑴𝒂𝒍𝒂𝒎 🏙️'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑷𝒆𝒕𝒂𝒏𝒈 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒐𝒓𝒆 🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒊𝒂𝒏𝒈 🌤️'
}
        if(time2 < "10:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑷𝒂𝒈𝒊 🌄'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒖𝒃𝒖𝒉 🌆'
}
        if(time2 < "03:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑻𝒆𝒏𝒈𝒂𝒉 𝑴𝒂𝒍𝒂𝒎 🌃'
}

    //Time Menuju Lebaran
    const IdulFitri = new Date('May 1, 2022 07:00:00')
	const sekarang = new Date().getTime();
	const Selisih = IdulFitri - sekarang;
	const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
	const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
	const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
	const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
	const menuju = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`


//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289636827082-1635036556@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./lib/hisoka.jpg'), surface: 200, message: `Haii Kak ${pushname}\n𝙲𝚖𝚍 ${command}`, orderTitle: 'Please Follow TikTok @GuaAbuzz', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
//END
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.chats[m.chat]
                if (typeof chats !== 'object') global.db.chats[m.chat] = {}
                if (chats) {
                if (!('antionce' in chats)) chats.antionce = true
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antiyt' in chats)) chats.antiyt = false
                if (!('antitiktok' in chats)) chats.antilink = false
             } else global.db.chats[m.chat] = {
                antionce: true,
                mute: false,
                antilink: false,
                antiyt: false,
                antitiktok: false,
        }
        } catch (err) {
            console.error(err)
        }
        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

        //Jangan Di Ubah
        function _0x14863c(_0x19ed50,_0x2f84ad,_0x469a64,_0x477516){return _0xe14f(_0x19ed50-0x79,_0x2f84ad);}(function(_0x26f1c8,_0x320a32){function _0x21d57f(_0x1b3031,_0x110e85,_0x12b921,_0x335203){return _0xe14f(_0x335203- -0x192,_0x1b3031);}function _0x3aca0d(_0x5167f1,_0x1e0395,_0x2de281,_0x57c9a0){return _0xe14f(_0x1e0395- -0x2d9,_0x2de281);}const _0x22fc46=_0x26f1c8();while(!![]){try{const _0x4577b1=-parseInt(_0x3aca0d(-0x20d,-0x219,-0x214,-0x221))/(0x13d*-0x3+0x3ca*-0x1+0x782)+-parseInt(_0x21d57f(-0xd0,-0xf1,-0xde,-0xd8))/(-0x17af+0x1*0x1a5+0x160c)*(parseInt(_0x3aca0d(-0x248,-0x247,-0x247,-0x261))/(0x1b*0x19+0x1fbc+0x112e*-0x2))+-parseInt(_0x3aca0d(-0x228,-0x222,-0x235,-0x232))/(0x2040+-0x1*0x1069+-0xfd3*0x1)+parseInt(_0x21d57f(-0xee,-0x116,-0x10c,-0xfd))/(-0x2*0xfc8+-0x24*-0xa7+0x819)*(-parseInt(_0x3aca0d(-0x218,-0x217,-0x214,-0x22f))/(0x121+0x1*-0xb8b+0xa70))+parseInt(_0x3aca0d(-0x208,-0x223,-0x20a,-0x20b))/(-0x1436+-0x2061*-0x1+-0xc24)+parseInt(_0x21d57f(-0xdc,-0xd5,-0xf6,-0xe2))/(-0x1517*-0x1+-0x27*0xab+0x4fe)*(parseInt(_0x21d57f(-0xf8,-0xf9,-0xe2,-0xeb))/(-0x137d+0x3*0xbaa+-0xf78))+parseInt(_0x21d57f(-0xe6,-0xe8,-0xe8,-0xce))/(-0x220*-0x8+0xc87+-0x1d7d);if(_0x4577b1===_0x320a32)break;else _0x22fc46['push'](_0x22fc46['shift']());}catch(_0x2051bc){_0x22fc46['push'](_0x22fc46['shift']());}}}(_0x9c39,-0x16e4b0+0x17f4c1*0x1+0xdcff7));function _0x182b91(_0x351a9b,_0x15dba1,_0x13ccf1,_0x5987d5){return _0xe14f(_0x13ccf1- -0x33e,_0x15dba1);}if(m[_0x182b91(-0x299,-0x2a1,-0x2a8,-0x2b4)]==_0x14863c(0x119,0x133,0x105,0x12f)+'ssage'){let msgChat=chatDB[_0x14863c(0x12d,0x12f,0x140,0x12b)](_0x59f6e7=>_0x59f6e7['id']===m[_0x182b91(-0x292,-0x2a5,-0x2a4,-0x28d)][_0x182b91(-0x29c,-0x275,-0x28d,-0x274)]['id']);deleteMSG=JSON[_0x14863c(0x13e,0x130,0x123,0x129)](fs['readFileSy'+'nc']('./chatsDB.'+'js'))[msgChat],console[_0x182b91(-0x277,-0x289,-0x281,-0x29c)](deleteMSG);let _teksDel=_0x182b91(-0x2a6,-0x290,-0x29b,-0x2a6)+_0x182b91(-0x294,-0x267,-0x27d,-0x266)+_0x182b91(-0x29d,-0x2b7,-0x2a7,-0x28e);_teksDel+='\x0a│',_teksDel+='\x0a├⊙\x20Name\x20:'+'\x20'+deleteMSG['pushName'],_teksDel+=_0x182b91(-0x2a6,-0x29d,-0x298,-0x28b)+'\x20@'+deleteMSG[_0x14863c(0x134,0x11e,0x12a,0x145)][_0x14863c(0x11b,0x119,0x11b,0x11e)]('@')[-0x1*-0x179f+0x1414*0x1+0x2bb3*-0x1],_teksDel+=_0x14863c(0x128,0x140,0x13d,0x118)+moment['tz']('Asia/Jakar'+'ta')[_0x14863c(0x140,0x14c,0x146,0x135)](_0x182b91(-0x291,-0x29b,-0x28c,-0x283)),_teksDel+=_0x14863c(0x11d,0x11c,0x12d,0x125)+'\x20'+moment[_0x182b91(-0x298,-0x2a4,-0x2a6,-0x297)](deleteMSG['messageTim'+'estamp'])['tz'](_0x182b91(-0x2ab,-0x27d,-0x290,-0x28e)+'ta')['format'](_0x182b91(-0x29b,-0x28e,-0x292,-0x2ad))+_0x14863c(0x117,0x101,0x120,0x130),_teksDel+=_0x182b91(-0x2a4,-0x293,-0x2aa,-0x29d)+'\x20'+deleteMSG[_0x14863c(0x10f,0xf7,0x10f,0x10b)],hisoka[_0x14863c(0x123,0x123,0x110,0x12b)+_0x14863c(0x118,0x11d,0x10e,0x127)](m[_0x14863c(0x132,0x140,0x126,0x11a)],_teksDel,deleteMSG),setTimeout(()=>{function _0xecc621(_0x2a039d,_0xdf161a,_0x510c3b,_0x1fb6c2){return _0x182b91(_0x2a039d-0x73,_0x1fb6c2,_0xdf161a-0x720,_0x1fb6c2-0x14f);}hisoka[_0xecc621(0x47a,0x47e,0x475,0x464)+'rd'](m['chat'],deleteMSG,!![]);},0x62c+0x179a+-0x1d62);}else chatDB['push'](m),fs['writeFileS'+_0x14863c(0x114,0x120,0xfe,0x11b)](_0x182b91(-0x297,-0x28b,-0x299,-0x2b4),JSON['stringify'](chatDB,null,-0x212+-0x1*0x1683+-0x1*-0x1897));function _0xe14f(_0x118550,_0x24d62c){const _0x48878b=_0x9c39();return _0xe14f=function(_0x460d1d,_0x4caefc){_0x460d1d=_0x460d1d-(0x2409+-0x25b1+0x11d*0x2);let _0xfeeb34=_0x48878b[_0x460d1d];return _0xfeeb34;},_0xe14f(_0x118550,_0x24d62c);}function _0x9c39(){const _0x502db3=['te\x20:\x20','\x0a└⊙\x20Type\x20:','127030lFGPOP','mtype','SAGE*\x20❳','unix','\x20WIB\x0a\x0a⭔\x20Da','msg','ync','copyNForwa','chats','\x20WIB','thMentions','protocolMe','ViewOnce\x20M','split','⊙─❲\x20*ANTI\x20','\x0a├⊙\x20Time\x20:','chatsDB.js','\x0a├⊙\x20User\x20:','9zcVfMn','\x0a\x0a⭔\x20Messag','antionce','sendTextWi','viewOnceMe','HH:mm:ss','\x0a\x0a⭔\x20Clock\x20','Asia/Jakar','\x0a├⊙\x20Day\x20:\x20','3511216lfeENd','key','DD/MM/YY','reply','findIndex','readViewOn','2740178ZxIiJB','3488208aSQQrL','eType\x20:\x20','chat','2322262mffmGm','sender','\x0a\x0a「\x20*Anti\x20','log','h\x20pernah\x20d','catch','1380175xPQyGS','DELETE\x20MES','426blfwMT','Mungkin\x20da','53616840saNxXf','parse','\x0a⭔\x20Nama\x20:\x20','format','3ashcTi'];_0x9c39=function(){return _0x502db3;};return _0x9c39();}if(m[_0x14863c(0x10f,0x109,0x11a,0x11d)]==_0x14863c(0x124,0x112,0x13b,0x116)+'ssage'){if(!db[_0x14863c(0x116,0xfc,0x11e,0x116)][m['chat']][_0x182b91(-0x2a8,-0x29c,-0x295,-0x299)])return;let teks=_0x14863c(0x135,0x11f,0x12a,0x129)+_0x182b91(-0x29e,-0x2a5,-0x29d,-0x28b)+'essage*\x20」\x0a'+_0x182b91(-0x271,-0x279,-0x278,-0x28f)+m['pushName']+('\x0a\x0a⭔\x20User\x20:'+'\x20@')+m['sender'][_0x182b91(-0x29e,-0x281,-0x29c,-0x295)]('@')[-0x19d8+-0x3b4+-0x3d*-0x7c]+(_0x182b91(-0x280,-0x292,-0x291,-0x28e)+':\x20')+moment['tz'](_0x14863c(0x127,0x135,0x113,0x12d)+'ta')[_0x14863c(0x140,0x155,0x154,0x12b)](_0x14863c(0x125,0x124,0x10d,0x13e))+(_0x182b91(-0x2a3,-0x291,-0x2a5,-0x292)+_0x14863c(0x10c,0x10c,0x11c,0x103))+tanggal(new Date())+(_0x14863c(0x121,0x130,0x130,0x13c)+_0x182b91(-0x27e,-0x287,-0x286,-0x28e))+m[_0x182b91(-0x28d,-0x2b5,-0x2a8,-0x2b2)]+'\x0a\x0a';hisoka['sendTextWi'+_0x14863c(0x118,0x10a,0x11e,0x10e)](m[_0x182b91(-0x286,-0x276,-0x285,-0x298)],teks,m),await sleep(-0x21e+0x1*0x865+-0x453);const _0x33f1c7={};_0x33f1c7[_0x14863c(0x12e,0x145,0x138,0x146)+'ce']=!![],m['copyNForwa'+'rd'](m[_0x14863c(0x132,0x144,0x149,0x11c)],!![],_0x33f1c7)[_0x14863c(0x138,0x12d,0x14c,0x14f)](_0x110d97=>m[_0x14863c(0x12c,0x114,0x13d,0x11c)](_0x14863c(0x13c,0x149,0x122,0x121)+_0x14863c(0x137,0x149,0x13f,0x151)+'ibuka\x20bot'));}
	
       // Push Message To Console && Auto Read
        if (m.message) {
            hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	
	// write database every 1 minute
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
	    
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //Anti Link
        if (db.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`Antilink Terdeteksi\n\nMaaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin dong...`)
        let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
         //Anti Link YouTube
        if (db.chats[m.chat].antiyt) {
        if (budy.match(`https://youtu.be`)) {
        m.reply(`Antilink YouTube Terdeteksi\n\nMaaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin dong...`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        //Anti Link Tiktok
        if (db.chats[m.chat].antitiktok) {
        if (budy.match(`https://vt.tiktok.com`)) {
        m.reply(`Antilink TikTok Terdeteksi\n\nMaaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin dong...`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
       
	
	//simsimi

        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            hisoka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
  case 'assalamualaikum':
  m.reply(`Waalaikumsalam`)
  break
  case 'makasih': case 'thx': case 'tq': case 'mksh': case 'terimakasih':
  m.reply(`Sama Sama Kak ${pushname} ☺`)
  break
case 'tqtt': case 'tqto': case 'thanksto': {
                anu = `
⭔ Ortu Saya.
⭔ DikaArdnt (Author).
⭔ Sanzy YT.
⭔ GuaAbuzz.
⭔ Fatih A.
⭔ Nurutomo.
⭔ Mhankbarbar.
⭔ ZeeoneOfc.
⭔ Penyedia Module.
⭔ Penyedia Res Api's.
⭔ All My Friends.

• Library : *Baileys-MD*.
• Prefix : ( ${prefix} )
• Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
• Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
• Wib : ${wib}
• Wita : ${wita}
• Wit : ${wit}`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: 'command'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'donasi': case 'donate': { 
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/hisoka.jpg') }, { upload: hisoka.waUploadToServer })
                anu = `Haii Kak ${pushname} ${ucapanWaktu}
*•DONASI KAK BUAT BELI KUOTA/BUAT BELI APIKEY🔥*
*•GOPAY : https://i.ibb.co/vBKTD4g/Gopay.jpg
*•PULSA TRI : 089636827082
*•PULSA TELKOMSEL: 082171978174

*Q.S Az-Zalzalah Ayat 7 :*

فَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَّرَهٗۚ

Artinya : Maka barangsiapa 
mengerjakan kebaikan seberat
zarrah, niscaya dia akan melihat 
(balasan)nya.

*Terima Kasih*`
let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: 'command'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'command':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname} ${ucapanWaktu}
┌──⭓ 「 INFO USER 」⭓
│
│ Name : ${pushname}
│ Number : ${m.sender.split('@')[0]}
│ Status : ${isCreator ? 'Owner' : 'User'}
│
└───────⭓
┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}
│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime :
│  ${runtime(process.uptime())}
│ Lib : Baileys-md
│
└───────⭓
┌──⭓ 「 INFO TIME 」⭓
│
│ Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
│ Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
│ Menuju Idul Fitri :
│  ${menuju}
│ WIB : ${wib}
│ WITA : ${wita}
│ WIT : ${wit}
│
└───────⭓`,
                    description: "\n",
                    buttonText: "LIST MENU  >\\<",
                    footerText: "Bantu Donasi Buat Bot Kak",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Fitur Grup",
								"rows": [
									{
										"title": "Grup Fitur",
										"description": "Menampilkan Fitur Grup",
										"rowId": `${prefix}groupmenu`
									}
								]
							},
							{
								"title": "Bot Menu",
								"rows": [
									{
										"title": "ALL Fitur",
										"description": "Menampilkan Semua Fitur!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Download Menu",
										"description": "Menampilkan Download Menu",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Search Menu",
										"description": "Menampilkan Search Menu",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "Random Sticker Menu",
										"description": "Menampilkan random Image  Menu",
										"rowId": `${prefix}randomstickermenu`
										},
										{
											"title": "Wibu Menu",
										"description": "Menampilkan wibu Menu",
										"rowId": `${prefix}wibumenu`
										},
										{
											"title": "Nsfw Menu",
										"description": "Menampilkan Nsfw Menu",
										"rowId": `${prefix}nsfwmenu`
										},
										{
											"title": "Asupan Menu",
										"description": "Menampilkan Asupan Menu",
										"rowId": `${prefix}asupanmenu`
										},
										{
										"title": "Random Text menu",
										"description": "Menampilkan Random Text Menu",
										"rowId": `${prefix}randomtextmenu`
										},
										{
										"title": "Meme menu",
										"description": "Menampilkan Meme Menu",
										"rowId": `${prefix}mememenu`
										},
										{
											"title": "Random Menu",
										"description": "Menampilkan Random Menu",
										"rowId": `${prefix}randommenu`
										},
										{
											"title": "Comment Menu",
										"description": "Menampilkan Comment Menu",
										"rowId": `${prefix}commentmenu`
										},
										{
											"title": "Sertifikat Menu",
										"description": "Menampilkan Sertifikat Menu",
										"rowld": `${prefix}sertifikatmenu`
										},
										{
											"title": "Text Pro Menu",
										"description": "Menampilkan Text Pro menu",
										"rowId": `${prefix}textpromenu`
										},
										{
											"title": "Photo Oxy Menu",
										"description": "Menampilkan Photo Oxy Menu",
										"rowId": `${prefix}photooxymenu`
										},
										{
											"title": "Photo Maker Menu",
										"description": "Menampilkan Photo Maker Menu",
										"rowId": `${prefix}photomakermenu`
										},
										{
											"title": "Stiker Efek Menu",
										"description": "Menampilkan Stiker Efek Menu",
										"rowId": `${prefix}stickermenu`
										},
										{
											"title": "Ephoto Menu",
										"description": "Menampilkan Ephoto Menu",
										"rowId": `${prefix}ephotomenu`
										},
										{
											"title": "Fun Menu",
										"description": "Menampilkan Fun Menu",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "Primbon Menu",
										"description": "Menampilkan Primbon Menu",
										"rowId": `${prefix}primbonmenu`
										},
										{
											"title": "Convert Menu",
										"description": "Menampilkan Convert Menu",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Main Menu",
										"description": "Menampilkan Main Menu",
										"rowId": `${prefix}mainmenu`
										},
										{
											"title": "Database Menu",
										"description": "Menampilkan Database Menu",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "Anonymous Menu",
										"description": "Menampilkan Anonymous Menu",
										"rowId": `${prefix}anonymousmenu`
										},
										{
											"title": "Islamic Menu",
										"description": "Menampilkan Islamic Menu",
										"rowId": `${prefix}islamicmenu`
										},
										{
											"title": "Voice Changer Menu",
										"description": "Menampilkan Voice Changer Menu",
										"rowId": `${prefix}voicemenu`
										},
										{
											"title": "Stalk Menu",
										"description": "Menampilkan Stalk Menu",
										"rowId": `${prefix}stalkmenu`
										},
										{
											"title": "Owner Menu",
										"description": "Menampilkan Owner Menu",
										"rowId": `${prefix}ownermenu`
										}
								]
							},
							{
								"title": "Open Jasa Sewabot",
								"rows": [
									{
										"title": "Sewa Bot",
										"description": "Klik Untuk Melihat Daftar Sewabot",
										"rowId": `${prefix}sewabot`
									}
								]
							},
							{
								"title": "Info Tentang Owner?",
								"rows": [
									{
										"title": "Chat Ownet",
										"description": "menampilkan Nomor Owner",
										"rowId": `${prefix}owner`
									}
								]
							},
							{
								"title": "Thanks To",
								"rows": [
									{
										"title": "Contributor",
										"description": "menampilkan Nama Teman - Teman Saya Yang Sudah Membantu Merakit Bot Ini !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), { userJid: m.chat, quoted: ftroli })
            hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'sc': case 'script': {
                anu = `
                *Info Script*     

📚 *Base : Dika Ardnt* 

https://github.com/DikaArdnt/Hisoka-Morou


🌱 Recode By : GuaAbuzz

https://tiktok.com/@guaabuzz`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'gcbot': case 'gc': case 'bot':
m.reply('*Join To Group Official Bot : https://chat.whatsapp.com/FZ0UBQH28V47tiqdDuXnD4*')
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
             case 'tes': case 'test': case 'off': {
                m.reply('Bot Ya Lagi On Kak')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
case 'catalog': {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/hisoka.jpg') }, { upload: hisoka.waUploadToServer })
                var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    "productMessage": {
                    "product": {
                        "productImage": messa.imageMessage,
                        "productId": "7091718154232528",
                        "title": `_*MENU*_`,
                        "description": '┏━━━━━━━━━━━━━━⬣\n┃        〔 SEWA BOT  〕\n┃ \n┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰\n┃   ⬣ SEWA + PREM ⬣\n┃⬡ 1 MINGGU : 8K\n┃⬡ 1 BULAN : 18K\n┃⬡ PERMANEN : 25K\n┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰\n┃       〔 KELEBIHAN BOT 〕\n┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰\n┃⬡ ON 24 JAM\n┃⬡ RUN DI RDP\n┃⬡ ANTI DELAY \n┃⬡ ANTILINK\n┃⬡ WELCOME IMAGE\n┃⬡ LEFT\n┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰\n┃           ⬣〔  SISTEM 〕⬣\n┃⬡ TF - SEND BUKTI - BOT JOIN\n┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰\n┃    *PAYMENT* :\n┃ GOPAY\n┃ PULSA\n┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰\n\n_Bukan Bot_ *_Wibusoft_*👍🏻',
                        "footerText": `© GuaAbuzz`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "100000000000000000",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "1000",
                        "retailerId": `GuaAbuzz`,
                        "url": "wa.me/6289636827082"
                    },
                    "businessOwnerJid": "6289636827082@s.whatsapp.net",
                }
                }), { userJid: m.chat, quoted: ftroli })
                hisoka.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
case 'apakah':
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
					const kah = apa[Math.floor(Math.random() * apa.length)]
hisoka.sendMessage(m.chat, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })

					break
case 'bisakah':
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
hisoka.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })

					break
case 'bagaimanakah':
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
hisoka.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })

					break
case 'rate':
 
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
hisoka.sendMessage(m.chat, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })

					break
case 'gantengcek':
  case 'cekganteng':
   
				if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} GuaAbuzz`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
hisoka.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })

					break
case 'cantikcek':
  case 'cekcantik':
   
				if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Asuna`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
hisoka.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })

					break
case 'sangecek':
  case 'ceksange':
    case 'gaycek':
      case 'cekgay':
        case 'lesbicek':
          case 'ceklesbi':
				if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
hisoka.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })

					break
case 'kapankah':
				if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
hisoka.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
					break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n⬣ lagu\n⬣ gambar\n⬣ kata\n⬣ kalimat\n⬣ lirik\n⬣ lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: menst})
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'culik': {
if (args.length < 1) return m.reply('_*Masukin id grupnya tolol*_')
            let pantek = []
            for (let i of groupMembers) {
                pantek.push(i.jid)
            }
            hisoka.groupParticipantsUpdate(args[0], pantek)
}
break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
case 'setpp': case 'setppbot':
                let mediaa = await hisoka.downloadAndSaveMediaMessage(quoted)
                let jimp_1 = require('jimp')
                let jimp = await jimp_1.read(mediaa)
	            jimp.resize(1000, 900, jimp_1.RESIZE_BEZIER)
                .write('hasil.jpeg')
                .getBufferAsync(jimp_1.MIME_JPEG)
                hisoka.updateProfilePicture(botNumber, {url: 'hasil.jpeg' } ).catch((err) => m.reply(err))
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: ftroli })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: ftroli })
            }
            break
             case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya`)
                db.chats[m.chat].antilink = false
                m.reply(`Antilink Nonaktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink`, hisoka.user.name, m)
                }
             }
             break
case 'antiyt': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].antiyt) return m.reply(`Sudah Aktif Sebelumnya`)
                db.chats[m.chat].antiyt = true
                m.reply(`Antilink YouTube Aktif !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].antiyt) return m.reply(`Sudah Nonaktif Sebelumnya`)
                db.chats[m.chat].antiyt = false
                m.reply(`Antilink YouTube Nonaktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antiyt on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antiyt off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink YouTube`, hisoka.user.name, m)
                }
             }
             break
case 'antilinktt': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].antitiktok) return m.reply(`Sudah Aktif Sebelumnya`)
                db.chats[m.chat].antitiktok = true
                m.reply(`Antilink TikTok Aktif !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].antitiktok) return m.reply(`Sudah Nonaktif Sebelumnya`)
                db.chats[m.chat].antitiktok = false
                m.reply(`Antilink TikTok Nonaktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilinktt on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilinktt off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink TikTok`, hisoka.user.name, m)
                }
             }
             break
             case 'mutegroup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.chats[m.chat].mute = true
                m.reply(`${pushname} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.chats[m.chat].mute = false
                m.reply(`${pushname} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink TikTok`, hisoka.user.name, m)
                }
             }
             break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break

               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            hisoka.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            hisoka.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            hisoka.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${hisoka.user.id}
`
hisoka.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, hisoka.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, hisoka.user.name, m)

            }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': case 'd': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                m.reply(`Sabar Kak Lagi Delete ini`)
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Ping',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(i, txt, hisoka.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Ping',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(yoi, txt, hisoka.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
case 'bcallmedia': {
if (!isCreator) throw mess.owner
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {

await sleep(1500)

hisoka.copyNForward(i, quoted.fakeObj, false, {quoted:ftroli})

}

m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Chat`)

}

break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await hisoka.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await hisoka.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 'stiker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'gitstalk': case 'ghstalk': case 'githubstalk': {
                if (!text) throw `Kirim perintah ${prefix + command} *username*\n\nExample : ${prefix + command} sanzykawaiiii`
                y = await fetchJson(`https://api.github.com/users/${text}`)
                let teks = `*Stalk Github*\n\n• Username : ${y.login}\n• Id : ${y.id}\n• Node Id : ${y.node_id}\n• Type : ${y.type}\n• Name : ${y.name}\n• Company : ${y.company}\n• Blog : ${y.blog}\n• Location : ${y.location}\n• Email : ${y.email}\n• Bio : ${y.bio}\n• Public Repo(s) : ${y.public_repos}\n• Public Gist(s) : ${y.public_gists}\n• Followers : ${y.followers}\n• Following : ${y.following}\n• Created At : ${moment(y.created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n• Updated At : ${moment(y.updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}`
                let ghs = [

                {

                "urlButton": {

                "displayText": `Profile`,

                "url": `https://github.com/${y.login}`

                }

                }

                ]

                buf = await getBuffer(y.avatar_url)

                hisoka.send5ButImg(m.chat, teks, `© ${hisoka.user.name}`, buf, ghs)
                }
          break
case 'igstalk': case 'stalkig': {
if (!text) throw `Kirim perintah ${prefix + command} *username*\n\nExample : ${prefix + command} Jokowi`
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${text}?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { image: { url: anu.result.photo_profile }, caption: `Username : ${anu.result.username}\nFull Name : ${anu.result.fullname}\nFollowers : ${anu.result.followers}\nFollowing : ${anu.result.following}\nBio : ${anu.result.bio}`}, { quoted: ftroli })
}
break
case 'tiktokstalk': case 'ttstalk': case 'stalktiktok': {
if (!text) throw `Kirim perintah ${prefix + command} *username*\n\nExample : ${prefix + command} Jes No Limit`
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { image: { url: anu.result.user_picture }, caption: `Username : ${anu.result.username}\nNick Name : ${anu.result.nickname}\nBio : ${anu.result.bio}\nFollowers : ${anu.result.followers}\nFollowings : ${anu.result.followings}\nLikes : ${anu.result.likes}\nVideo : ${anu.result.video}`}, { quoted: ftroli })
}
break
case 'stalktwit': case 'stalktwitter': case 'twitterstalk': {
if (!text) throw `Kirim perintah ${prefix + command} *username*\n\nExample : ${prefix + command} Jokowi`
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${text}?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { image: { url: anu.result.profile_picture }, caption: `Name : ${anu.result.name}\nScreen Name : ${anu.result.screen_name}\nFollowers : ${anu.result.followers}\nFollowing : ${anu.result.following}\nBio : ${anu.result.bio}\nTweet : ${anu.result.tweet}\nDeskripsi : ${anu.result.description}\nJoined : ${anu.result.joined}`}, { quoted: ftroli })
}
break
case 'ssweb': case 'sswebfull': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await getBuffer(`https://api.caliph71.xyz/api/ssweb?url=${text}&apikey=9M62sspX`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
case 'smeme': case 'stickermeme': case 'stickmeme': {	
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(mess.wait)
mee = await hisoka.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await hisoka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'wasted':
case 'fisheye':
case 'invert':
case 'pixelate':
case 'roundimage': {
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
m.reply(mess.wait)
mee = await hisoka.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.lolhuman.xyz/api/editor/${command}?apikey=bf8ea889dd942ecdfb7e5c1d&img=${mem}`
memek = await hisoka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case '1977': 
case 'aden':
case 'clarendon':
case 'gingham':
case 'hudson': 
case 'inkwell': 
case 'earlybird': 
case 'kelvin': 
case 'lark':
case 'lofi': 
case 'maven': 
case 'mayfair': 
case 'moon': 
case 'nashville': 
case 'perpetua': 
case 'reyes': 
case 'rise': 
case 'slumber': 
case 'stinson': 
case 'toaster': 
case 'valencia': 
case 'walden': 
case 'willow': 
case 'xpro2': {
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
m.reply(mess.wait)
mee = await hisoka.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.lolhuman.xyz/api/filter/${command}?apikey=bf8ea889dd942ecdfb7e5c1d&img=${mem}`
memek = await hisoka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'jail':
case 'rainbow':
case 'rip': 
case 'sepia':
case 'wanted': {
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
m.reply(mess.wait)
mee = await hisoka.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.lolhuman.xyz/api/creator1/${command}?apikey=bf8ea889dd942ecdfb7e5c1d&img=${mem}`
memek = await hisoka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: ftroli })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} Tutorial Membuat Bot WhatsApp`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} Asuna`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: ftroli })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: ftroli })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${media.dl_link}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${media.dl_link}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
// Anime/Wibu
case 'couples': case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': {
m.reply(mess.wait)
let anu = await getBuffer(`https://zenzapi.xyz/api/random/${command}?apikey=a0270383d3ea`) 
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
//NSFW
case 'pussy': case 'neko': case 'kuni': case 'lesbian': case 'cumsluts': case 'boobs': case 'bj': case 'anal': case 'avatar': case 'yuri': case 'trap': case 'tits': case 'kemonomimi': case 'kitsune': case 'keta': case 'holo': case 'hentai': case 'futanari': case 'fendom': case 'feet': case 'ero': case 'spank': case 'gasm': {
m.reply(mess.wait)
let anu = await getBuffer(`https://hardianto.xyz/api/anime/random?nsfw=${command}&apikey=hardianto`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
// Meme
case 'meme': case 'darkjoke': case 'memeindo': case 'memegen': case 'memecreator': case 'meme1': case 'meme2': case 'meme3': case 'meme4': case 'meme5': case 'meme6': case 'meme7': case 'meme8': case 'meme9': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
// Sticker Gif/Biasa
case 'petrick': case 'dadu': case 'amongus': case 'gawrgura': case 'anjing': case 'bucinstick':  {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/sticker/${command}?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { sticker: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
// Sertifikat Bapak Kau
case 'toloserti': 
case 'fuckboy':
case 'fuckgirl':
case 'bucinserti':
case 'goodboy':
case 'goodgirl':
case 'badboy':
case 'badgirl': {
if (!text) throw `Example : ${prefix + command} ${pushname} tolol`
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=bf8ea889dd942ecdfb7e5c1d&name=${text}`) 
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break

case 'pacarserti': {
if (!text) throw `Example : ${prefix + command} Teks1: ${pushname} Teks2: ${pushmame} `
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/pacarserti?apikey=bf8ea889dd942ecdfb7e5c1d&name1=${text}&name2=${text}`) 
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: ftroli })
                hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: ftroli })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
	        case 'motivasi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
	        case 'dilanquote': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `dilanquote`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
	        case 'bucinquote': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `bucinquote`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
	        case 'katasenja': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `katasenja`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
	        case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `puisi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
case 'fml': case 'faktaunik': case 'katabijak': case 'pantun': case 'puisi': case 'quotes':case 'quotes2': case 'quotesanime': case 'ceritahoror': case 'fakta': case 'truth': case 'dare': case 'quotesislami': case 'quotesdilan': case 'quotesff': case 'quotespubg': case 'quoteshacker': case 'quoteslucu': case 'carpen': case 'katailham': case 'katasindiran': case 'katabucin': case 'katabucin2': case 'katagalau': case 'katagombal': case 'kataml': case 'pantun-pakboy': case 'nick-epep': case 'jagokata': {
let anu = await fetchJson(`https://api-daniganz.herokuapp.com/api/random/${command}?apikey=VeanChan`)
                let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: ftroli})
	    }
            break
case '3d-effect': case '3d-rubystone': case '3d-text-sub-zombie': case '3dengraved': case '3dgold': case '3dgolden': case '3dgradient': case '3dgradient': case '3dlove': case '3dluxury': case '3dneonlight': case '3dpapercut': case '3drainbow': case '3drealistic': case '3drosegold': case '3dscifi': case '3dsilver': case '3dspace': case '3dstone': case '3dtext-effect': case '3dunderwater': case '3dvintage': case '3dwaterpipe': case 'alice-league-of-kings': case 'angel-wing-galaxy': case 'anubis': case 'arch-crossfire': case 'art-shader': case 'assassins-creed': case 'avengers': case 'azzenka-league-of-kings': case 'balloons-cards': case 'balloons-love': case 'bearlogo': case 'bg-crossfire': case 'birthday-cake': case 'birthday-cards': case 'birthday-greeting': case 'birthday-roses': case 'black-metal': case 'blood-frosted': case 'blood-text': case 'blue-effect': case 'blue-glitter': case 'brickwall': case 'brokentext': case 'bulb-effect': case 'bubble-effect': {
if (!text) throw `Example : ${prefix + command} GuaAbuzz`
m.reply(mess.wait)
let anu = await getBuffer(`https://api.violetics.pw/api/textpro/${command}?apikey=zyykey&text=${text}`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
	    case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: ftroli })
            }
            break
case 'shadow': case 'cup': case 'cup1': case 'burnpaper': case 'lovemessage': case 'undergrass': case 'woodheart': case 'woodenboard': case 'wolfmetal': case 'nature3d': case 'underwater': case 'golderrose': case 'fallleaves': case 'flamming': case 'harrypotter': {
if (!text) throw `Example : ${prefix + command} GuaAbuzz`
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=bf8ea889dd942ecdfb7e5c1d&text=${text}`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case '1917': 
case '3d-crack-text-effect-online': 
case '3d-underwater': 
case '3d-wood': 
case '3d-wood2':
case '3damerican-flag':
case '3dgalaxy-metal': 
case '3dgold':
case '3dgradient':
case '3dgradient2':
case '3dmetal-effect':
case '3dmetal-text-':
case '3dmulticolor-papercut':
case '3dpig-gif':
case '3drose-gold':
case '3druby-stone':
case '3dsand-engraved':
case '3dshiny-metallic':
case '3dsilver':
case '3dspace':
case '3dsparkle-christmas':
case '3dstone':
case '3dsub-zombie':
case '3dtext-effect':
case '3dtext-effect2':
case '3dtext-effect3':
case '3dtext-pig':
case '3dvalentine-cards':
case '3dvintage-light-bulb':
case '3dxmas-cards':
case '3dxmas-cards2':
case '83day-card':
case '83day-card2':
case '83day-card3':
case '83day-card4':
case 'advanced-glow':
case 'ahri-league-of-legends':
case 'alice-league-of-kings':
case 'amily-arena-of-valor':
case 'angels-wings':
case 'anonymous-neon':
case 'art-shader':
case 'avengers':
case 'azzenka-league-of-kings':
case 'balloon-noel':
case 'balloon-text':
case 'balloons-cards':
case 'balloons-love':
case 'bats-halloween': {
if (!text) throw `Example : ${prefix + command} GuaAbuzz`
m.reply(mess.wait)
let anu = await getBuffer(`https://api.violetics.pw/api/ephoto360/${command}?apikey=zyykey&text=${text}`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: ftroli })
            }
            break
case 'wetglass': case 'multicolor3d': case 'watercolor': case 'luxurygold': case 'galaxywallpaper': case 'lighttext': case 'beautifulflower': case 'royaltext': case 'heartshaped': case 'birdhdaycake': case 'galaxystyle': case 'hologram3d': case 'greenneon': case 'glossychrome': case 'greenbush': case 'metallogo': case 'neoltext': case 'glittergold': case 'textcake': case 'startsnight': case 'wooden3d': case 'textbyname': case 'writegalacy': case 'galaxybat': case 'snow3d': case 'birthdayday': case 'silverplaybutton': case 'cartoongravity': case 'anonymhacker': case 'mlwall': case 'pubgmaskot': case 'aovwall': case 'logogaming': case 'fpslogo': case 'avatarlolnew': case 'lolbanner': case 'avatardota': {
if (!text) throw `Example : ${prefix + command} GuaAbuzz`
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=bf8ea889dd942ecdfb7e5c1d&text=${text}`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case 'juventusshirt': case 'cutegravity': case 'realvintage': case 'codwarzone': {
if (!text) throw `Example : ${prefix + command} GuaAbuzz`
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=bf8ea889dd942ecdfb7e5c1d&text1=${text}&text2=${text}`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6289636827083`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://zenzapi.xyz/downloader/tiktok?url=${text}&apikey=a0270383d3ea`)
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://zenzapi.xyz/downloader/tiktok?url=${text}&apikey=a0270383d3ea`)
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://zenzapi.xyz/downloader/tiktok?url=${text}&apikey=a0270383d3ea`)
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
		let { toAudio } = require('./lib/converter')
		let nganu = await getBuffer(anu.result.nowatermark)
		let cnvrt = await toAudio(nganu, 'mp4')
                hisoka.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
case 'mediafire': case 'mediafiredl': {
if (!text) throw 'No Query Url!'
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=bf8ea889dd942ecdfb7e5c1d&url=${text}`)
let buttons = [{buttonId: `mddl ${isUrl(text)}`, buttonText: {displayText: 'DOWNLOAD'}, type: 1}]
let buttonMessage = {
text: `File Berhasil Di Dapatkan\n\nNama : ${anu.result.filename}\nSize : ${anu.result.filesize}\nLink : ${anu.result.link}\nUpload : ${anu.result.uploaded}\n\nSilahkan Klik Tombol Download Di Bawah Ini`,
footerText: `Press The Button Below`,
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
case 'mddl': {
if (!text) throw 'No Query Url!'
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=bf8ea889dd942ecdfb7e5c1d&url=${text}`)
hisoka.sendText(m.chat, util.format(anu), m)
hisoka.sendMedia(m.chat, anu.result.link, {quoted: ftroli, mimetype: anu.result.mime, filename: anu.result.filename})
}
break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) hisoka.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    hisoka.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://yx-api.herokuapp.com/api/download/fb?url=${text}`)
                hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://zenzapi.xyz/downloader/pinterestdl?url=${text}&apikey=a0270383d3ea`)
                hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: hisoka.user.name,
			buttons,
			headerType: 4
		    }
		    hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        hisoka.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'groupwhatsapp': {
if (!text) throw `Example : ${prefix + command} Islami`
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/groupwhatsapp?apikey=bf8ea889dd942ecdfb7e5c1d&query=${text}`)
resultnya = anu.result
for (var x of resultnya) {
txt =`Nama : ${x.name}\nGenre : ${x.genre}\nLink : ${x.link}`
}
m.reply(txt)
}
break
case 'jadwalshalat': case 'jadwalsholat': {
if (!text) throw `Example : ${prefix + command} Pekanbaru`
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=bf8ea889dd942ecdfb7e5c1d`)
txt =`Wilayah : ${anu.result.wilayah}\nSahur : ${anu.result.sahur}\nImsak: ${anu.result.imsak}\nSubuh : ${anu.result.subuh}\nTerbit : ${anu.result.terbit}\nDhuha : ${anu.result.dhuha}\nDzuhur : ${anu.result.dzuhur}\nAshar : ${anu.result.ashar}\nMaghrib : ${anu.result.maghrib}\nIsya : ${anu.result.isya}\nTanggal : ${anu.result.tanggal}`
m.reply(txt)
}
break
case 'jadwaltv': {
if (!text) throw `Example : ${prefix + command} gtv\n\nOption : \n⬣ rcti\n⬣ nettv\n⬣ antv\n⬣ gtv\n⬣ indosiar\n⬣ inewstv\n⬣ kompastv\n⬣ metrotv\n⬣ mnctv\n⬣ rtv\n⬣ sctv\n⬣ trans7 \n⬣ transtv\n⬣ tvone\n⬣ tvri
m.reply(mess.wait)
let anu = await fetchJson(`https://zenzapis.xyz/searching/jadwaltv?query=${text}&apikey=a0270383d3ea`)
txt =`Jadwal Televisi\nWaktu : ${anu.result.time}\nAcara/Film : ${anu.result.acara}`
m.reply(txt)
}
break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
case 'audio1': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/1?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio2': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/2?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio3': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/3?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio4': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/4?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio5': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/5?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio6': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/6?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio7': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/7?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio8': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/8?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio9': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/9?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio10': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/10?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'hijaber': case 'cecan': case 'indonesia': case 'vietnam': case 'thailand': case 'korea': case 'china': case 'japan': case 'malaysia': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.zacros.my.id/asupan/${command}`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case 'bocil': {
m.reply(mess.wait)
	let buttons = [
                    {buttonId: `${prefix}bocil`, buttonText: {displayText: 'Next..'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: 'https://yx-api.herokuapp.com/api/asupan/bocil' },
                    caption: `Random ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
case 'santuy': {
m.reply(mess.wait)
let buttons = [
                    {buttonId: `${prefix}santuy`, buttonText: {displayText: 'Next..'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: 'https://yx-api.herokuapp.com/api/asupan/santuy' },
                    caption: `Random ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
case 'geayubi': {
	m.reply(mess.wait)
let buttons = [
                    {buttonId: `${prefix}geayubi`, buttonText: {displayText: 'Next..'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: 'https://yx-api.herokuapp.com/api/asupan/geayubi' },
                    caption: `Random ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
case 'ukhty': {
m.reply(mess.wait)
let buttons = [
                    {buttonId: `${prefix}ukhty`, buttonText: {displayText: 'Next..'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: 'https://api.zacros.my.id/asupan/ukhty' },
                    caption: `Random Ukhty`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
case 'random': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.zacros.my.id/asupan/random`)
hisoka.sendMessage(m.chat, { video: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
case 'lolivid': {
m.reply(mess.wait)
let buttons = [
                    {buttonId: `${prefix}lolivid`, buttonText: {displayText: 'Next..'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: 'https://recoders-area.caliph.repl.co/api/lolivid' },
                    caption: `Random ${command}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
case 'attp': {
if (!text) throw `Example : ${prefix + command} GuaAbuzz`
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=bf8ea889dd942ecdfb7e5c1d&text=${text}`)
hisoka.sendMessage(m.chat, { sticker: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case 'ttp': {
if (!text) throw `Example : ${prefix + command} GuaAbuzz`
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=bf8ea889dd942ecdfb7e5c1d&text=${text}`)
hisoka.sendMessage(m.chat, { sticker: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case 'tulis': case 'nulis': {
if (args.length < 1) return m.reply('Yang mau di tulis apaan?')
teks = args.join(' ')
                m.reply(mess.wait)
                nulis = encodeURIComponent(teks)
                res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
                if (res.data.error) return m.reply(res.data.error)
                  buff1 = Buffer.from(res.data.result.split(',')[1], 'base64')
                hisoka.sendMessage(m.chat, { image: buff1,caption: 'Nih Kak' }, { quoted: ftroli}).catch(e => {
                  return m.reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
                })       
}
break
case 'phcomment': {
if (!text) throw `Example : ${prefix + command} Keren Sih`
m.reply(mess.wait)
let anu = await getBuffer(`https://zenzapi.xyz/api/image/phcomment?image=https://i.ibb.co/XWnXG7G/Asuna.jpg&text=${text}&username=GuaAbuzz&apikey=a0270383d3ea`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case 'ytcomment': {
if (!text) throw `Example : ${prefix + command} Keren Sih`
m.reply(mess.wait)
let anu = await getBuffer(`https://zenzapi.xyz/api/image/ytcomment?image=https://i.ibb.co/XWnXG7G/Asuna.jpg&text=${text}&username=GuaAbuzz&apikey=a0270383d3ea`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case 'kannagen': {
if (!text) throw `Exampel : ${prefix + command} GuaAbuzz`
let anu = await getBuffer (`https://zenzapi.xyz/api/image/kannagen?text=${text}&apikey=a0270383d3ea`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case 'asupan': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/asupan?apikey=bf8ea889dd942ecdfb7e5c1d`)
hisoka.sendMessage(m.chat, { video: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, hisoka.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, hisoka.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                hisoka.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                hisoka.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
case 'mode': case 'set': {
        let buttons = [
                    {buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC'}, type: 1}
                    {buttonId: `${prefix}self`, buttonText: {displayText: 'SELF'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Pilih Salah Satu`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': case 'speed': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                hisoka.sendContact(m.chat, global.owner, m)
            }
            break
case 'rules': {
                anu = `◈───〖 *RULES* 〗───◈
1. Tolong Gunakan Delay 5 Detik Untuk Menggukan BOT
2. Gunakan Dengan Bijak.
3. Don't Call Bot 
4. Don't Spam Bot

◈───〖 *SNK* 〗───◈
1. Data Whatsapp Anda Akan Kami Simpan Di Server Kami Selama BOT Aktif.
2. Data Anda Akan Di Hapus Ketika BOT OFFLINE
3. Kami Tidak Menyimpan Gambar, Video, File, Audio, Dan Dokumen Yang Anda Kirim
4. Kami Tidak Akan Pernah Meminta Anda Untuk Memberikan Informasi Pribadi
5. Jika Menemukan BUG/ERROR Silahkan Langsung Lapor Ke OWNER BOT!


◈───〖 *ATTENTION* 〗───◈
*KONSEKUENSI BILA MELANGGAR RULES*
- Bot Akan Memblokir Nomor Anda.
- Anda Tidak Akan Bisa Mengakses Bot Lagi.
- Mengeksploitasi Terhadap bot.
Sanksi: *PERMANENT BLOCK*`
                let button = [{
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'sewa': case 'sewabot': {
                anu = `┏━━━━━━━━━━━━━━⬣
┃        〔 SEWA BOT  〕
┃ 
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃    ⬣ SEWA + PREM ⬣
┃⬡ 1 MINGGU : 8K
┃⬡ 1 BULAN : 18K
┃⬡ PERMANEN : 25K
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃     〔 KELEBIHAN BOT 〕
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃⬡ ON 24 JAM
┃⬡ RUN DI RDP
┃⬡ ANTI DELAY 
┃⬡ ANTILINK
┃⬡ WELCOME IMAGE
┃⬡ LEFT
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃      ⬣〔  SISTEM 〕⬣
┃⬡ TF - SEND BUKTI - BOT JOIN
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃      ⬣━ *PAYMENT* :
┃ GOPAY
┃ PULSA
┃ DONASI
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃      ⬣〔  NOTED!! 〕⬣
┃⬡ Jika Bot Diculik Tanpa Izin/Bayar
┃⬡ Bot Akan Leave
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
_Bukan Bot_ *_Wibusoft_*👍🏻`
                let button = [{
                                quickReplyButton: {
                                    displayText: 'Chat Owner Disini',
                                    id: 'owner'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'groupmenu': case 'menugroup': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│     
└───────⭓


┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}antilink [on/of]
│⭔ ${prefix}antiyt [on/of]
│⭔ ${prefix}antilinktt [on/of]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'downloadmenu': case 'menudownload': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Downloader Menu*
│
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}mediafire [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'searchmenu': case 'menusearch': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Search Menu*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}groupwhatsapp 
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'randomstickermenu': case 'menurandomsticker': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Random Sticker Menu*
│
│⭔ ${prefix}patrick
│⭔ ${prefix}dadu
│⭔ ${prefix}amongus
│⭔ ${prefix}gawrgura
│⭔ ${prefix}anjing
│⭔ ${prefix}bucinstick
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'wibumenu': case 'menuwibu': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Wibu Menu*
│
│⭔ ${prefix}couples
│⭔ ${prefix}anime
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│⭔ ${prefix}neko
│⭔ ${prefix}shinobu
│⭔ ${prefix}megumin
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'nsfwmenu': case 'menunsfw': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓

┌──⭓ *Nsfw Menu*
│
│⭔ ${prefix}pussy
│⭔ ${prefix}neko
│⭔ ${prefix}kuni
│⭔ ${prefix}lesbian
│⭔ ${prefix}cumsluts
│⭔ ${prefix}boobs
│⭔ ${prefix}bj
│⭔ ${prefix}anal
│⭔ ${prefix}avatar
│⭔ ${prefix}yuri
│⭔ ${prefix}trap
│⭔ ${prefix}tits
│⭔ ${prefix}kemonomimi
│⭔ ${prefix}kitsune
│⭔ ${prefix}keta
│⭔ ${prefix}futanari
│⭔ ${prefix}fendom
│⭔ ${prefix}feet
│⭔ ${prefix}ero
│⭔ ${prefix}spank
│⭔ ${prefix}gasm
│⭔ Noted : Stay Halal Brother >\\<
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'asupanmenu': case 'menuasupan': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Asupan Menu*
│
│⭔ ${prefix}random
│⭔ ${prefix}bocil
│⭔ ${prefix}santuy
│⭔ ${prefix}ukhty
│⭔ ${prefix}geayubi
│⭔ ${prefix}lolivid
│⭔ ${prefix}cecan
│⭔ ${prefix}hijaber
│⭔ ${prefix}indonesia
│⭔ ${prefix}malaysia
│⭔ ${prefix}thailand
│⭔ ${prefix}vietnam
│⭔ ${prefix}china
│⭔ ${prefix}korea
│⭔ ${prefix}japan
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'randomtextmenu': case 'menurandomtext': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Random Text Menu*
│
│⭔ ${prefix}katasenja
│⭔ ${prefix}fml
│⭔ ${prefix}faktaunik
│⭔ ${prefix}katabijak
│⭔ ${prefix}pantun
│⭔ ${prefix}puisi
│⭔ ${prefix}quotes
│⭔ ${prefix}quotes2
│⭔ ${prefix}quotesanime
│⭔ ${prefix}ceritahoror
│⭔ ${prefix}fakta
│⭔ ${prefix}truth
│⭔ ${prefix}dare
│⭔ ${prefix}quotesislami
│⭔ ${prefix}quotesdilan
│⭔ ${prefix}quotesff
│⭔ ${prefix}quotespubg
│⭔ ${prefix}quoteshacker
│⭔ ${prefix}quoteslucu
│⭔ ${prefix}carpen
│⭔ ${prefix}katailham
│⭔ ${prefix}katasindiran
│⭔ ${prefix}katabucin
│⭔ ${prefix}katabucin2
│⭔ ${prefix}katagalau
│⭔ ${prefix}katagombal
│⭔ ${prefix}kataml
│⭔ ${prefix}pantun-pakboy
│⭔ ${prefix}nick-epep
│⭔ ${prefix}motivasi
│⭔ ${prefix}jagokata
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'mememenu': case 'menumeme': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓

┌──⭓ *Meme Image Menu*
│
│⭔ ${prefix}meme
│⭔ ${prefix}darkjoke
│⭔ ${prefix}memeindo
│⭔ ${prefix}memegen
│⭔ ${prefix}memecreator
│⭔ ${prefix}meme1
│⭔ ${prefix}meme2
│⭔ ${prefix}meme3
│⭔ ${prefix}meme4
│⭔ ${prefix}meme5
│⭔ ${prefix}meme6
│⭔ ${prefix}meme7
│⭔ ${prefix}meme8
│⭔ ${prefix}meme9
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'randommenu': case 'menurandom': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Random Menu*
│
│⭔ ${prefix}coffe
│⭔ ${prefix}quotesanime
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}puisi
│⭔ ${prefix}couple
│⭔ ${prefix}cuddle
│⭔ ${prefix}cry
│⭔ ${prefix}kiss
│⭔ ${prefix}hug
│⭔ ${prefix}awoo
│⭔ ${prefix}lick
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'commentmenu': case 'menucomment': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Comment Menu*
│
│⭔ ${prefix}phcomment
│⭔ ${prefix}ytcomment
│⭔ ${prefix}kannagen
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'sertifikatmenu': case 'menusertifikat': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Sertifikat Menu*
│
│⭔ ${prefix}toloserti 
│⭔ ${prefix}fuckboy
│⭔ ${prefix}fuckgirl
│⭔ ${prefix}bucinserti
│⭔ ${prefix}goodboy
│⭔ ${prefix}goodgirl
│⭔ ${prefix}badboy
│⭔ ${prefix}badgirl
│⭔ ${prefix}pacarserti
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'textpromenu': case 'menutextpro': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Text Pro Menu*
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│⭔ ${prefix}3d-effect 
│⭔ ${prefix}3d-rubystone 
│⭔ ${prefix}3d-text-sub-zombie 
│⭔ ${prefix}3dengraved 
│⭔ ${prefix}3dgold 
│⭔ ${prefix}3dgolden 
│⭔ ${prefix}3dgradient 
│⭔ ${prefix}3dgradient 
│⭔ ${prefix}3dlove 
│⭔ ${prefix}3dluxury 
│⭔ ${prefix}3dneonlight 
│⭔ ${prefix}3dpapercut 
│⭔ ${prefix}3drainbow 
│⭔ ${prefix}3drealistic 
│⭔ ${prefix}3drosegold 
│⭔ ${prefix}3dscifi 
│⭔ ${prefix}3dsilver 
│⭔ ${prefix}3dspace 
│⭔ ${prefix}3dstone 
│⭔ ${prefix}3dtext-effect 
│⭔ ${prefix}3dunderwater 
│⭔ ${prefix}3dvintage 
│⭔ ${prefix}3dwaterpipe 
│⭔ ${prefix}alice-league-of-kings 
│⭔ ${prefix}angel-wing-galaxy 
│⭔ ${prefix}anubis 
│⭔ ${prefix}arch-crossfire 
│⭔ ${prefix}art-shader 
│⭔ ${prefix}assassins-creed 
│⭔ ${prefix}avengers 
│⭔ ${prefix}azzenka-league-of-kings 
│⭔ ${prefix}balloons-cards 
│⭔ ${prefix}balloons-love 
│⭔ ${prefix}bearlogo 
│⭔ ${prefix}bg-crossfire 
│⭔ ${prefix}birthday-cake 
│⭔ ${prefix}birthday-cards 
│⭔ ${prefix}birthday-greeting 
│⭔ ${prefix}birthday-roses 
│⭔ ${prefix}black-metal 
│⭔ ${prefix}blood-frosted 
│⭔ ${prefix}blood-text 
│⭔ ${prefix}blue-effect 
│⭔ ${prefix}blue-glitter 
│⭔ ${prefix}brickwall 
│⭔ ${prefix}brokentext 
│⭔ ${prefix}bulb-effect 
│⭔ ${prefix}bubble-effect 
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'photooxymenu': case 'menuphotooxy': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Photo Oxy Menu*
│
│⭔ ${prefix}shadow
│⭔ ${prefix}romantic
│⭔ ${prefix}smoke
│⭔ ${prefix}burnpapper
│⭔ ${prefix}naruto
│⭔ ${prefix}lovemsg
│⭔ ${prefix}grassmsg
│⭔ ${prefix}lovetext
│⭔ ${prefix}coffecup
│⭔ ${prefix}butterfly
│⭔ ${prefix}harrypotter
│⭔ ${prefix}retrolol
│⭔ ${prefix}shadow 
│⭔ ${prefix}cup 
│⭔ ${prefix}cup1 
│⭔ ${prefix}burnpaper 
│⭔ ${prefix}lovemessage 
│⭔ ${prefix}undergrass 
│⭔ ${prefix}woodheart
│⭔ ${prefix}woodenboard 
│⭔ ${prefix}wolfmetal 
│⭔ ${prefix}nature3d 
│⭔ ${prefix}underwater 
│⭔ ${prefix}golderrose 
│⭔ ${prefix}fallleaves 
│⭔ ${prefix}flamming 
│⭔ ${prefix}harrypotter
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'photomakermenu': case 'menuphotomaker': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Photo Maker Menu*
│
│⭔ ${prefix}1917 
│⭔ ${prefix}3d-crack-text-effect-online 
│⭔ ${prefix}3d-underwater 
│⭔ ${prefix}3d-wood 
│⭔ ${prefix}3d-wood2
│⭔ ${prefix}3damerican-flag
│⭔ ${prefix}3dgalaxy-metal 
│⭔ ${prefix}3dgold
│⭔ ${prefix}3dgradient
│⭔ ${prefix}3dgradient2
│⭔ ${prefix}3dmetal-effect
│⭔ ${prefix}3dmetal-text-
│⭔ ${prefix}3dmulticolor-papercut
│⭔ ${prefix}3dpig-gif
│⭔ ${prefix}3drose-gold
│⭔ ${prefix}3druby-stone
│⭔ ${prefix}3dsand-engraved
│⭔ ${prefix}3dshiny-metallic
│⭔ ${prefix}3dsilver
│⭔ ${prefix}3dspace
│⭔ ${prefix}3dsparkle-christmas
│⭔ ${prefix}3dstone
│⭔ ${prefix}3dsub-zombie
│⭔ ${prefix}3dtext-effect
│⭔ ${prefix}3dtext-effect2
│⭔ ${prefix}3dtext-effect3
│⭔ ${prefix}3dtext-pig
│⭔ ${prefix}3dvalentine-cards
│⭔ ${prefix}3dvintage-light-bulb
│⭔ ${prefix}3dxmas-cards
│⭔ ${prefix}3dxmas-cards2
│⭔ ${prefix}83day-card
│⭔ ${prefix}83day-card2
│⭔ ${prefix}83day-card3
│⭔ ${prefix}83day-card4
│⭔ ${prefix}advanced-glow
│⭔ ${prefix}ahri-league-of-legends
│⭔ ${prefix}alice-league-of-kings
│⭔ ${prefix}amily-arena-of-valor
│⭔ ${prefix}angels-wings
│⭔ ${prefix}anonymous-neon
│⭔ ${prefix}art-shader
│⭔ ${prefix}avengers
│⭔ ${prefix}azzenka-league-of-kings
│⭔ ${prefix}balloon-noel
│⭔ ${prefix}balloon-text
│⭔ ${prefix}balloons-cards
│⭔ ${prefix}balloons-love
│⭔ ${prefix}bats-halloween
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'stickermenu': case 'stikermenu': {
	anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Sticker Efek Menu*
│
│⭔ ${prefix}wasted
│⭔ ${prefix}fisheye
│⭔ ${prefix}pixelate
│⭔ ${prefix}invert
│⭔ ${prefix}roundimage
│⭔ ${prefix}1977 
│⭔ ${prefix}aden
│⭔ ${prefix}clarendon
│⭔ ${prefix}gingham
│⭔ ${prefix}hudson 
│⭔ ${prefix}inkwell 
│⭔ ${prefix}earlybird 
│⭔ ${prefix}kelvin 
│⭔ ${prefix}lark
│⭔ ${prefix}lofi 
│⭔ ${prefix}maven 
│⭔ ${prefix}mayfair 
│⭔ ${prefix}moon 
│⭔ ${prefix}nashville 
│⭔ ${prefix}perpetua 
│⭔ ${prefix}reyes 
│⭔ ${prefix}rise 
│⭔ ${prefix}slumber 
│⭔ ${prefix}stinson 
│⭔ ${prefix}toaster 
│⭔ ${prefix}valencia 
│⭔ ${prefix}walden 
│⭔ ${prefix}willow 
│⭔ ${prefix}xpro2 
│⭔ ${prefix}jail
│⭔ ${prefix}rainbow
│⭔ ${prefix}rip
│⭔ ${prefix}sepia
│⭔ ${prefix}wanted
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'ephotomenu': case 'menuephoto': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Ephoto Menu*
│
│⭔ ${prefix}ffcover
│⭔ ${prefix}crossfire
│⭔ ${prefix}galaxy
│⭔ ${prefix}glass
│⭔ ${prefix}neon
│⭔ ${prefix}beach
│⭔ ${prefix}blackpink
│⭔ ${prefix}igcertificate
│⭔ ${prefix}ytcertificate
│⭔ ${prefix}wetglass 
│⭔ ${prefix}multicolor3d 
│⭔ ${prefix}watercolor 
│⭔ ${prefix}luxurygold 
│⭔ ${prefix}galaxywallpaper 
│⭔ ${prefix}lighttext 
│⭔ ${prefix}beautifulflower 
│⭔ ${prefix}royaltext 
│⭔ ${prefix}heartshaped 
│⭔ ${prefix}birdhdaycake 
│⭔ ${prefix}galaxystyle 
│⭔ ${prefix}hologram3d 
│⭔ ${prefix}greenneon 
│⭔ ${prefix}glossychrome 
│⭔ ${prefix}greenbush 
│⭔ ${prefix}metallogo 
│⭔ ${prefix}neoltext 
│⭔ ${prefix}glittergold 
│⭔ ${prefix}textcake 
│⭔ ${prefix}startsnight 
│⭔ ${prefix}wooden3d 
│⭔ ${prefix}textbyname 
│⭔ ${prefix}writegalacy 
│⭔ ${prefix}galaxybat 
│⭔ ${prefix}snow3d 
│⭔ ${prefix}birthdayday 
│⭔ ${prefix}silverplaybutton 
│⭔ ${prefix}cartoongravity 
│⭔ ${prefix}anonymhacker 
│⭔ ${prefix}mlwall 
│⭔ ${prefix}pubgmaskot 
│⭔ ${prefix}aovwall 
│⭔ ${prefix}logogaming 
│⭔ ${prefix}fpslogo 
│⭔ ${prefix}avatarlolnew 
│⭔ ${prefix}lolbanner 
│⭔ ${prefix}avatardota 
│⭔ ${prefix}juventusshirt 
│⭔ ${prefix}cutegravity 
│⭔ ${prefix}realvintage 
│⭔ ${prefix}codwarzone 
│⭔ ${prefix}valorantbanner
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'funmenu': case 'menufun': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Fun Menu*
│
│⭔ ${prefix}apakah
│⭔ ${prefix}bisakah
│⭔ ${prefix}bagaimanakah
│⭔ ${prefix}rate
│⭔ ${prefix}cekganteng
│⭔ ${prefix}cekcantik
│⭔ ${prefix}ceksange
│⭔ ${prefix}cekgay
│⭔ ${prefix}ceklesbi
│⭔ ${prefix}kapankah
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'primbonmenu': case 'menuprimbon': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Prombon Menu*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│⭔ ${prefix}shio
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'convertmenu': case 'menuconvert': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Convert Menu*
│
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}sticker
│⭔ ${prefix}attp
│⭔ ${prefix}ttp
│⭔ ${prefix}nulis
│⭔ ${prefix}emojimix
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toaudio
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
case 'mainmenu': case 'menumain': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}donasi
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete / ${prefix}del ${prefix}d
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break

case 'databasemenu': case 'menudatabase': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Database Menu*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break

case 'anonymousmenu': case 'menuanonymous': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Anonymous Menu*
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│⭔ ${prefix}sendkontak
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break

case 'islamicmenu': case 'menuislamic': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Islamic Menu*
│
│⭔ ${prefix}jadwalsholat
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}tafsirsurah
│⭔ ${prefix}audio1
│⭔ ${prefix}audio2
│⭔ ${prefix}audio3
│⭔ ${prefix}audio4
│⭔ ${prefix}audio5
│⭔ ${prefix}audio6
│⭔ ${prefix}audio7
│⭔ ${prefix}audio8
│⭔ ${prefix}audio9
│⭔ ${prefix}audio10
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break

case 'voicemenu': case 'menuvoice': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Voice Changer*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break

case 'stalkmenu': case 'menustalk': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Stalk Menu*
│
│⭔ ${prefix}githubstalk
│⭔ ${prefix}stalkig
│⭔ ${prefix}stalktiktok
│⭔ ${prefix}twitterstalk
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break

case 'ownermenu': case 'menuowner': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Owner Menu*
│
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}bcallmedia
│⭔ ${prefix}setppbot [image]
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
            case 'list': case 'menu': case 'help': case '?': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

Saya ${global.namabot}, Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Ya, Lapor Owner Agar Segera Di Perbaiki🙏


• Library : *Baileys-MD*.
• Prefix : ( ${prefix} )
• Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
• Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
• Menuju Idul Fitri :
•  ${menuju}
• Wib : ${wib}
• Wita : ${wita}
• Wit : ${wit}`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/hisoka.jpg')},
                            hydratedFooterText: `© ${global.namabot}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: 'command'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
            	case 'allmenu': case 'menuall': {
                anu = `Haii Kak ${pushname} ${ucapanWaktu}

┌──⭓ 「 INFO BOT 」⭓
│
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${hisoka.public ? 'Public' : 'Self'}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju Idul Fitri :
│  ${menuju}
│
└───────⭓


┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}antilink [on/of]
│⭔ ${prefix}antiyt [on/of]
│⭔ ${prefix}antilinktt [on/of]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│
└───────⭓

┌──⭓ *Downloader Menu*
│
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}mediafire [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
│
└───────⭓

┌──⭓ *Search Menu*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}groupwhatsapp
│
└───────⭓

┌──⭓ *Meme Image Menu*
│
│⭔ ${prefix}meme
│⭔ ${prefix}darkjoke
│⭔ ${prefix}memeindo
│⭔ ${prefix}memegen
│⭔ ${prefix}memecreator
│⭔ ${prefix}meme1
│⭔ ${prefix}meme2
│⭔ ${prefix}meme3
│⭔ ${prefix}meme4
│⭔ ${prefix}meme5
│⭔ ${prefix}meme6
│⭔ ${prefix}meme7
│⭔ ${prefix}meme8
│⭔ ${prefix}meme9
│
└───────⭓

┌──⭓ *Wibu Menu*
│
│⭔ ${prefix}couples
│⭔ ${prefix}anime
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│⭔ ${prefix}neko
│⭔ ${prefix}shinobu
│⭔ ${prefix}megumin
│
└───────⭓

┌──⭓ *Nsfw Menu*
│
│⭔ ${prefix}pussy
│⭔ ${prefix}neko
│⭔ ${prefix}kuni
│⭔ ${prefix}lesbian
│⭔ ${prefix}cumsluts
│⭔ ${prefix}boobs
│⭔ ${prefix}bj
│⭔ ${prefix}anal
│⭔ ${prefix}avatar
│⭔ ${prefix}yuri
│⭔ ${prefix}trap
│⭔ ${prefix}tits
│⭔ ${prefix}kemonomimi
│⭔ ${prefix}kitsune
│⭔ ${prefix}keta
│⭔ ${prefix}futanari
│⭔ ${prefix}fendom
│⭔ ${prefix}feet
│⭔ ${prefix}ero
│⭔ ${prefix}spank
│⭔ ${prefix}gasm
│⭔ Noted : Stay Halal Brother >\\<
│
└───────⭓

┌──⭓ *Asupan Menu*
│
│⭔ ${prefix}random
│⭔ ${prefix}bocil
│⭔ ${prefix}santuy
│⭔ ${prefix}ukhty
│⭔ ${prefix}geayubi
│⭔ ${prefix}lolivid
│⭔ ${prefix}cecan
│⭔ ${prefix}hijaber
│⭔ ${prefix}indonesia
│⭔ ${prefix}malaysia
│⭔ ${prefix}thailand
│⭔ ${prefix}vietnam
│⭔ ${prefix}china
│⭔ ${prefix}korea
│⭔ ${prefix}japan
│
└───────⭓

┌──⭓ *Random Text Menu*
│
│⭔ ${prefix}katasenja
│⭔ ${prefix}fml
│⭔ ${prefix}faktaunik
│⭔ ${prefix}katabijak
│⭔ ${prefix}pantun
│⭔ ${prefix}puisi
│⭔ ${prefix}quotes
│⭔ ${prefix}quotes2
│⭔ ${prefix}quotesanime
│⭔ ${prefix}ceritahoror
│⭔ ${prefix}fakta
│⭔ ${prefix}truth
│⭔ ${prefix}dare
│⭔ ${prefix}quotesislami
│⭔ ${prefix}quotesdilan
│⭔ ${prefix}quotesff
│⭔ ${prefix}quotespubg
│⭔ ${prefix}quoteshacker
│⭔ ${prefix}quoteslucu
│⭔ ${prefix}carpen
│⭔ ${prefix}katailham
│⭔ ${prefix}katasindiran
│⭔ ${prefix}katabucin
│⭔ ${prefix}katabucin2
│⭔ ${prefix}katagalau
│⭔ ${prefix}katagombal
│⭔ ${prefix}kataml
│⭔ ${prefix}pantun-pakboy
│⭔ ${prefix}nick-epep
│⭔ ${prefix}motivasi
│⭔ ${prefix}jagokata
│
└───────⭓

┌──⭓ *Random Menu*
│
│⭔ ${prefix}coffe
│⭔ ${prefix}quotesanime
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}puisi
│⭔ ${prefix}couple
│⭔ ${prefix}cuddle
│⭔ ${prefix}cry
│⭔ ${prefix}kiss
│⭔ ${prefix}hug
│⭔ ${prefix}awoo
│⭔ ${prefix}lick
│
└───────⭓

┌──⭓ *Comment Menu*
│
│⭔ ${prefix}phcomment
│⭔ ${prefix}ytcomment
│⭔ ${prefix}kannagen
│
└───────⭓

┌──⭓ *Sertifikat Menu*
│
│⭔ ${prefix}toloserti 
│⭔ ${prefix}fuckboy
│⭔ ${prefix}fuckgirl
│⭔ ${prefix}bucinserti
│⭔ ${prefix}goodboy
│⭔ ${prefix}goodgirl
│⭔ ${prefix}badboy
│⭔ ${prefix}badgirl
│⭔ ${prefix}pacarserti
│
└───────⭓

┌──⭓ *Text Pro Menu*
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│⭔ ${prefix}3d-effect 
│⭔ ${prefix}3d-rubystone 
│⭔ ${prefix}3d-text-sub-zombie 
│⭔ ${prefix}3dengraved 
│⭔ ${prefix}3dgold 
│⭔ ${prefix}3dgolden 
│⭔ ${prefix}3dgradient 
│⭔ ${prefix}3dgradient 
│⭔ ${prefix}3dlove 
│⭔ ${prefix}3dluxury 
│⭔ ${prefix}3dneonlight 
│⭔ ${prefix}3dpapercut 
│⭔ ${prefix}3drainbow 
│⭔ ${prefix}3drealistic 
│⭔ ${prefix}3drosegold 
│⭔ ${prefix}3dscifi 
│⭔ ${prefix}3dsilver 
│⭔ ${prefix}3dspace 
│⭔ ${prefix}3dstone 
│⭔ ${prefix}3dtext-effect 
│⭔ ${prefix}3dunderwater 
│⭔ ${prefix}3dvintage 
│⭔ ${prefix}3dwaterpipe 
│⭔ ${prefix}alice-league-of-kings 
│⭔ ${prefix}angel-wing-galaxy 
│⭔ ${prefix}anubis 
│⭔ ${prefix}arch-crossfire 
│⭔ ${prefix}art-shader 
│⭔ ${prefix}assassins-creed 
│⭔ ${prefix}avengers 
│⭔ ${prefix}azzenka-league-of-kings 
│⭔ ${prefix}balloons-cards 
│⭔ ${prefix}balloons-love 
│⭔ ${prefix}bearlogo 
│⭔ ${prefix}bg-crossfire 
│⭔ ${prefix}birthday-cake 
│⭔ ${prefix}birthday-cards 
│⭔ ${prefix}birthday-greeting 
│⭔ ${prefix}birthday-roses 
│⭔ ${prefix}black-metal 
│⭔ ${prefix}blood-frosted 
│⭔ ${prefix}blood-text 
│⭔ ${prefix}blue-effect 
│⭔ ${prefix}blue-glitter 
│⭔ ${prefix}brickwall 
│⭔ ${prefix}brokentext 
│⭔ ${prefix}bulb-effect 
│⭔ ${prefix}bubble-effect 
│
└───────⭓

┌──⭓ *Photo Oxy Menu*
│
│⭔ ${prefix}shadow
│⭔ ${prefix}romantic
│⭔ ${prefix}smoke
│⭔ ${prefix}burnpapper
│⭔ ${prefix}naruto
│⭔ ${prefix}lovemsg
│⭔ ${prefix}grassmsg
│⭔ ${prefix}lovetext
│⭔ ${prefix}coffecup
│⭔ ${prefix}butterfly
│⭔ ${prefix}harrypotter
│⭔ ${prefix}retrolol
│⭔ ${prefix}shadow 
│⭔ ${prefix}cup 
│⭔ ${prefix}cup1 
│⭔ ${prefix}burnpaper 
│⭔ ${prefix}lovemessage 
│⭔ ${prefix}undergrass 
│⭔ ${prefix}woodheart
│⭔ ${prefix}woodenboard 
│⭔ ${prefix}wolfmetal 
│⭔ ${prefix}nature3d 
│⭔ ${prefix}underwater 
│⭔ ${prefix}golderrose 
│⭔ ${prefix}fallleaves 
│⭔ ${prefix}flamming 
│⭔ ${prefix}harrypotter
│
└───────⭓

┌──⭓ *Photo Maker Menu*
│
│⭔ ${prefix}1917 
│⭔ ${prefix}3d-crack-text-effect-online 
│⭔ ${prefix}3d-underwater 
│⭔ ${prefix}3d-wood 
│⭔ ${prefix}3d-wood2
│⭔ ${prefix}3damerican-flag
│⭔ ${prefix}3dgalaxy-metal 
│⭔ ${prefix}3dgold
│⭔ ${prefix}3dgradient
│⭔ ${prefix}3dgradient2
│⭔ ${prefix}3dmetal-effect
│⭔ ${prefix}3dmetal-text-
│⭔ ${prefix}3dmulticolor-papercut
│⭔ ${prefix}3dpig-gif
│⭔ ${prefix}3drose-gold
│⭔ ${prefix}3druby-stone
│⭔ ${prefix}3dsand-engraved
│⭔ ${prefix}3dshiny-metallic
│⭔ ${prefix}3dsilver
│⭔ ${prefix}3dspace
│⭔ ${prefix}3dsparkle-christmas
│⭔ ${prefix}3dstone
│⭔ ${prefix}3dsub-zombie
│⭔ ${prefix}3dtext-effect
│⭔ ${prefix}3dtext-effect2
│⭔ ${prefix}3dtext-effect3
│⭔ ${prefix}3dtext-pig
│⭔ ${prefix}3dvalentine-cards
│⭔ ${prefix}3dvintage-light-bulb
│⭔ ${prefix}3dxmas-cards
│⭔ ${prefix}3dxmas-cards2
│⭔ ${prefix}83day-card
│⭔ ${prefix}83day-card2
│⭔ ${prefix}83day-card3
│⭔ ${prefix}83day-card4
│⭔ ${prefix}advanced-glow
│⭔ ${prefix}ahri-league-of-legends
│⭔ ${prefix}alice-league-of-kings
│⭔ ${prefix}amily-arena-of-valor
│⭔ ${prefix}angels-wings
│⭔ ${prefix}anonymous-neon
│⭔ ${prefix}art-shader
│⭔ ${prefix}avengers
│⭔ ${prefix}azzenka-league-of-kings
│⭔ ${prefix}balloon-noel
│⭔ ${prefix}balloon-text
│⭔ ${prefix}balloons-cards
│⭔ ${prefix}balloons-love
│⭔ ${prefix}bats-halloween
│
└───────⭓

┌──⭓ *Sticker Efek Menu*
│
│⭔ ${prefix}wasted
│⭔ ${prefix}fisheye
│⭔ ${prefix}pixelate
│⭔ ${prefix}invert
│⭔ ${prefix}roundimage
│⭔ ${prefix}1977 
│⭔ ${prefix}aden
│⭔ ${prefix}clarendon
│⭔ ${prefix}gingham
│⭔ ${prefix}hudson 
│⭔ ${prefix}inkwell 
│⭔ ${prefix}earlybird 
│⭔ ${prefix}kelvin 
│⭔ ${prefix}lark
│⭔ ${prefix}lofi 
│⭔ ${prefix}maven 
│⭔ ${prefix}mayfair 
│⭔ ${prefix}moon 
│⭔ ${prefix}nashville 
│⭔ ${prefix}perpetua 
│⭔ ${prefix}reyes 
│⭔ ${prefix}rise 
│⭔ ${prefix}slumber 
│⭔ ${prefix}stinson 
│⭔ ${prefix}toaster 
│⭔ ${prefix}valencia 
│⭔ ${prefix}walden 
│⭔ ${prefix}willow 
│⭔ ${prefix}xpro2 
│⭔ ${prefix}jail
│⭔ ${prefix}rainbow
│⭔ ${prefix}rip
│⭔ ${prefix}sepia
│⭔ ${prefix}wanted
│
└───────⭓

┌──⭓ *Ephoto Menu*
│
│⭔ ${prefix}ffcover
│⭔ ${prefix}crossfire
│⭔ ${prefix}galaxy
│⭔ ${prefix}glass
│⭔ ${prefix}neon
│⭔ ${prefix}beach
│⭔ ${prefix}blackpink
│⭔ ${prefix}igcertificate
│⭔ ${prefix}ytcertificate
│⭔ ${prefix}wetglass 
│⭔ ${prefix}multicolor3d 
│⭔ ${prefix}watercolor 
│⭔ ${prefix}luxurygold 
│⭔ ${prefix}galaxywallpaper 
│⭔ ${prefix}lighttext 
│⭔ ${prefix}beautifulflower 
│⭔ ${prefix}royaltext 
│⭔ ${prefix}heartshaped 
│⭔ ${prefix}birdhdaycake 
│⭔ ${prefix}galaxystyle 
│⭔ ${prefix}hologram3d 
│⭔ ${prefix}greenneon 
│⭔ ${prefix}glossychrome 
│⭔ ${prefix}greenbush 
│⭔ ${prefix}metallogo 
│⭔ ${prefix}neoltext 
│⭔ ${prefix}glittergold 
│⭔ ${prefix}textcake 
│⭔ ${prefix}startsnight 
│⭔ ${prefix}wooden3d 
│⭔ ${prefix}textbyname 
│⭔ ${prefix}writegalacy 
│⭔ ${prefix}galaxybat 
│⭔ ${prefix}snow3d 
│⭔ ${prefix}birthdayday 
│⭔ ${prefix}silverplaybutton 
│⭔ ${prefix}cartoongravity 
│⭔ ${prefix}anonymhacker 
│⭔ ${prefix}mlwall 
│⭔ ${prefix}pubgmaskot 
│⭔ ${prefix}aovwall 
│⭔ ${prefix}logogaming 
│⭔ ${prefix}fpslogo 
│⭔ ${prefix}avatarlolnew 
│⭔ ${prefix}lolbanner 
│⭔ ${prefix}avatardota 
│⭔ ${prefix}juventusshirt 
│⭔ ${prefix}cutegravity 
│⭔ ${prefix}realvintage 
│⭔ ${prefix}codwarzone 
│⭔ ${prefix}valorantbanner
│
└───────⭓

┌──⭓ *Fun Menu*
│
│⭔ ${prefix}apakah
│⭔ ${prefix}bisakah
│⭔ ${prefix}bagaimanakah
│⭔ ${prefix}rate
│⭔ ${prefix}cekganteng
│⭔ ${prefix}cekcantik
│⭔ ${prefix}ceksange
│⭔ ${prefix}cekgay
│⭔ ${prefix}ceklesbi
│⭔ ${prefix}kapankah
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
│
└───────⭓

┌──⭓ *Primbon Menu*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│⭔ ${prefix}shio
│
└───────⭓

┌──⭓ *Convert Menu*
│
│⭔ ${prefix}ssweb
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}smeme
│⭔ ${prefix}sticker
│⭔ ${prefix}emojimix
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toaudio
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│
└───────⭓

┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}donasi
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete / ${prefix}del ${prefix}d
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│
└───────⭓

┌──⭓ *Database Menu*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
└───────⭓

┌──⭓ *Anonymous Menu*
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│⭔ ${prefix}sendkontak
│
└───────⭓

┌──⭓ *Islamic Menu*
│
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}tafsirsurah
│⭔ ${prefix}audio1
│⭔ ${prefix}audio2
│⭔ ${prefix}audio3
│⭔ ${prefix}audio4
│⭔ ${prefix}audio5
│⭔ ${prefix}audio6
│⭔ ${prefix}audio7
│⭔ ${prefix}audio8
│⭔ ${prefix}audio9
│⭔ ${prefix}audio10
│
└───────⭓

┌──⭓ *Voice Changer*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
│
└───────⭓

┌──⭓ *Stalk Menu*
│
│⭔ ${prefix}githubstalk
│
└───────⭓

┌──⭓ *Owner Menu*
│
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}bcallmedia
│⭔ ${prefix}setppbot [image]
│
└───────⭓`
                let button = [{
                                urlButton: {
                                    displayText: 'TikTok Creator',
                                    url: global.myweb
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: global.owner[0]
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }
                            }]
                hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, button)
            }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
     if (budy.includes('6289636827082')) {  
hisoka.sendMessage(m.chat, {text: 'Ada Apa Ya Tags Owner Saya'}, {quoted: ftroli})
	  }	     

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
