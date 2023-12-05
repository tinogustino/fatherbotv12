require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const path = require('path')
const os = require('os')
const fsx = require('fs-extra')
const jsobfus = require('javascript-obfuscator')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg } = require('./lib/converter')
const { exec, spawn, execSync } = require("child_process")
const qris = fs.readFileSync ('./media/qris.jpg')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/addlist');
const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/register.js')
const { Connection } = require('mongoose')

        /* ~~~~~~~~~ DATA GAME ~~~~~~~~~ */
        let tebaklagu = []
        let kuismath = []
        let tebakgambar = []
        let tebakkata = []
        let tebakkalimat = []
        let tebaklirik = []
        let tebaktebakan = []
        let tebakbendera = []
        let tebakbendera2 = []
        let tebakkabupaten = []
        let tebakkimia = []
        let tebakasahotak = []
        let tebaksiapakahaku = []
        let tebaksusunkata = []
        let tebaktekateki = []
        
// read database
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
    users: {},
    premium: {},
    banned: {},
    group: {},
    database: {},
    settings: {},
    donate: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
}

moment.tz.setDefault("Asia/Jakarta").locale("id")

module.exports = conn = async (conn, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await conn.decodeJid(conn.user.id)
        const isCreator = [botNumber, global.owner, '6281535365496'].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const isRegistered = checkRegisteredUser(m.sender)
        
        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }


        
        const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `${namaowner}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${namabot},;;;\nFN:${namabot}\nitem1.TEL;waid=${owner}:+${owner}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': thumb,
                    thumbnail: thumb,
                    sendEphemeral: true
                }   
            }
        }
        // Database Tambahan!!

        let prem = JSON.parse(fs.readFileSync('./database/premium.json'))
        let vnnya = JSON.parse(fs.readFileSync('./database/vnnya.json'))
        let db_error = JSON.parse(fs.readFileSync('./database/error.json'));
        let akinator = JSON.parse(fs.readFileSync('./src/akinator.json'));
        let db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));


        // Const Tambahan Sc Gw

        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        const getCase = (cases) => {
            return "case  "+`'${cases}'`+fs.readFileSync("./adrian.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
        }
        const totalFitur = () =>{
            var mytext = fs.readFileSync("./adrian.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        const sendvn = (teks) => {
            conn.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
        }

        for (let anju of vnnya) {
            if (budy === anju) {
                let buffer = fs.readFileSync(`./database/AUDIO/${anju}.mp3`)
                sendvn(buffer)
            }
        }
        
    

        // Function Created By @tinoisgood Alias Dryan ft .𝐗𝐓𝐑𝐀𝐌
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

function generaterandomassword() {
    return Array(10).fill(null).map(() => (Math.random() * 16 | 0).toString(16)).join('');
}
        
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `@tinoisgood`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}




// Created By ArxzyDev
async function newReply(teks) {
            const arxzy = {
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        showAdAttribution: true,
                        title: ucapanWaktu,
                        body: global.namabot,
                        previewType: "PHOTO",
                        thumbnailUrl: global.imageurl,
                        sourceUrl: global.isLink
                    }
                },
                text: teks
            };
            return conn.sendMessage(m.chat, arxzy, {
                quoted: m
            });
        };

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let group = global.db.data.group[m.chat]
            if (typeof group !== 'object') global.db.data.group[m.chat] = {}
            if (group) {
                if (!('mute' in group)) group.mute = false
                if (!('antilink' in group)) group.antilink = false
                if (!('antilinkyt' in group)) group.antilinkyt = false
                if (!('antilinktt' in group)) group.antilinktt = false
                if (!('antivirtex' in group)) group.antivirtex = false
                if (!('antisettings' in group)) group.antisettings = true
                if (!('antilinkv2' in group)) group.antilinkv2 = false
            } else global.db.data.group[m.chat] = {
                mute: false,
                antilink: false,
                antilinkyt: false,
                antilinktt: false,
                antivirtex: false,
                antisettings: true,
                antilinkv2: true
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }

        } catch (err) {
            console.error(err)
        }
        // Public & Self
        if (!conn.public) {
            if (!m.key.fromMe) return
        }
        
        if (m.message) {
            if (global.db.data.settings[botNumber].autoread) {
            conn.readMessages([m.key])
            }
        }
        
//GAME
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
    await newReply('*Anda Telah menyerah*')
    delete tebakgambar[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
    await conn.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
    delete tebakgambar[m.sender.split('@')[0]]
} else newReply('*Jawaban Salah!*')
}
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
    await newReply('*Anda Telah menyerah*')
    delete kuismath[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
    await newReply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}kuismath`)
    delete kuismath[m.sender.split('@')[0]]
} else newReply('*Jawaban Salah!*')
}
if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakasahotak[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
    await newReply('*Anda Telah menyerah*')
    delete tebakasahotak[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
    await conn.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
    delete tebakasahotak[m.sender.split('@')[0]]
} else newReply('*Jawaban Salah!*')
}
if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
    await newReply('*Anda Telah menyerah*')
    delete tebaksiapakahaku[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
    await conn.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉`, m)
    delete tebaksiapakahaku[m.sender.split('@')[0]]
} else newReply('*Jawaban Salah!*')
}
if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaksusunkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
    await newReply('*Anda Telah menyerah*')
    delete tebaksusunkata[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
    await conn.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉`, m)
    delete tebaksusunkata[m.sender.split('@')[0]]
} else newReply('*Jawaban Salah!*')
}
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakbendera[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
    await newReply('*Anda Telah menyerah*')
    delete tebakbendera[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
    await conn.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
    delete tebakbendera[m.sender.split('@')[0]]
} else newReply('*Jawaban Salah!*')
}
if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakbendera2[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
    await newReply('*Anda Telah menyerah*')
    delete tebakbendera2[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
    await conn.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
    delete tebakbendera2[m.sender.split('@')[0]]
} else newReply('*Jawaban Salah!*')
}
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkabupaten[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
    await newReply('*Anda Telah menyerah*')
    delete tebakkabupaten[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
    await conn.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
    delete tebakkabupaten[m.sender.split('@')[0]]
} else newReply('*Jawaban Salah!*')
}
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkimia[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
    await newReply('*Anda Telah menyerah*')
    delete tebakkimia[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
    await conn.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
    delete tebakkimia[m.sender.split('@')[0]]
} else newReply('*Jawaban Salah!*')
}
if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktekateki[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
    await newReply('*Anda Telah menyerah*')
    delete tebaktekateki[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
    await conn.sendText(m.chat, `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉`, m)
    delete tebaktekateki[m.sender.split('@')[0]]
} else newReply('*Jawaban Salah!*')
}
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
    await newReply('*Anda Telah menyerah*')
    delete tebaklagu[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
    await conn.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m)
    delete tebaklagu[m.sender.split('@')[0]]
} else newReply('*Jawaban Salah!*')
}
if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
    await newReply('*Anda Telah menyerah*')
    delete tebakkata[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
    await conn.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`, m)
    delete tebakkata[m.sender.split('@')[0]]
} else newReply('*Jawaban Salah!*')
}
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
    await newReply('*Anda Telah menyerah*')
    delete tebakkalimat[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
    await conn.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`, m)
    delete tebakkalimat[m.sender.split('@')[0]]
} else newReply('*Jawaban Salah!*')
}
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
    await newReply('*Anda Telah menyerah*')
    delete tebaklirik[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
    await conn.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`, m)
    delete tebaklirik[m.sender.split('@')[0]]
} else newReply('*Jawaban Salah!*')
}
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
    await newReply('*Anda Telah menyerah*')
    delete tebaktebakan[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
    await conn.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉`, m)
    delete tebaktebakan[m.sender.split('@')[0]]
} else newReply('*Jawaban Salah!*')
}








        
        
        // Apikey
apikey = `ubhi23`

// Akinator Setting Start
    /* if (akinator.hasOwnProperty(m.sender.split('@')[0]) && isCmd && ["0", "1", "2", "3", "4", "5"].includes(body)) {
                
                var { server, frontaddr, session, signature, question, step } = akinator[m.sender.split('@')[0]]
                if (step == "0" && budy == "5") newReply("Maaf Anda telah mencapai pertanyaan pertama")
                var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=${apikey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                var get_result = await fetchJson(ini_url)
                var get_result = get_result.result
                if (get_result.hasOwnProperty("name")) {
                    var ini_name = get_result.name
                    var description = get_result.description
                    ini_txt = `${ini_name} - ${description}\n\n`
                    ini_txt += "*Sekian dan terima gaji. Akinator by GabutBot*"
                    await conn.sendImage(m.chat, get_result.image, ini_txt, m).then(() => {
                        delete akinator[m.sender.split('@')[0]]
                        fs.writeFileSync("./src/akinator.json", JSON.stringify(akinator))
                    })
                    return
                }
                var { question, _, step } = get_result
                ini_txt = `${question}\n\n`
                ini_txt += "0 - Ya\n"
                ini_txt += "1 - Tidak\n"
                ini_txt += "2 - Saya Tidak Tau\n"
                ini_txt += "3 - Mungkin\n"
                ini_txt += "4 - Mungkin Tidak\n"
                ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
                if (args[0] === '5') {
                    var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=${apikey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                    var get_result = await fetchJson(ini_url)
                    var get_result = get_result.result
                    var { question, _, step } = get_result
                    ini_txt = `${question}\n\n`
                    ini_txt += "0 - Ya\n"
                    ini_txt += "1 - Tidak\n"
                    ini_txt += "2 - Saya Tidak Tau\n"
                    ini_txt += "3 - Mungkin\n"
                    ini_txt += "4 - Mungkin Tidak"
                    ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
                }
                conn.sendText(m.chat, ini_txt, m).then(() => {
                    const data_ = akinator[m.sender.split('@')[0]]
                    data_["question"] = question
                    data_["step"] = step
                    akinator[m.sender.split('@')[0]] = data_
                    fs.writeFileSync("./src/akinator.json", JSON.stringify(akinator))
                })
            }
            
// Akinator settings end
if (('family100'+m.chat in _family100) && isCmd) {
            
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
            conn.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }
        */


        // Push Message To Console && Auto Read
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
        if (db.data.settings[botNumber].autobio) {
        let setting = global.db.data.settings[botNumber]
        if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await conn.updateProfileStatus(`I am ${namabot} | Aktif Selama ${uptime} ⏳ | Mode : ${conn.public ? 'Public-Mode' : 'Self-Mode'} | User : ${Object.keys(global.db.data.users).length}`).catch(_ => _)
        setting.status = new Date() * 1
        }
        }
    
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: conn.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        conn.ev.emit('messages.upsert', msg)
        }
        
        if (db.data.group[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                newReply(`「 ANTI LINK WHATSAPP 」\n\nKamu Terdeteksi Mengirim Link Group, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Ehh Bot Gak Admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return newReply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }

        //Anti Link YouTube
        if (db.data.group[m.chat].antilinkyt) {
            if (budy.match(`https://youtu.be`)) {
                newReply(`「 ANTI LINK YOUTUBE 」\n\nKamu Terdeteksi Mengirim Link Youtube, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Link Tiktok
        if (db.data.group[m.chat].antilinktt) {
            if (budy.match(`https://vt.tiktok.com`)) {
                newReply(`「 ANTI LINK TIKTOK 」\n\nKamu Terdeteksi Mengirim Link TikTok, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //AntiVirtex
        if (db.data.group[m.chat].antivirtex) {
            if (budy.length > 3500) {
                newReply(`Seseorang mengirim spam virus!! tandai sebagai membaca⚠️\n`.repeat(300))
                newReply(`「 ANTI VIRTEX 」\n\nKamu Terdeteksi Mengirim Virtex, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (db.data.group[m.chat].antisettings) {
            if (budy.startsWith('wa.me/settings')) {
            conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            if (!isBotAdmins) return newReply(`Ehh Bot Gak Admin T_T`)
            conn.sendMessage(m.chat, { delete: m.key })
            }
        }
        // Mute Chat
        if (db.data.group[m.chat].mute && !isAdmins && !isCreator) {
            return
        }
        switch (command) {
        // Premium
        
        case 'daftar':
                if (isRegistered) return newReply('Kamu sudah terdaftar')
                if (!q.includes('|')) return newReply('Format salah!')
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return newReply('Umur harus berupa angka!!')
                if (namaUser.length >= 30) return newReply(`why is your name so long it's a name or a train`)
                if (umurUser > 40) return newReply(`your age is too  old maximum 40 years`)
                if (umurUser < 12) return newReply(`your age is too young minimum 12 years`)
                mzd = `Kamu telah terdaftar dengan informasi sebagai berikut:\n\n⭔ Nama : ${namaUser}\n⭔ Umur : ${umurUser}\n⭔ Nomor : wa.me/${m.sender.split("@")[0]}\n⭔ Waktu Pendaftaran : ${wib}\n⭔ NS : ${serialUser}`
            zharzx = fs.readFileSync('./media/reg.jpg')
                veri = m.sender
                if (!m.isGroup) {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    conn.sendMessage(m.chat, {image: zharzx, caption: mzd}, {quoted: m})
                    
                } else {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    conn.sendMessage(m.chat, {image: zharzx, caption: mzd}, {quoted: m})
                    
                }
        break
        
        case 'paptt':
            if (!isPremium) return newReply(mess.prem)
            if (!q) return newReply(`Example ${prefix + command} foto/video`)
            let papttfoto = JSON.parse(fs.readFileSync('./lib/paptt-foto.json'))
            let papttvideo = JSON.parse(fs.readFileSync('./lib/paptt-video.json'))
            let titid1 = (pickRandom(papttfoto))
            let titid2 = (pickRandom(papttvideo))
            if (q == 'foto') {
                newReply("Foto Akan Dikirim Lewat Private Chat ( *PC* )")
                conn.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            } else if (q == 'video') {
                newReply("Video Akan Dikirim Lewat Private Chat ( *PC* )")
                conn.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            }
        break
        
        case 'buatgc':
            if (!isPremium) return newReply(mess.prem)
            if (!text) return newReply('_Masukkan Nama Grup!_')
            try{
                newReply(mess.wait)
                let group = await conn.groupCreate(text, [m.sender])
                let link = await conn.groupInviteCode(group.gid)
                let url = 'https://chat.whatsapp.com/' + link;
                /// console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nViolet'))
                newReply('_Berhasil Membuat Grup *' + text + '*_\n\n*Nama:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* ' + url)
            } catch (e) {
                let [namagc, partici] = text.split('|')
                if (!namagc) return newReply('Format Salah!!!')
                if (!partici) return newReply('Tag user sebagai member baru!')
                let mem = conn.parseMention(`@${parseInt(m.sender)} ${partici}`)
                let ha = await conn.groupCreate(namagc, mem).catch(console.error)
                console.log(JSON.stringify(ha));
                await newReply(`*GROUP CREATE*

\`\`\`Group Telah Dibuat @${m.sender.replace(/@.+/, '')}\`\`\`


${JSON.stringify(ha.participants)}`)
                conn.groupMakeAdmin(ha.gid, [m.sender])
                if (!isCreator) {
                    await conn.modifyChat(ha.gid, 'delete', {
                        includeStarred: false
                    }).catch(console.error)
                    conn.groupLeave(ha.gid)
                }
            }
        break
        // Owner Fitur
        case 'ambilcase':
            try{
                if (!isCreator) return newReply(mess.owner)
                if (!q) return newReply(`Example: ${prefix + command} antilink`) 
                if(q.startsWith(prefix)) return newReply("Query tidak boleh menggunakan prefix")
                let nana = await getCase(q)
                newReply(nana)
            } catch(err){
            console.log(err)
            newReply(`Case ${q} tidak di temukan`)
        }
        break 
        case 'cekapikey':
            if (!isCreator) return newReply(mess.owner)
            let lol = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${apikey}`)
            newReply(mess.wait)
            if (lol.message == 'success') {
                let ani = `• *ɴᴀᴍᴇ:* ${lol.result.username}
• *ᴛᴏᴛᴀʟ ʜɪᴛ:* ${lol.result.requests}
• *ʜɪᴛ ᴛᴏᴅᴀʏ:* ${lol.result.today}
• *ᴀᴄᴄᴏᴜɴᴛ:* ${lol.result.account_type}

• *ᴇxᴘɪʀᴇᴅ:* ${lol.result.expired}`
                conn.sendMessage(m.chat, { image: thumb, caption: ani }, { quoted: fkontak })
                } else m.reply('ɪɴᴠᴀʟɪᴅ ᴀᴘɪᴋᴇʏ !')
            break


            case 'cekresi':
                if (!isRegistered) return newReply('𝙺𝚊𝚖𝚞 𝚋𝚎𝚕𝚞𝚖 𝚍𝚊𝚏𝚝𝚊𝚛! 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚍𝚊𝚏𝚝𝚊𝚛 𝚍𝚎𝚗𝚐𝚊𝚗 𝚌𝚊𝚛𝚊 𝚔𝚎𝚝𝚒𝚔 *#𝚍𝚊𝚏𝚝𝚊𝚛 𝚗𝚊𝚖𝚊|𝚞𝚖𝚞𝚛*')
                
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            if (args.length == 0) return newReply(`𝙴𝚡 : ${prefix + command} 𝙹𝙿8234909181 - *𝙿𝚊𝚜𝚝𝚒𝚔𝚊𝚗 𝚁𝚎𝚜𝚒 𝙱𝚎𝚗𝚎𝚛, 𝙹𝚒𝚔𝚊 𝚗𝚐𝚐𝚊 𝚋𝚎𝚗𝚎𝚛 𝚐𝚊 𝚖𝚞𝚗𝚌𝚞𝚕 𝚊𝚝𝚊𝚞 𝚎𝚛𝚛𝚘𝚛*`)
            newReply(mess.wait)
            axios
                .get(`https://api.lolhuman.xyz/api/checkresi?apikey=${apikey}&resi=${q}`)
                .then(({ data }) => {
                    var text = `*𝙽𝙾 𝚁𝙴𝚂𝙸* : *${data.result.resi}*\n`
                    text += `--------------------\n*𝙴𝙺𝙿𝙴𝙳𝙸𝚂𝙸* : *${data.result.courier}*\n--------------------\n`
                    text += `*𝙳𝙰𝚁𝙸* : ${data.result.origin.name}\n--------------------\n`
                    text += `*𝚃𝚄𝙹𝚄𝙰𝙽* : ${data.result.destination.name}\n--------------------\n\n`
                    text += `*𝚁𝚄𝚃𝙴 𝙿𝙰𝙺𝙴𝚃*\n\n`
                    for (let x of data.result.history) {
                        text += `Deskripsi : ${x.note}\n`
                        text += `Waktu : ${x.time}\n\n`
                    }
                    newReply(text)
                }) 
                .catch(console.error)
            break

        case 'ambilsesi':
            if (!isCreator) return newReply(mess.owner)
            newReply('Tunggu Sebentar, Sedang mengambil file sesi mu')
            let sesi = await fs.readFileSync('./session/creds.json')
            conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'creds.json' }, { quoted: m })
        break
        
        case 'autoread':
            if (!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply(`Contoh ${prefix + command} on/off`)
            if (q === 'on'){
                global.db.data.settings[botNumber].autoread = true
            newReply(`Berhasil mengubah autoread ke ${q}`)
            } else if (q === 'off'){
                global.db.data.settings[botNumber].autoread = false
            newReply(`Berhasil mengubah autoread ke ${q}`)
            }
        break
        
        case 'autobio':
            if(!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply(`Example ${prefix + command} on/off`)
            if (q == 'on'){
                global.db.data.settings[botNumber].autobio = true
                newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
            } else if (q == 'off'){
                global.db.data.settings[botNumber].autobio = false
                newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
            }
        break
        
        case 'public': {
                if (!isCreator) return newReply(mess.owner)
                conn.public = true
                newReply('Sukses Ubah Ke Penggunaan Umum')
        }
        break
        case 'self': {
                if (!isCreator) return newReply(mess.owner)
                conn.public = false
                newReply('Sukses Ubah Ke Penggunaan Sendiri')
            }
        break
        
        case 'addlist':
            if (!m.isGroup) return newReply(mess.group)
            if (!isAdmins && !isCreator) return newReply(mess.botAdmin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return newReply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
            if (isAlreadyResponList(m.chat, args1, db_respon_list)) return newReply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            addResponList(m.chat, args1, args2, false, '-', db_respon_list)
            newReply(`Berhasil menambah List menu : *${args1}*`)
        break
        
        case 'dellist':{
            if (!m.isGroup) return newReply(mess.group)
            if (!isAdmins && !isCreator) return newReply(mess.botAdmin)
            if (db_respon_list.length === 0) return newReply(`Belum ada list message di database`)
            var arr_rows = [];
            for (let x of db_respon_list) {
            if (x.id === m.chat) {
            newReply(`Mau Delete Yang Mana?\n\n${x.key}`)
        }}
        }
        break

        
        case 'enc': {
            if (!isCreator) return newReply(mess.owner)
            if (!q) return newReply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            newReply(`${meg.result}`)
        }
        break
        
        case 'pushkontak': {
        if (!text) return newReply(`Example ${prefix}${command} Hi Semuanya`)
        if (!isCreator) return newReply(mess.owner)
        let get = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
        let count = get.length;
        let sentCount = 0;
        newReply('*_Sedang Push Kontak..._*');
        for (let i = 0; i < get.length; i++) {
            setTimeout(function() {
            conn.sendMessage(get[i], { text: text });
            count--;
            sentCount++;
            if (count === 0) {
                newReply(`*_Semua pesan telah dikirim!_*:\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
            }
            }, i * 1000); // delay setiap pengiriman selama 1 detik
        }
        }
        break
        
        case 'addvn':{
            if (!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply('Nama audionya apa')
            if (vnnya.includes(q)) return newReply("Nama tersebut sudah di gunakan")
            let delb = await conn.downloadAndSaveMediaMessage(quoted)
            vnnya.push(q)
            await fsx.copy(delb, `./database/AUDIO/${q}.mp3`)
            fs.writeFileSync('./database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(delb)
            newReply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
        }
        break
        case 'delvn':{
            if (!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply('Masukan query')
            if (!vnnya.includes(q)) return newReply("Nama tersebut tidak ada di dalam data base")
            let wanu = vnnya.indexOf(q)
            vnnya.splice(wanu, 1)
            fs.writeFileSync('./database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(`./database/AUDIO/${q}.mp3`)
            newReply(`Sukses delete vn ${q}`)
        }
        break
        
        case 'listvn':{
            let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
            for (let x of vnnya) {
            teksooo += `│⭔ ${x}\n`
            }
            teksooo += `│\n└────────────⭓\n\n*Total ada : ${vnnya.length}*`
            newReply(teksooo)
        }
        break
        
        case 'addprem':
            if (!isCreator) return newReply(mess.owner)
            if (!args[0]) return newReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285731389178`)
            bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
            let ceknye = await conn.onWhatsApp(bnnd + `@s.whatsapp.net`)
            if (ceknye.length == 0) return newReply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
            premium.push(bnnd)
            fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
            newReply(mess.done)
        break
        
        case 'delprem':
            if (!isCreator) return newReply(mess.owner)
            if (!args[0]) return newReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285731389178`)
            yaki = q.split("|")[0].replace(/[^0-9]/g, '')
            unp = premium.indexOf(yaki)
            premium.splice(unp, 1)
            fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
            newReply(mess.done)
        break
        
        case 'listprem':
            teksooo = '*List Premium*\n\n'
            for (let i of premium) {
                teksooo += `- ${i}\n`
            }
            teksooo += `\n*Total : ${premium.length}*`
            conn.sendMessage(m.chat, { text: teksooo.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": premium } })
        break
        
        
    
        case 'myip': {
        if (!isCreator) return newReply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        newReply("🔎 My public IP address is: " + ip);
                    })
                })
            }
        break
        case 'listpc': {
                if (!isCreator) return newReply(mess.owner)
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let tekslist = `*🔒 LIST PERSONAL CHAT*\n\n`
                tekslist += `*📱 Total Chat :* ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    tekslist += `📛 *Nama :* ${nama}\n`
                    tekslist += `👤 *User :* @${i.split('@')[0]}\n`
                    tekslist += `🔗 *Link Chat :* https://wa.me/${i.split('@')[0]}\n\n`
                    tekslist += `──────────────────────\n\n`
                }
                newReply(tekslist)
            }
        break
        case 'listgc': {
                if (!isCreator) return newReply(mess.owner)
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let tekslistgc = `👥 *LIST GROUP CHAT*\n\n`
                tekslistgc += `📱 Total Group : ${anu.length} Group\n\n`
                for (let e of anu) {
                    let metadata = await conn.groupMetadata(e)
                    tekslistgc += `📛 *Nama :* ${metadata.subject}\n`
                    tekslistgc += `👤 *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n`
                    tekslistgc += `🌱 *ID :* ${metadata.id}\n`
                    tekslistgc += `⏳ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
                    tekslistgc += `👥 *Member :* ${metadata.participants.length}\n\n`
                    tekslistgc += `──────────────────────\n\n`
                }
                newReply(tekslistgc)
            }
        break
        
        case 'chat': {
                if (!isCreator) return newReply(mess.owner)
                if (!q) return newReply('Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
                if (args[0] === 'mute') {
                    conn.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    conn.chatModify({ mute: null }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    conn.chatModify({ archive: true }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    conn.chatModify({ archive: false }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    conn.chatModify({ markRead: true }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    conn.chatModify({ markRead: false }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    conn.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                }
            }
        break
        
        case 'react': {
                if (!isCreator) return newReply(mess.owner)
                if (!args[0]) return newReply(`Example: ${prefix + command} Titid`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                conn.sendMessage(m.chat, reactionMessage)
            }
        break

        case 'join': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply('Masukkan Link Group!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link Invalid!')
                newReply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
        }
        break
        case 'leave': {
                if (!isCreator) return newReply(mess.owner)
                await conn.groupLeave(m.chat).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
        }
        break
        case 'setexif': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Contoh : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                newReply(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
        }
        break
        case 'setpp':
        case 'setpp':
            case 'setppbot': {
            if (!isCreator) return newReply(mess.owner)
            if (!quoted) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
            if (args[0] == 'full') {
            var { img } = await generateProfilePicture(medis)
            await conn.query({
            tag: 'iq',
            attrs: {
            to: botNumber,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            fs.unlinkSync(medis)
            reply(mess.success)
            } else {
            var memeg = await conn.updateProfilePicture(botNumber, { url: medis })
            fs.unlinkSync(medis)
            newReply(`Sukses`)
            }
            }
        break
        
        // Main Menu
        case 'owner': 
        case 'creator': {
                const vcard =
                'BEGIN:VCARD\n' + // metadata of the contact card
                'VERSION:3.0\n' +
                `FN:${namaowner}\n` + // full name
                `ORG:${namabot};\n` + // the organization of the contact
                `TEL;type=MSG;type=CELL;type=VOICE;waid=${owner}:+${owner}\n` + // WhatsApp ID + phone number
                'END:VCARD'
            conn.sendMessage(m.chat, {
                contacts: {
                    displayName: namaowner,
                    contacts: [{ vcard }],
                },
            }, { quoted: fkontak})
            }
        break
        case 'ceklimit': 
        case 'checklimit': 
        case 'limit':{
                    newReply('*Limit Lu :* ' + (db.data.users[m.sender].limit))
                    }
        break
        
        case 'buyprem': {
const buyprem = `╭─❒ 「 *𝐏𝐑𝐄𝐌𝐈𝐔𝐌* 」
│    𝐏𝐀𝐊𝐄𝐓 UNLI 𝐃𝐀𝐘𝐒
│○ pengguna baru rp. 5000
│○ masa waktu - hari
╰─❒ 
minat prem pm ${nomorlu}
`
newReply(buyprem)
}
break

case 'spamsms': {
if (!isCreator) return newReply(mess.owner)
const froms = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || q) {
if (froms.startsWith('08')) return newReply('Awali nomor dengan +62')
if (froms == owner) return newReply('Tidak bisa spam ke nomor ini!')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS) BY IOX`);
});
}
} else newReply(`Penggunaan spamsms nomor/reply pesan target*\nContoh spamsms +${nomorlu}`)
newReply(`Otw Boskuuu`)
}
break
        
        case 'call':
if (!isCreator) return newReply(mess.owner)
if (!args[0]) return newReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} +${nomorlu}`)
let nosend = "+" + q.split("|")[0].replace(/[^0-9]/g, '')
if (args[0].startsWith(`+${nomorlu}`)) return newReply('Tidak bisa call ke nomor ini!')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
newReply(`Otw boskuuu`)
break
        
        case 'tes':
        newReply('Dah nyala bang')
conn.sendMessage(m.chat, {audio: fs.readFileSync('./vnme.mp3'), ptt: true, 
seconds: 360000000,
waveform:  [
100,0,100,0,100,0,100
], 
mimetype: 'audio/mpeg'}, { quoted: m })
break
        
        case 'runtime':
                newReply(`*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`)
                
        break
        
        case 'donate': case 'donasi':
const donatt = `*-------「 DONATE 」 -------*

*Qris All Payment*
Chat Me : https://wa.me/6281535365496

Kalian bisa mendukung saya agar bot ini tetap update dengan cara donasi,
Berapapun donasi kalian akan sangat berarti 👍
Makasih Yang Udah Donasi 😊`
conn.sendMessage(m.chat, { image: fs.readFileSync('./media/qris.jpg'), caption: donatt }, { quoted : m })
break;
        
        case 'totalfitur':
        case 'fitur': 
            newReply(`Total Fitur ${namabot} Adalah ${totalFitur()}`)
        break
        
        case 'pembayaran':{
newReply(`- qris`)
}
break

case 'pqris': {
conn.sendMessage(m.chat, { image: qris,  caption: `qris : scan aja kak` }, {quoted:m})
}
break
        
        case 'speed': {
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
respon = `*_📊 Bot Berhasil Dipercepat_*\n
⚡: Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
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
        
        case 'ping': {
            const used = process.memoryUsage()
            let timestamp = speed()
            let latensi = speed() - timestamp
            let neww = performance.now()
            let oldd = performance.now()
            let respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ 

_Info Server_
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
`.trim()
conn.relayMessage(m.chat, { liveLocationMessage: { 
degreesLatitude: 35.676570,
degreesLongitude: 139.762148,
caption: respon,
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: thumb,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
}
}
}} , { quoted: m })
        }
        break
        
case 'tqto': {
let tqtonya = `
_*TERIMA KASIH KEPADA*_

*• ALLAH SWT*
*• NABI MUHAMMAD SAW*
*• MY PARENTS*
*• @tinoisgood ( Author )*
*• LoL-Human ( Rest APIs )*
*• BMTH ( TEAMS )*
*• Para Penyedia Module*
*• Para Donatur*
`;
conn.sendMessage(m.chat, {
    text: tqtonya,
    contextInfo: {
    externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: '@tinoisgood',
        thumbnailUrl: "https://telegra.ph/file/8633bf5076b7da7d3ce9e.jpg",
        sourceUrl: "https://chat.whatsapp.com/FNgmAsXO7n1GHRFOm9ra7D",
        mediaType: 1,
        renderLargerThumbnail: true
    }
    }
})
}

/////////CASE TAMBAHAN GWWWW
case 'restart': {
    if (!isCreator) return newReply(mess.owner)
    newReply(`BOT SEDANG DI RESTART, TUNGGU SEBENTAR`)
    await sleep(3000)
    process.exit()
    }
break

case 'resetregister':
    if (!isCreator) return newReply(mess.owner)
    yaki = q.split("|")[0].replace(/[^0-9]/g, '')
    unp = premium.indexOf(yaki)
    premium.splice(unp, 1)
    fs.writeFileSync('./database/registered.json', JSON.stringify(premium))
    newReply(`Data Register Sudah Di Reset, Silahkan restart bot dengan command`)
break
case 'ai': case 'openai':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 
try {
if (global.keyopenai === '') return newReply("Api key limi exceeded contact Owner");
if (!q) return newReply(`Chat with AI.\n\nExample:\n${prefix + command} What is coding`)
    newReply(mess.wait)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: q,
temperature: 0.3,
max_tokens: 2000,
top_p: 1.0,
frequency_penalty: 0.0,
presence_penalty: 0.0,
});
newReply(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
newReply("Sorry, there seems to be an error :"+ error.message);
}
}
break
case 'resetlimit': {
            if (!isCreator) return newReply(mess.owner)
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            newReply('Reseted Limit')
            await sleep(3000)
            process.exit()
}
break


break
            case 'tino':
            newReply(`MENU OWNER
            ⭔ *OWNER MENU*
            ◇ ‣ ${prefix}enc *<text>*
            ◇ ‣ ${prefix}spamsms
            ◇ ‣ ${prefix}call
            ◇ ‣ ${prefix}pushkontak *<text>*
            ◇ ‣ ${prefix}autoread *<on/off>*
            ◇ ‣ ${prefix}cekapikey *<apikey>*
            ◇ ‣ ${prefix}autobio *<on/off>*
            ◇ ‣ ${prefix}bcgc *<text>*
            ◇ ‣ ${prefix}bc *<text>*
            ◇ ‣ ${prefix}lockcmd *<text>*
            ◇ ‣ ${prefix}addprem *<@user>*
            ◇ ‣ ${prefix}delprem *<@user>*
            ◇ ‣ ${prefix}addvn *<sound>*
            ◇ ‣ ${prefix}delvn *<sound>*
            ◇ ‣ ${prefix}join *<link>*
            ◇ ‣ ${prefix}leave *only group*
            ◇ ‣ ${prefix}setexif *<package | author>*
            ◇ ‣ ${prefix}setppbot *<reply | caption>*
            ◇ ‣ ${prefix}setppbot full *<reply | caption>*
            ◇ ‣ ${prefix}setnamabot *<text>*
            ◇ ‣ ${prefix}setbiobot *<text>*
            ◇ ‣ ${prefix}block *<@user>*
            ◇ ‣ ${prefix}unblock *<@user>*
            ◇ ‣ ${prefix}ambilsesi
            ◇ ‣ ${prefix}ambilcase
            ◇ ‣ ${prefix}listpc
            ◇ ‣ ${prefix}listgc
            ◇ ‣ ${prefix}public
            ◇ ‣ ${prefix}self
            ◇ ‣ ${prefix}myip
            ◇ ‣ ${prefix}chat
            ◇ ‣ ${prefix}restart
            ◇ ‣ ${prefix}resetlimit
            ◇ ‣ ${prefix}resetregister 
            ◇ ‣  =>`)
            break

            case 'script':
                newReply(`Script Bot ${namabot} https://chat.whatsapp.com/FNgmAsXO7n1GHRFOm9ra7D`)
                break



        // Group Fitur
            case 'antilinkv2':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (args.length < 1) return newReply(`Example ${prefix + command} on/off`)
                if (q == 'on'){
                    global.db.data.group[m.chat].antilinkv2 = true
                    newReply(`Berhasil Mengaktifkan antilinkv2`)
                } else if (q == 'off'){
                    global.db.data.group[m.chat].antilinkv2 = false
                    newReply(`Berhasil Mematikan antilinkv2`)
                }
            break
            case 'kick': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'remove')
            }
            break
            case 'add': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins && !isCreator) return m.reply('Lah Dikira Admin Group Kali')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await conn.groupParticipantsUpdate(m.chat, [users], 'add')
    }
    break
            case 'culik': {
                if (args.length = 0) return newReply('_*Masukin id grupnya tolol*_')
                let pantek = []
                for (let i of participants) {
                    pantek.push(i.jid)
                }
                conn.groupParticipantsUpdate(args[0], pantek)
            }
            break
            case 'promote': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'demote': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'block': {
                if (!isCreator) return newReply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.updateBlockStatus(users, 'block').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'unblock': {
                if (!isCreator) return newReply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.updateBlockStatus(users, 'unblock').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setname':
            case 'setsubject': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (!text) return 'Text ?'
                await conn.groupUpdateSubject(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setdesc':
            case 'setdesk': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (!text) return 'Text ?'
                await conn.groupUpdateDescription(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc': {
            if (!m.isGroup) return newReply(mess.group)
            if (!isAdmins) return newReply(mess.admin)
            if (!isBotAdmins) return newReply(mess.botAdmin)
            if (!quoted) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            var mediz = await conn.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
            if (args[0] == `/panjang`) {
            var { img } = await generateProfilePicture(mediz)
            await conn.query({
            tag: 'iq',
            attrs: {
            to: m.chat,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            fs.unlinkSync(mediz)
            reply(`Sukses`)
            } else {
            var memeg = await conn.updateProfilePicture(m.chat, { url: mediz })
            fs.unlinkSync(mediz)
            reply(`Sukses`)
            }
            }
            break
            case 'tagall': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let teks = `*👥 Tag All By Admin*

                🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                
            }
            break
            case 'hidetag': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                conn.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            }
            break
            case 'totag': {
            if (!m.isGroup) return newReply(mess.group)
            if (!isBotAdmins) return mess.botAdmin
            if (!isAdmins) return mess.admin
            if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
            conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
            }
            break
            case 'antilink': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.group[m.chat].antilink) return newReply(`Sudah Aktif Sebelumnya 🕊️`)
                    db.data.group[m.chat].antilink = true
                    newReply(`Antilink Group WhatsApp Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.group[m.chat].antilink) return newReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.group[m.chat].antilink = false
                    newReply(`Antilink Group WhatsApp Nonaktif 🕊️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'antilinkyt': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.group[m.chat].antilinkyt) return newReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.group[m.chat].antilinkyt = true
                    newReply(`Antilink YouTube Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.group[m.chat].antilinkyt) return newReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.group[m.chat].antilinkyt = false
                    newReply(`Antilink YouTube Nonaktif 🕊️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'antilinktt': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.group[m.chat].antilinktt) return newReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.group[m.chat].antilinktt = true
                    newReply(`Antilink TikTok Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.group[m.chat].antilinktt) return newReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.group[m.chat].antilinktt = false
                    newReply(`Antilink TikTok Nonaktif 🕊️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'mutegc': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.group[m.chat].mute) return newReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.group[m.chat].mute = true
                    newReply(`${ntiktok} telah di mute di group ini 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.group[m.chat].mute) return newReply(`Sudah Tidak Aktif Sebelumnya 🕊`)
                    db.data.group[m.chat].mute = false
                    newReply(`${ntiktok} telah di unmute di group ini 🕊️`)
                } else {
                newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === '1') {
                    await conn.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await conn.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await conn.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await conn.groupToggleEphemeral(m.chat, 0).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EFFECTIVE GROUP",
                rows: [
                {title: "⌲ Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "⌲ Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "⌲ Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "⌲ Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                conn.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, `Hello Admin `, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, m)
                }
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return `Text mana?\n\nContoh : ${prefix + command} Akame ><`
                let getGroups = await conn.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                newReply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let txt = `「 Broadcast Bot 」\n\n${text}`
                    let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑Sewa' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
                await conn.sendButtonText(i, buttons, txt, ntiktok, m, {quoted: m})
                }
                newReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return `Text mana?\n\nContoh : ${prefix + command} Akame ><`
                let anu = await store.chats.all().map(v => v.id)
                newReply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
            for (let yoi of anu) {
                    await sleep(1500)
                    let txt = `「 Broadcast Bot 」\n\n${text}`
                    let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑Sewa' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
                    await conn.sendButtonText(yoi, buttons, txt, ntiktok, m, {quoted: m})
            }
            newReply('Sukses Broadcast')
            }
            break
            case 'group':
            case 'grup': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => newReply(`Sukses Menutup Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => newReply(`Sukses Membuka Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else {
                newReply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'unlocked').then((res) => newReply(`Sukses Membuka Edit Info Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'locked').then((res) => newReply(`Sukses Menutup Edit Info Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let response = await conn.groupInviteCode(m.chat)
                conn.sendText(m.chat, `👥 *INFO LINK GROUP*\n📛 *Nama :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m,  {
                    detectLink: true
                })
            }
            break
            case 'revoke': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                await conn.groupRevokeInvite(m.chat)
                    .then(res => {
                        newReply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => newReply(jsonformat(err)))
                    }
            break
            case 'listonline':
            case 'liston': {
                if (!m.isGroup) newReply(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                conn.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
            }
            break
        // Fun Fitur 
        
            case 'apakah': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                newReply(`🚩 1 Limit Used`)
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
                }
                break
            case 'bisakah': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                newReply(`🚩 1 Limit Used`)
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
                }
                break
            case 'bagaimanakah': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                newReply(`🚩 1 Limit Used`)
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'Astagaa Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
                }
            break
            case 'rate': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                newReply(`🚩 1 Limit Used`)
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
                const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const te = ra[Math.floor(Math.random() * ra.length)]
                newReply(`Rate : ${q}\nJawaban : *${te}%*`)
                }
            break
            case 'cekaku':	
if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 2
                newReply(`🚩 2 Limit Used`)			
const ganteng = ['Cakep ✔️','Jelek Anjrit ❌']
const sifat = ['Pembohong','Galak','Suka Bantu Orang','Baik','Jahat:(','Bobrok','Suka BadMood','Setia','Tulus','Beriman','Penyayang Binatang','Baperan']
const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri']
const nomernyah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const keberanian = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const kepinteran = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                    const ganz = ganteng[Math.floor(Math.random() * ganteng.length)]
                    const sipat = sifat[Math.floor(Math.random() * sifat.length)]
                    const numb = nomernyah[Math.floor(Math.random() * nomernyah.length)]
                    const gai = suka[Math.floor(Math.random() * suka.length)]
                    const berani = keberanian[Math.floor(Math.random() * keberanian.length)]
                    const pinter = kepinteran[Math.floor(Math.random() * kepinteran.length)]
var cek = `*[ CEK PRIBADI KAMU ]*

Nama : ${pushname}
Sifat : ${sipat}
Keberanian : ${berani}%
Ketakutan : ${numb}%
Cakep : ${ganz}
Cek Pintar : ${pinter}%
Menyukai : ${gai}
`

                    conn.profilePictureUrl(m.chat, 'image').then( res => conn.sendMessage(m.chat, {caption: cek, image: { url: res }}, {quoted: m})).catch(() => conn.sendMessage(m.chat, {caption: cek, image: {url: `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCX5TOKkOk3MBt8V-f8PbmGrdLHCi4BoUOs_yuZ1pekOp8U_yWcf40t66JZ4_e_JYpRTOVCl0m8ozEpLrs9Ip2Cm7kQz4fUnUFh8Jcv8fMFfPbfbyWEEKne0S9e_U6fWEmcz0oihuJM6sP1cGFqdJZbLjaEQnGdgJvcxctqhMbNw632OKuAMBMwL86/s414/pp%20kosong%20wa%20default.jpg`}}, {quoted: m}))
                    break
            case 'cantikcek':
            case 'cekcantik':
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                newReply(`🚩 1 Limit Used`)
                if (!q) return newReply (`Penggunaan ${command} Nama\n\nContoh : ${command} Christian`)
                    const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
                    const tik = can[Math.floor(Math.random() * can.length)]
                    conn.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })

                    break
case 'sangecek':
case 'ceksange':
    case 'gaycek':
    case 'cekgay':
        case 'lesbicek':
        case 'ceklesbi':
    if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 2
                newReply(`🚩 2 Limit Used`)
                if (!q) return newReply (`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
                    const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
                    const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                    conn.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
                    break
            
        case 'cekpasangan':
                        if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 2
                newReply(`🚩 2 Limit Used`)
                if (!q) return newReply (`Penggunaan ${command} Nama1|nama2\n\nContoh : ${command} Rehan|Rizki`)
                    get_args = args.join(" ").split("|")
                jeremyy = get_args[0]
                gaby = get_args[1]
                    const kkan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100 ']
                    const dsik = kkan[Math.floor(Math.random() * kkan.length)]
conn.sendMessage(m.chat, { text: `Nama : ${jeremyy} ❤ ${gaby}\nJawaban : *${dsik}%*` }, { quoted: m })
break
                
            case 'kapankah': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                newReply(`🚩 1 Limit Used`)
                if (!q) return newReply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                newReply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
                }
            break
            
            case 'wangy': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                newReply(`🚩 1 Limit Used`)
                if (!q) return newReply(`Contoh : .wangy Riy`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                newReply(awikwok)
                }
            break
            
            case 'cekmati': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                newReply(`🚩 1 Limit Used`)
                if (!q) return newReply(`Yg mau di cek siapa bang?`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                newReply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_2 Timotius 4:7 TB: "Aku telah mengakhiri pertandingan yang baik, aku telah mencapai garis akhir dan aku telah memelihara iman."_\n*Kehidupan kita hanya Tuhan yang tau.*`)
                }
            break
            
            case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 2
                newReply(`🚩 2 Limit Used`)
                if (!m.quoted && !text) return newReply(`Kirim/reply text dengan caption ${prefix + command}`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                newReply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                }
            break
            
        // ISLAMIN FITUR
            case 'iqra': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                newReply(`🚩 1 Limit Used`)
                oh = `Contoh : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
                if (!text) return newReply(oh)
                yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
                conn.sendMessage(m.chat, {
                    document: yy,
                    mimetype: 'application/pdf',
                    fileName: `iqra${text}.pdf`
                }, {
                    quoted: m
                }).catch((err) => newReply(oh))
            }
            break
            case 'juzamma': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                newReply(`🚩 1 Limit Used`)
                if (args[0] === 'pdf') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'
                        },
                        mimetype: 'application/pdf',
                        fileName: 'juz-amma-arab-latin-indonesia.pdf'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'docx') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        fileName: 'juz-amma-arab-latin-indonesia.docx'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'pptx') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                        fileName: 'juz-amma-arab-latin-indonesia.pptx'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'xlsx') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        fileName: 'juz-amma-arab-latin-indonesia.xlsx'
                    }, {
                        quoted: m
                    })
                } else {
                    newReply(`Mau format apa ? Contoh : ${prefix + command} pdf\nFormat yang tersedia : pdf, docx, pptx, xlsx`)
                }
            }
            break
            case 'hadis':
            case 'hadist': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                newReply(`🚩 1 Limit Used`)
                if (!args[0]) return newReply(`Contoh:
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
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
                if (!args[1]) return newReply(`Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
                try {
                    let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
                    let {
                        number,
                        arab,
                        id
                    } = res.find(v => v.number == args[1])
                    newReply(`No. ${number}

${arab}

${id}`)
                } catch (e) {
                    newReply(`Hadis tidak ditemukan !`)
                }
            }
            break
            case 'tafsirsurah': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                newReply(`🚩 1 Limit Used`)
                if (!args[0]) return `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                if (!args[1]) return `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                newReply(txt)
            }
            break
            case 'asmaulhusna':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                newReply(`🚩 3 Limit Used`)
            newReply(mess.wait)
            axios
                .get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
                .then(({ data }) => {
                    var text = `No : ${data.result.index}\n`
                    text += `Latin: ${data.result.latin}\n`
                    text += `Arab : ${data.result.ar}\n`
                    text += `Indonesia : ${data.result.id}\n`
                    text += `English : ${data.result.en}`
                    newReply(text)
                })
                .catch(console.error)
            break
            
            case 'alquranaudio': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                if (args.length == 0) return newReply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                newReply(mess.wait)
                conn.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${apikey}`}, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            }
            break
            
            case 'alquran':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            if (args.length < 1) return newReply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
            newReply(mess.wait)
            axios
                .get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey}`)
                .then(({ data }) => {
                    var ayat = data.result.ayat
                    var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
                    }
                    text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
                    text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
                    newReply(text)
                })
                .catch(console.error)
            break
            
            case 'jadwalsolat': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            if (!text) return newReply('Mana Kotanya?')
            newReply(mess.wait)
            let anu = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=${apikey}`)
            newReply(`Wilayah: ${anu.result.wilayah}\n\nTanggal: ${anu.result.tanggal}\nSahur: ${anu.result.sahur}\nImsak: ${anu.result.imsak}\nTerbit: ${anu.result.terbit}\nDhuha: ${anu.result.dhuha}\nDzuhur: ${anu.result.dzuhur}\nAshar: ${anu.result.ashar}\nMagrib: ${anu.result.maghrib}\nIsya: ${anu.result.isya}`)
            }
            break
            
            case 'kisahnabi':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            if (args.length == 0) return newReply(`Example: ${prefix + command} Muhammad`)
            newReply(mess.wait)
            axios
                .get(`https://api.lolhuman.xyz/api/kisahnabi/${full_args}?apikey=${apikey}`)
                .then(({ data }) => {
                    var text = `Name : ${data.result.name}\n`
                    text += `Lahir : ${data.result.thn_kelahiran}\n`
                    text += `Umur : ${data.result.age}\n`
                    text += `Tempat : ${data.result.place}\n`
                    text += `Story : \n${data.result.story}`
                    newReply(text)
                })
                .catch(console.error)
            break
            
                //TAMBAHAN CASE @TINOISGOOD
                            case 'cerpen':
                if (!isRegistered) return newReply('𝙺𝚊𝚖𝚞 𝚋𝚎𝚕𝚞𝚖 𝚍𝚊𝚏𝚝𝚊𝚛! 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚍𝚊𝚏𝚝𝚊𝚛 𝚍𝚎𝚗𝚐𝚊𝚗 𝚌𝚊𝚛𝚊 𝚔𝚎𝚝𝚒𝚔 *#𝚍𝚊𝚏𝚝𝚊𝚛 𝚗𝚊𝚖𝚊|𝚞𝚖𝚞𝚛*')
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            newReply(mess.wait)
            axios
                .get(`https://api.lolhuman.xyz/api/cerpen?apikey=${apikey}`)
                .then(({ data }) => {
                    var text = `*𝙹𝚞𝚍𝚞𝚕 𝙲𝚎𝚛𝚙𝚎𝚗 :* ${data.result.title}\n`
                    text += `*𝙿𝚎𝚖𝚋𝚞𝚊𝚝 :* ${data.result.creator}\n\n`
                    text += `*𝙲𝙴𝚁𝙸𝚃𝙰 𝙿𝙴𝙽𝙳𝙴𝙺*\n`
                    text += `${data.result.cerpen}\n`
                    newReply(text)
                })
                .catch(console.error)
            break
                        case 'faktaunik':
                if (!isRegistered) return newReply('𝙺𝚊𝚖𝚞 𝚋𝚎𝚕𝚞𝚖 𝚍𝚊𝚏𝚝𝚊𝚛! 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚍𝚊𝚏𝚝𝚊𝚛 𝚍𝚎𝚗𝚐𝚊𝚗 𝚌𝚊𝚛𝚊 𝚔𝚎𝚝𝚒𝚔 *#𝚍𝚊𝚏𝚝𝚊𝚛 𝚗𝚊𝚖𝚊|𝚞𝚖𝚞𝚛*')
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            newReply(mess.wait)
            axios
                .get(`https://api.lolhuman.xyz/api/random/faktaunik?apikey=${apikey}`)
                .then(({ data }) => {
                    var text = `*${data.result}*\n`
                    newReply(text)
                })
                .catch(console.error)
            break
                
                case 'namarandom':
                if (!isRegistered) return newReply('𝙺𝚊𝚖𝚞 𝚋𝚎𝚕𝚞𝚖 𝚍𝚊𝚏𝚝𝚊𝚛! 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚍𝚊𝚏𝚝𝚊𝚛 𝚍𝚎𝚗𝚐𝚊𝚗 𝚌𝚊𝚛𝚊 𝚔𝚎𝚝𝚒𝚔 *#𝚍𝚊𝚏𝚝𝚊𝚛 𝚗𝚊𝚖𝚊|𝚞𝚖𝚞𝚛*')
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            newReply(mess.wait)
            axios
                .get(`https://api.lolhuman.xyz/api/random/nama?apikey=${apikey}`)
                .then(({ data }) => {
                    var text = `*${data.result}*\n`
                    newReply(text)
                })
                .catch(console.error)
            break
    case 'katabijak':
                if (!isRegistered) return newReply('𝙺𝚊𝚖𝚞 𝚋𝚎𝚕𝚞𝚖 𝚍𝚊𝚏𝚝𝚊𝚛! 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚍𝚊𝚏𝚝𝚊𝚛 𝚍𝚎𝚗𝚐𝚊𝚗 𝚌𝚊𝚛𝚊 𝚔𝚎𝚝𝚒𝚔 *#𝚍𝚊𝚏𝚝𝚊𝚛 𝚗𝚊𝚖𝚊|𝚞𝚖𝚞𝚛*')
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            newReply(mess.wait)
            axios
                .get(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${apikey}`)
                .then(({ data }) => {
                    var text = `*${data.result}*\n`
                    newReply(text)
                })
                .catch(console.error)
            break
                case 'katabucin':
                if (!isRegistered) return newReply('𝙺𝚊𝚖𝚞 𝚋𝚎𝚕𝚞𝚖 𝚍𝚊𝚏𝚝𝚊𝚛! 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚍𝚊𝚏𝚝𝚊𝚛 𝚍𝚎𝚗𝚐𝚊𝚗 𝚌𝚊𝚛𝚊 𝚔𝚎𝚝𝚒𝚔 *#𝚍𝚊𝚏𝚝𝚊𝚛 𝚗𝚊𝚖𝚊|𝚞𝚖𝚞𝚛*')
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            newReply(mess.wait)
            axios
                .get(`https://api.lolhuman.xyz/api/random/katabucin?apikey=${apikey}`)
                .then(({ data }) => {
                    var text = `*${data.result}*\n`
                    newReply(text)
                })
                .catch(console.error)
            break
                
                case 'pantun':
                if (!isRegistered) return newReply('𝙺𝚊𝚖𝚞 𝚋𝚎𝚕𝚞𝚖 𝚍𝚊𝚏𝚝𝚊𝚛! 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚍𝚊𝚏𝚝𝚊𝚛 𝚍𝚎𝚗𝚐𝚊𝚗 𝚌𝚊𝚛𝚊 𝚔𝚎𝚝𝚒𝚔 *#𝚍𝚊𝚏𝚝𝚊𝚛 𝚗𝚊𝚖𝚊|𝚞𝚖𝚞𝚛*')
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            newReply(mess.wait)
            axios
                .get(`https://api.lolhuman.xyz/api/random/pantun?apikey=${apikey}`)
                .then(({ data }) => {
                    var text = `${data.result}\n`
                    newReply(text)
                })
                .catch(console.error)
            break
                
                
                
                
                
                
                
                
                
                
            case 'listsurah':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            newReply(mess.wait)
            axios
                .get(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
                .then(({ data }) => {
                    var text = 'List Surah:\n'
                    for (var x in data.result) {
                        text += `${x}. ${data.result[x]}\n`
                    }
                    newReply(text)
                })
                .catch(console.error)
            break
            
            case 'niatsholat': case 'niatshalat':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2
            newReply(`🚩 2 Limit Used`)
            if (args.length == 0) return newReply(`Contoh: ${prefix + command} ashar\n\nAvailable queries: Subuh, dzuhur, ashar, maghrib, isya`)
                kueri = args[0]
                qurq = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${kueri}?apikey=${apikey}`)
                newReply(mess.wait)
                qurq = qurq.result
                ini_txt = `[ *${qurq.name}* ]\n\n`
                ini_txt += `${qurq.ar}\n\n`
                ini_txt += `_${qurq.latin}_\n`
                ini_txt += `${qurq.id}\n\n`
                ini_txt += `*Selamat menjalankan shalat. Semoga shalatnya lancar dan diberkati.*`
                newReply(ini_txt)
                break
            // DOWNLOADER FITUR
            case 'pindl':
            case 'pindownload': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (args.length == 0) return newReply(`Contoh: ${prefix + command} https://pin.it/3E5fARH`)
                let anu = axios.get(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${apikey}&url=${full_args}`).then(({ data }) => {
                conn.sendMessage(m.chat, { video: { url: data.result }, caption: `${namabot}`}, { quoted: fkontak })
                })
                }
            break
            case 'git': case 'gitclone': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!args[0]) return newReply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return newReply(`Link invalid!!`)
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
            }           
            break

            case 'ytmp4':
            if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
            newReply(mess.wait)
            axios
                .get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${args[0]}`)
                .then(({ data }) => {
                    var caption = `❖ Title: *${data.result.title}*\n`
                    caption += `❖ Id: ${data.result.id}\n`
                    
                    conn.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
                        conn.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })
                    })
                })
                .catch(console.error)
            break
            case 'tiktokslideshow':	
                if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            if (args.length == 0) return newRreply(`Usage: ${prefix + command} link`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${apikey}&url=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x < 50; x++) {
                        conn.sendImage(m.chat, get_result[x], `Tiktok Download`, m)
                    }
                    break
                    case 'tiktok': {
                        if (!isRegistered) return newReply('𝙺𝚊𝚖𝚞 𝙱𝚎𝚕𝚞𝚖 𝙳𝚊𝚏𝚝𝚊𝚛 𝚜𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚔𝚎𝚝𝚒𝚔 *𝚍𝚊𝚏𝚝𝚊𝚛 𝚗𝚊𝚖𝚊|𝚞𝚖𝚞𝚛*')
                        if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                        db.data.users[m.sender].limit -= 1
                        if (!q) return newReply('𝙼𝚊𝚗𝚊 𝙻𝚒𝚗𝚔 𝚃𝚒𝚔𝚝𝚘𝚔𝚖𝚞! 𝙺𝚎𝚝𝚒𝚔 *𝚝𝚒𝚔𝚝𝚘𝚔 𝚕𝚒𝚗𝚔𝚖𝚞*')
                        newReply(mess.wait)
                        let tt = await fetchJson(`https://api.lolhuman.xyz/api/tiktok2?apikey=${apikey}&url=${q}`)
                        await conn.sendMessage(m.chat, { video: { url: tt.result }, caption: mess.done }, { quoted: m })
                    }
                        break
            
            case 'tiktokaudio': {
                if (!isRegistered) return newReply('𝙺𝚊𝚖𝚞 𝙱𝚎𝚕𝚞𝚖 𝙳𝚊𝚏𝚝𝚊𝚛 𝚜𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚔𝚎𝚝𝚒𝚔 𝚍𝚊𝚏𝚝𝚊𝚛 𝚗𝚊𝚖𝚊|𝚞𝚖𝚞𝚛')
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            if (!q) return newReply('𝙼𝚊𝚗𝚊 𝙻𝚒𝚗𝚔 𝚃𝚒𝚔𝚝𝚘𝚔𝚖𝚞! 𝙺𝚎𝚝𝚒𝚔 *𝚝𝚒𝚔𝚝𝚘𝚔 𝚕𝚒𝚗𝚔𝚖𝚞*')
        let i = await fetchJson(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apikey}&url=${q}`)
        await conn.sendMessage(m.chat, {
        audio: {
            url: i.result
        },
        mimetype: 'audio/mp4'
        }, {
        quoted: m
        })
        
    }
        break
            
            case 'igdl': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
            newReply(mess.wait)
            axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
                var url = data.result[0]
                if (url.includes('.mp4')) {
                    conn.sendMessage(m.chat, { video: { url }, mimetype: 'video/mp4' })
                } else {
                    conn.sendMessage(m.chat, { image: { url } })
                }
            })
            
            }
            break
            
            case 'igdl2': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
            newReply(mess.wait)
            axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
                for (var x of data.result) {
                    if (x.includes('.mp4')) {
                        conn.sendMessage(m.chat, { video: { url: x }, mimetype: 'video/mp4' })
                    } else {
                        conn.sendMessage(m.chat, { image: { url: x } })
                    }
                }
            })
            
            }
            break
            
            case 'twtdl': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
            newReply(mess.wait)
            axios.get(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
                conn.sendMessage(m.chat, { video: { url: data.result.link[data.result.link.length - 1].link }, mimetype: 'video/mp4' })
            })
            
            }
            break
            
            case 'fbdl': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
            newReply(mess.wait)
            axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
                conn.sendMessage(m.chat, { video: { url: data.result }, mimetype: 'video/mp4' })
            })
            
            }
            break
            
            // Tools Fitur
            case 'hapus': 
            case 'delete': 
            case 'del': 
            case 'd': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                newReply(`🚩 1 Limit Used`)
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return newReply('Pesan tersebut bukan dikirim oleh bot!')
                conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            
            case 'q':
            case 'quoted': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                newReply(`🚩 1 Limit Used`)
                if (!m.quoted) return newReply('Reply Pesannya!!')
                let wokwol = await conn.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return newReply('Pesan Yang Anda Reply Tidak Mengandung Reply')
                await wokwol.quoted.copyNForward(m.chat, true)
            }
            break
            
            case 'ebinary': {
                if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                newReply(`🚩 3 Limit Used`)
                let {
                    eBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let eb = await eBinary(teks)
                newReply(eb)
            }
            break
            case 'dbinary': {
                if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                newReply(`🚩 3 Limit Used`)
                let {
                    dBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let db = await dBinary(teks)
                newReply(db)
            }
            break
            
            case 'ss':
            if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3
            newReply(`🚩 3 Limit Used`)
            if (args.length == 0) return newReply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ssweb?apikey=${apikey}&url=${args[0]}`}, caption: `URL: ${args[0]}`}, { quoted: fkontak })
            break
            
            case 'ssweb':
            if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3
            newReply(`🚩 3 Limit Used`)
            if (args.length == 0) return newReply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/sswebfull?apikey=${apikey}&url=${args[0]}`}, caption: `URL: ${args[0]}`}, { quoted: m})
            break
            
            case 'shortlink':
            if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3
            newReply(`🚩 3 Limit Used`)
            if (args.length == 0) return newReply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
            axios.get(`https://api.lolhuman.xyz/api/ouoshortlink?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
                newReply(data.result)
            })
            break
            
            // AI FITUR
            case 'aiimage': {
            if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
            if (!isPremium) return newReply(mess.prem)
            if (args.length == 0) return newReply(`Membuat gambar dari AI.\n\nContoh :\n${prefix+command} rumah mewah`)
                newReply(mess.wait)
                kueri = args.join(" ")
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/dall-e?apikey=${apikey}&text=${kueri}` }, caption: `[ *Cocok jadi pelukis monalisa?* ]` }, {quoted:m})
            }
            break
            case 'aiimage2': {
            if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
            if (!isPremium) return newReply(mess.prem)
            if (args.length == 0) return newReply(`Membuat gambar dari AI.\n\nContoh :\n${prefix+command} rumah mewah`)
                newReply(mess.wait)
                kueri = args.join(" ")
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/diffusion-prompt?apikey=${apikey}&prompt=${kueri}` }, caption: `[ *Cocok jadi pelukis monalisa?* ]` }, {quoted:m})
            }
            break
            case 'speechtotext': case 'stt': {
            if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
            if (!isPremium) return newReply(mess.prem)
            if (args.length == 0) return newReply(`Usage : ${prefix + command} link yang dapat didownload\n\nBagaimana cara menggunakan fitur ini?\n\n*Cara 1*\n1. Download video youtube\n2. Upload ke mana aja (drive dll) dan masukkan link yang dapat didownload.\n\n*Cara 2 (recommended)*\n1. Download video youtube dan convert ke mp3 (cari di google: yt to mp3)\n2. Upload ke sndup.net (file tidak boleh melebihi 20 mb)\n3. Setelah terupload, tahan tombol *Download audio* dan klik salin/copy link\n4. Masukkan link nya.`)
                kueri = args[0]
            newReply(mess.wait)
            jor = await fetchJson(`https://api.lolhuman.xyz/api/speech-to-text?apikey=${apikey}&audio=${kueri}`)
            ini_txt = `[ *VIDEO BERSABDA* ]\n\n`
        ini_txt += `${jor.result}`
            conn.sendText(m.chat, ini_txt)
            }
            break
        
            case 'aichat': case 'gpt':{
                if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 8
                newReply(`🚩 8 Limit Used`)
            if (!text) return newReply(`Contoh : ${prefix+ command} 7 7 2005`)
                newReply(mess.wait)
                kueri = args.join(" ")
                jip = await fetchJson(`https://api.lolhuman.xyz/api/openai?apikey=carolineismine&text=${kueri}&user=user-unique-id`)
                
        ini_txt = `[ *CHAT GPT BERSABDA* ]\n\n`
        ini_txt += `${jip.result}`
            conn.sendText(m.chat, ini_txt)
            }
            break
            
            case 'aichatt': case 'gptturbo':{
                if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 8
                newReply(`🚩 8 Limit Used`)
            if (!text) return newReply(`Contoh : ${prefix+ command} 7 7 2005`)
                newReply(mess.wait)
                kueri = args.join(" ")
                jiup = await fetchJson(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${apikey}&text=${kueri}&system=ayam`)
                
        ini_txt = `[ *CHAT GPT BERSABDA* ]\n\n`
        ini_txt += `${jiup.result}`
            conn.sendText(m.chat, ini_txt)
            }
            break
            
            // Information Fitur
            case 'pinterest': 
            case 'image': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Example : ${prefix + command}`)
                newReply(mess.wait)
                let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done}, { quoted: m })
            }
            break
            
            case 'google': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} fatih arridho`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `• *Title* : ${g.title}\n`
                teks += `• *Description* : ${g.snippet}\n`
                teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                newReply(teks)
                })
                }
            break
            
            
            
            case 'infochat': {
                if (!m.quoted) newReply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return newReply('Pesan tersebut bukan dikirim oleh bot!')
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `👤 @${i.userJid.split('@')[0]}\n`
                    teks += `⏳ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}\n📈 *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                newReply(teks)
            }
            break
            
            case 'kbbi':{
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} kursi`)
            newReply(mess.wait)
        kueri = args.join(" ")
            alam = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${apikey}&query=${kueri}`)
            var titid = `\`\`\`Kata : ${alam.result.nama}\`\`\`\n`
            titid += `\`\`\`Kata Dasar : ${alam.result.kata_dasar}\`\`\`\n`
            titid += `\`\`\`Pelafalan : ${alam.result.pelafalan}\`\`\`\n`
            titid += `\`\`\`Bentuk Tidak Baku : ${alam.result.bentuk_tidak_baku}\`\`\`\n\n`
            for (var x of alam.result) {
                titid += `\`\`\`Kode : ${x.makna.kelas.kode}\`\`\`\n`
                titid += `\`\`\`Kelas : ${x.makna.kelas.nama}\`\`\`\n`
                titid += `\`\`\`Artinya : \n${x.makna.kelas.deskripsi}\`\`\`\n\n`
                titid += `\`\`\`Makna Lain : \n${x.makna.submakna}\`\`\`\n `
                titid += `\`\`\`Contoh Kalimat : \n${x.makna.contoh}\`\`\`\n`
            }
            newReply(titid)
            }
            break
        case 'brainly':{
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} siapakah sukarno`)
            newReply(mess.wait)
        kueri = args.join(" ")
            adot = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${apikey}&query=${kueri}`)
            var ti  = 'Beberapa Pembahasan Dari Brainly :\n\n'
            for (var x of adot.result) {
                ti  += `==============================\n`
                ti  += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
                ti  += `\`\`\`Jawaban :\`\`\`\n${x.answer.content}\n`
                ti  += `==============================\n\n`
            }
            newReply(ti )
            }
            break
            case 'roboguru':{
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} siapakah sukarno`)
            newReply(mess.wait)
            deto = await fetchJson(`https://api.lolhuman.xyz/api/roboguru?apikey=${apikey}&query=${full_args}&grade=sma&subject=sejarah`).catch((err) => console.error(err?.response?.data))
            var tit = '*Beberapa Pembahasan Dari Roboguru :*\n\n'
            for (var x of deto.result) {
                tit += `==============================\n`
                tit += `\`\`\`Pertanyaan :\`\`\`\n${x.question}\n\n`
                tit += `\`\`\`Jawaban :\`\`\`\n${x.answer}\n`
                tit += `==============================\n\n`
            }
            newReply(tit)
            }
            break
            
            case 'jaraktempuh':{
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            if (args.length == 0) return newReply(`Usage: ${prefix + command} kota1|kota2`)
            get_args = args.join(" ").split("|")
                    kota1 = get_args[0]
                    kota2 = get_args[1]
            get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${apikey}&kota1=${kota1}&kota2=${kota2}`)
            get_result = get_result.result
            ini_txt = `Dari kota: ${get_result.from.name}\n`
            ini_txt += `Latitude: ${get_result.from.latitude}\n`
            ini_txt += `Longitude: ${get_result.from.longitude}\n\n`
            ini_txt += `Ke kota: ${get_result.to.name}\n`
            ini_txt += `Latitude: ${get_result.to.latitude}\n`
            ini_txt += `Longitude: ${get_result.to.longitude}\n\n`
            ini_txt += `Jarak tempuh: ${get_result.jarak}\n`
            ini_txt += `*Waktu:*\n`
            ini_txt += `Kereta Api: ${get_result.kereta_api}\n`
            ini_txt += `Pesawat: ${get_result.pesawat}\n`
            ini_txt += `Mobil: ${get_result.mobil}\n`
            ini_txt += `Motor: ${get_result.motor}\n`
            ini_txt += `Jalan Kaki: ${get_result.jalan_kaki}\n`
            conn.sendText(m.chat, ini_txt)
            }
                    break
            
            case 'wikipedia':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} Tahu`)
            newReply(mess.wait)
        kueri = args.join(" ")
            drut = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${apikey}&query=${kueri}`)
            ini_teks = `[ *WIKIPEDIA SEARCH FOR ${kueri}* ]\n\n`
            ini_teks += `${drut.result}`
            newReply(ini_teks)
            break
            
            case 'translate':{
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} en Tahu Bacem`)
            newReply(mess.wait)
            var kode_negara = args[0]
            args.shift()
            var tittt = args.join(' ')
            dhata = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${apikey}&text=${tittt}`)
            init_txt = `From : ${dhata.result.from}\n`
            init_txt += `To : ${dhata.result.to}\n`
            init_txt += `Original : ${dhata.result.original}\n`
            init_txt += `Translated : ${dhata.result.translated}\n`
            init_txt += `Pronunciation : ${dhata.result.pronunciation}\n`
            newReply(init_txt)
            }
            break
            
            case 'jadwaltv':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} RCTI`)
            doti = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${args[0]}?apikey=${apikey}`)
            newReply(mess.wait)
            var titttt = `[ *Jadwal TV ${args[0].toUpperCase()}* ]\n`
            for (var x in doti.result) {
                titttt += `${x} - ${doti.result[x]}\n`
            }
            newReply(titttt)
            break
            
            case 'jadwaltvnow':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            datf = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apikey}`)
            newReply(mess.wait)
            var tittttt = `Jadwal TV Now :\n`
            for (var x in datf.result) {
                tittttt += `${x.toUpperCase()}${datf.result[x]}\n\n`
            }
            newReply(tittttt)
            break
            
            case 'newsinfo':{
            dito = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${apikey}`)
            newReply(mess.wait)
            var titttttt = 'Result :\n'
            for (var x of dito.result) {
                titttttt += `Title : ${x.title}\n`
                titttttt += `Author : ${x.author}\n`
                titttttt += `Source : ${x.source.name}\n`
                titttttt += `Url : ${x.url}\n`
                titttttt += `Published : ${x.publishedAt}\n`
                titttttt += `Description : ${x.description}\n\n`
            }
            newReply(titttttt)
            }
            break
            case 'detiknews': { //olin is mine
            dita = await fetchJson(`https://api.lolhuman.xyz/api/detik?apikey=${apikey}`)
                
                    var ini_txt = "[ *DETIK NEWS* ]\n\n"
                    for (var x of dita.result) {
                        ini_txt += `Judul : ${x.title}\n`
                        ini_txt += `Diupload : ${x.time}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    newReply(ini_txt)
            }
                    break
                    
            case 'cnnindonesia':{
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            (`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${apikey}`)
            newReply(mess.wait)
            var tittttttt = 'Result :\n'
            for (var x of data.result) {
                tittttttt += `Judul : ${x.judul}\n`
                tittttttt += `Link : ${x.link}\n`
                tittttttt += `Tipe : ${x.tipe}\n`
                tittttttt += `Published : ${x.waktu}\n\n`
            }
            newReply(tittttttt)
            }
            break
            
            case 'cnnnasional':{
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            datd = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${apikey}`)
            newReply(mess.wait)
            var titttttttt = 'Result :\n'
            for (var x of datd.result) {
                titttttttt += `⭔ Judul : ${x.judul}\n`
                titttttttt += `⭔ Link : ${x.link}\n`
                titttttttt += `⭔ Tipe : ${x.tipe}\n`
                titttttttt += `⭔ Published : ${x.waktu}\n\n`
            }
            newReply(titttttttt)
            }
            break
            
            case 'cnninternasional':{
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            dats = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${apikey}`)
            newReply(mess.wait)
            var tittttttttt = 'Result :\n'
            for (var x of dats.result) {
                tittttttttt += `⭔ Judul : ${x.judul}\n`
                tittttttttt += `⭔ Link : ${x.link}\n`
                tittttttttt += `⭔ Tipe : ${x.tipe}\n`
                tittttttttt += `⭔ Published : ${x.waktu}\n\n`
            }
            newReply(tittttttttt)
            }
            break
            
            case 'infogempa':
                if (!isRegistered) return newReply('𝙺𝚊𝚖𝚞 𝚋𝚎𝚕𝚞𝚖 𝚍𝚊𝚏𝚝𝚊𝚛! 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚍𝚊𝚏𝚝𝚊𝚛 𝚍𝚎𝚗𝚐𝚊𝚗 𝚌𝚊𝚛𝚊 𝚔𝚎𝚝𝚒𝚔 *#𝚍𝚊𝚏𝚝𝚊𝚛 𝚗𝚊𝚖𝚊|𝚞𝚖𝚞𝚛*')
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            
            datu = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${apikey}`)
            newReply(mess.wait)
            var caption = `⭔ Lokasi : ${datu.result.lokasi}\n`
            caption += `⭔ Waktu : ${datu.result.waktu}\n`
            caption += `⭔ Potensi : ${datu.result.potensi}\n`
            caption += `⭔ Magnitude : ${datu.result.magnitude}\n`
            caption += `⭔ Kedalaman : ${datu.result.kedalaman}\n`
            caption += `⭔ Koordinat : ${datu.result.koordinat}`
            conn.sendMessage(m.chat, { image: { url: datu.result.map }, caption })
            break
            
            case 'lirik':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3
            newReply(`🚩 3 Limit Used`)
            if (args.length == 0) return newReply(`Example: ${prefix + command} Melukis Senja`)
            newReply(mess.wait)
        kueri = args.join(" ")
            dati = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${apikey}&query=${kueri}`)
            newReply(dati.result)
            break
            
            case 'infocuaca':{
                if (!isRegistered) return newReply('𝙺𝚊𝚖𝚞 𝚋𝚎𝚕𝚞𝚖 𝚍𝚊𝚏𝚝𝚊𝚛! 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚍𝚊𝚏𝚝𝚊𝚛 𝚍𝚎𝚗𝚐𝚊𝚗 𝚌𝚊𝚛𝚊 𝚔𝚎𝚝𝚒𝚔 *#𝚍𝚊𝚏𝚝𝚊𝚛 𝚗𝚊𝚖𝚊|𝚞𝚖𝚞𝚛*')
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} Trenggalek`)
            newReply(mess.wait)
            get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${args[0]}?apikey=${apikey}`)
            dataaaa = get_result.result
            var titttttttttt = `Tempat : ${dataaaa.tempat}\n`
            titttttttttt += `Cuaca : ${dataaaa.cuaca}\n`
            titttttttttt += `Angin : ${dataaaa.angin}\n`
            titttttttttt += `Description : ${dataaaa.description}\n`
            titttttttttt += `Kelembapan : ${dataaaa.kelembapan}\n`
            titttttttttt += `Suhu : ${dataaaa.suhu}\n`
            titttttttttt += `Udara : ${dataaaa.udara}\n`
            titttttttttt += `Permukaan laut : ${dataaaa.permukaan_laut}\n`
            conn.sendMessage(m.chat, { location: { degreesLatitude: dataaaa.latitude, degreesLongitude: dataaaa.longitude } })
            newReply(titttttttttt)
            }
            break
            
            case 'cekkodepos':
                if (!isRegistered) return newReply('𝙺𝚊𝚖𝚞 𝚋𝚎𝚕𝚞𝚖 𝚍𝚊𝚏𝚝𝚊𝚛! 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚍𝚊𝚏𝚝𝚊𝚛 𝚍𝚎𝚗𝚐𝚊𝚗 𝚌𝚊𝚛𝚊 𝚔𝚎𝚝𝚒𝚔 *#𝚍𝚊𝚏𝚝𝚊𝚛 𝚗𝚊𝚖𝚊|𝚞𝚖𝚞𝚛*')
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            if (args.length == 0) return newReply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
            newReply(mess.wait)
        kueri = args.join(" ")
            dato = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${apikey}&query=${kueri}`)
            tittttttttttt = "[ *KODE POS* ]\n\n"
        for (var x of dato.result) {
            tittttttttttt += `Provinsi : ${x.province}\n`
            tittttttttttt += `Kabupaten : ${x.city}\n`
            tittttttttttt += `Kecamatan : ${x.subdistrict}\n`
            tittttttttttt += `Kelurahan : ${x.urban}\n`
            tittttttttttt += `Kode Pos : ${x.postalcode}\n\n`
        }
            newReply(tittttttttttt)
            break
            
            case 'jadwalbola':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 7
            newReply(`🚩 7 Limit Used`)
            dataa = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${apikey}`)
            newReply(mess.wait)
            var titttttttttttt = 'Jadwal Bola :\n'
            for (var x of dataa.result) {
                titttttttttttt += `Pada : ${x.time}\n`
                titttttttttttt += `Event : ${x.event}\n`
                titttttttttttt += `Match : ${x.match}\n`
                titttttttttttt += `TV : ${x.tv}\n\n`
            }
            newReply(titttttttttttt)
            break
            
            // ANIME FITUR
            case 'genshin':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 15
            newReply(`🚩 15 Limit Used`)
            if (args.length == 0) return newReply(`Example: ${prefix + command} jean`)
            newReply(mess.wait)
        kueri = args.join(" ")
            dater = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${kueri}?apikey=${apikey}`)
            var caption = `Name : ${dater.result.title}\n`
            caption += `Intro : ${dater.result.intro}\n`
            caption += `Icon : ${dater.result.icon}\n`
            await conn.sendMessage(m.chat, { image: { url: dater.result.cover1 }, caption })
            await conn.sendMessage(m.chat, { audio: { url: dater.result.cv[0].audio[0] }, mimetype: 'audio/mp4' })
            break
            
            // CONVERT FITUR
            
            case 'qc': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            const { quote } = require('./lib/quote.js')
            if (!q) return ('Masukan Text')
            let ppnyauser = await await conn.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
            const rest = await quote(q, pushname, ppnyauser)
            newReply(mess.wait)
            conn.sendImageAsSticker(m.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
            }
            break

            
            case 'sticker':
            case 'stiker':
            case 's':{
                if (!isRegistered) return newReply('𝙺𝚊𝚖𝚞 𝙱𝚎𝚕𝚞𝚖 𝙳𝚊𝚏𝚝𝚊𝚛 𝚜𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚔𝚎𝚝𝚒𝚔 *𝚍𝚊𝚏𝚝𝚊𝚛 𝚗𝚊𝚖𝚊|𝚞𝚖𝚞𝚛*')
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                if (!quoted) return newReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            case 'mediafire': {
                if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
if (!text) return newReply ('Masukkan Query Link!')
if (args.length == 0) return m.reply(`The link you provided is invalid`)
    kueri = args[0]
const baby1 = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=${apikey}&url=${kueri}`)
if (baby1.result.filesize.split('MB')[0] >= 999) return newReply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
    
*Name* : ${baby1.result.filename}
*Size* : ${baby1.result.filesize}
*Type* : ${baby1.result.filetype}
*Link* : ${baby1.result.link}`
newReply(`${result4}`)
conn.sendMessage(m.chat, { document : { url : baby1.result.link}, fileName : baby1.result.filename, mimetype: baby1.result.filetype }, { quoted : m }).catch ((err) => newReply(mess.error))
}
break
            case 'spotifysearch':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 7
            newReply(`🚩 7 Limit Used`)			// search menu			
            if (args.length == 0) newReply (`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "[ *SPOTIFY SEARCH* ]\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    conn.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/FXc0dhy/Text-Pro-me-163b1560e70fbd.jpg' }, caption: ini_txt}, { quoted: fkontak })
                    break
            case 'spotifydw': case 'spotify': case 'spotifydl':		
if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 7
            newReply(`🚩 7 Limit Used`)			// download menu
            if (args.length == 0) newReply (`Usage: ${prefix + command} link`)
                m.reply(`Mohon tunggu, Bot sedang memproses link lagu...`) 
            kueri = args[0]
                let anuaa = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${apikey}&url=${kueri}`)
                let msgsaa = await conn.sendImage(m.chat, anuaa.result.thumbnail, `⭔ Title : ${anuaa.result.title}\n⭔ Singer : ${anuaa.result.artists}\n⭔ Duration : ${anuaa.result.duration}\n⭔ Popularity : ${anuaa.result.popularity}\n⭔ URL : ${anuaa.result.external_urls.spotify}`, m)
                conn.sendMessage(m.chat, { audio: { url: anuaa.result.link }, mimetype: 'audio/mp4', fileName: anuaa.result.title+'.mp3' }, { quoted: m })
                break

                case 'ytmp3': 
                if (!isRegistered) return newReply('𝙺𝚊𝚖𝚞 𝚋𝚎𝚕𝚞𝚖 𝚍𝚊𝚏𝚝𝚊𝚛! 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚍𝚊𝚏𝚝𝚊𝚛 𝚍𝚎𝚗𝚐𝚊𝚗 𝚌𝚊𝚛𝚊 𝚔𝚎𝚝𝚒𝚔 *#𝚍𝚊𝚏𝚝𝚊𝚛 𝚗𝚊𝚖𝚊|𝚞𝚖𝚞𝚛*')
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
    // download menu
            if (args.length == 0) newReply (`Usage: ${prefix + command} link`)
                m.reply(`Mohon tunggu, Bot sedang memproses link lagu...`) 
            kueri = args[0]
                let anaa = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${apikey}&url=${kueri}`)
                let msgaa = await conn.sendImage(m.chat, anaa.result.thumbnail, `⭔ Title : ${anaa.result.title}\n⭔ Uploader : ${anaa.result.uploader}\n⭔ Duration : ${anaa.result.duration}\n⭔ Channel : ${anaa.result.channel}\n⭔ View : ${anaa.result.view}`, m)
                conn.sendMessage(m.chat, { audio: { url: anaa.result.link.link }, mimetype: 'audio/mp4', fileName: anaa.result.title+'.mp3' }, { quoted: m })
                break
                
                case 'dall': 
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 7
            newReply(`🚩 7 Limit Used`)

            if (args.length == 0) newReply (`Usage: ${prefix + command} query`)
                m.reply(`Mohon tunggu, Bot sedang memproses link lagu...`) 
            kueri = args.join(" ")
                let anadddda = await fetchJson(`https://api.lolhuman.xyz/api/diffusion-prompt?apikey=${apikey}&prompt=${kueri}`)
                conn.sendImage(m.chat, anadddda.result, `Here it is`, m)
            
                break
            case 'ytmp32': 
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 7
            newReply(`🚩 7 Limit Used`)
    // download menu
            if (args.length == 0) newReply (`Usage: ${prefix + command} link`)
                m.reply(`Mohon tunggu, Bot sedang memproses link lagu...`) 
            kueri = args[0]
                let olin = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=${kueri}`)
                let jeremy = await conn.sendImage(m.chat, olin.result.thumbnail, `⭔ Title : ${olin.result.title}\n⭔ ID : ${olin.result.id}`, m)
                conn.sendMessage(m.chat, { audio: { url: olin.result.link }, mimetype: 'audio/mp4', fileName: olin.result.title+'.mp3' }, { quoted: m })
                break
                
            case 'wm': case 'take': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                newReply(`🚩 7 Limit Used`)
if (!args.join(" ")) return reply(`Example :\nwm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
conn.downloadAndSaveMediaMessage(quoted, "gifee")
conn.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await (m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
            
            case 'smeme': {
            let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
            if (!/image/.test(mime)) return newReply(respond)
            if (!text) return newReply(respond)
            newReply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            let dwnld = await conn.downloadAndSaveMediaMessage(qmsg)
            let fatGans = await TelegraPh(dwnld)
            let smeme = `https://api.lolhuman.xyz/api/memecreator?apikey=${apikey}&text1=${bawah}&text2=${atas}&img=${fatGans}`
            conn.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
            }
            break
            
            case 'emojimix': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                newReply(`🚩 3 Limit Used`)
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                if (!emoji2) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                newReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            case 'emojimix2': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                newReply(`🚩 3 Limit Used`)
                if (!text) return newReply(`Contoh : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            case 'attp':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                
                try {
                if (args.length == 0) return newReply(`Example: ${prefix + command} @tinoisgood`)
                await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/attp?apikey=${apikey}&text=${full_args}` }}, { quoted: m })
            } catch (e) {
                newReply(mess.error)
            }
            break
            
            case 'toimage': 
            case 'toimg': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2
            newReply(`🚩 2 Limit Used`)
                if (!/webp/.test(mime)) return newReply(`Reply sticker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                
            }
            break
            case 'tomp4': 
            case 'tovideo': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2
            newReply(`🚩 2 Limit Used`)
                if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            
            case 'toaud': 
            case 'toaudio': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2
            newReply(`🚩 2 Limit Used`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            newReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            
            }
            break
            
            case 'tomp3': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 9
            newReply(`🚩 9 Limit Used`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
            newReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By @tinoisgood.mp3`}, { quoted : m })
            
            }
            break
            
            case 'tovn': 
            case 'toptt': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 8
            newReply(`🚩 8 Limit Used`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
            newReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            
            }
            break
            
            case 'togif': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            
            case 'tourl': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    newReply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    newReply(util.format(anu))
                }
                await fs.unlinkSync(media)
                
            }
            break
            
            // Stalk Fitur

            case 'igstalk':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                if (args.length == 0) return newReply(`Example: ${prefix + command} tinoisgood`)
                newReply(mess.wait)
                axios
                    .get(`https://api.lolhuman.xyz/api/stalkig/${full_args}?apikey=${apikey}`)
                    .then(({ data }) => {
                        var text = `Username : *${data.result.username}*\n`
                        text += `Fullname : *${data.result.fullname}*\n`
                        text += `Post : *${data.result.post}* post\n`
                        text += `Follower : *${data.result.followers}*\n`
                        text += `Following : *${data.result.following}*`
                        newReply(text)
                    })
                    .catch(console.error)
                    break

            case 'ttstalk': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} dryan.pu`)
            newReply(mess.wait)
            axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
                var caption = `Username : ${data.result.username}\n`
                caption += `Nickname : ${data.result.nickname}\n`
                caption += `Followers : ${data.result.followers}\n`
                caption += `Followings : ${data.result.followings}\n`
                caption += `Likes : ${data.result.likes}\n`
                caption += `Video : ${data.result.video}\n`
                caption += `Bio : ${data.result.bio}\n`
                conn.sendMessage(m.chat, { image: { url: data.result.user_picture }, caption })
            })
            
            }
            break
            
            case 'mlstalk': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} 84830127/2169`)
            newReply(mess.wait)
            (`https://api.lolhuman.xyz/api/mobilelegend/${args[0]}?apikey=${apikey}`)
            newReply(data.result)
            
            }
            break
            
            case 'ghstalk': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} @tinoisgood`)
            newReply(mess.wait)
            axios.get(`https://api.lolhuman.xyz/api/github/${args[0]}?apikey=${apikey}`).then(({ data }) => {
                var caption = `Name : ${data.result.name}\n`
                caption += `Link : ${data.result.url}\n`
                caption += `Public Repo : ${data.result.public_repos}\n`
                caption += `Public Gists : ${data.result.public_gists}\n`
                caption += `Followers : ${data.result.followers}\n`
                caption += `Following : ${data.result.following}\n`
                caption += `Bio : ${data.result.bio}`
                conn.sendMessage(m.chat, { image: { url: data.result.avatar }, caption })
            })
            
            }
            break
            
            case 'twstalk': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} jokowi`)
            newReply(mess.wait)
            axios.get(`https://api.lolhuman.xyz/api/twitter/${args[0]}?apikey=${apikey}`).then(({ data }) => {
                var caption = `Username : ${data.result.screen_name}\n`
                caption += `Name : ${data.result.name}\n`
                caption += `Tweet : ${data.result.tweet}\n`
                caption += `Joined : ${data.result.joined}\n`
                caption += `Followers : ${data.result.followers}\n`
                caption += `Following : ${data.result.following}\n`
                caption += `Like : ${data.result.like}\n`
                caption += `Description : ${data.result.description}`
                conn.sendMessage(m.chat, { image: { url: data.result.profile_picture }, caption })
            })
            
            }
            break
        
            case 'ktpmaker':
            if (!isPremium) newReply(mess.prem)
            if (args.length == 0) return newReply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
            newReply(mess.wait)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${apikey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    conn.sendMessage(m.chat, { image: { url: ini_buffer}, caption: `Done?`}, {quoted: m})
            break
            
            
            
            case 'darkjoke':
            case 'dj':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${apikey}`}, caption: `Ehem jgn tersinggung`}, {quoted: m})
            break

            case 'meme':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/meme?apikey=${apikey}`}, caption: `Done?`}, {quoted: m})
            break
            
            case 'memeindo':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
                newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${apikey}`}, caption: `Done?`}, {quoted: m})
            break
            
            
            // Ramdon Foto
            case 'art':
            case 'bts':
            case 'exo':
            case 'elf':
            case 'loli':
            case 'neko':
            case 'waifu':
            case 'shota':
            case 'husbu':
            case 'sagiri':
            case 'shinobu':
            case 'megumin':
            case 'wallnime': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 12
                newReply(`🚩 12 Limit Used`)
                if (!isPremium) return newReply(mess.prem)
                newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `http://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`}, caption: `Random image for ${command}`})
            }
            break
            
            // Creator Image
            case 'bucinsertifikat':
            case 'sertifikatbucin':
            case 'bucincert':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                if (args.length == 0) return newReply(`Example: ${prefix + command} Nama lu`)
                newReply(mess.wait)
                kueri = args.join(" ")
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${apikey}&name=${kueri}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
            
            case 'tololsert':
            case 'tololcert':
            case 'tololsertifikat':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            if (args.length == 0) return newReply(`Example: ${prefix + command} Nama Lu`)
            newReply(mess.wait)
            ytta = args.join(" ")
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/toloserti?apikey=${apikey}&name=${ytta}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
            
            case 'pacarsertifikat':
            case 'pacarcert':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1
            if (args.length == 0) return newReply(`Usage: ${prefix + command} nama1|nama2`)
            newReply(mess.wait)
                get_args = args.join(" ").split("|")
                nik = get_args[0]
                prov = get_args[1]
                titidnya = `Selamat yaa ${nik} ❤️ ${prov}`
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${apikey}&name1=${nik}&name2=${prov}`}, caption: titidnya}, {quoted: m})
            break
            
            case 'carbon':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                if (!q) return newReply(`Example: ${prefix + command} const adrian = require('adrian-api')`)
                newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/carbon?apikey=${apikey}&code=${q}&language=nodejs`}, caption: `Created By @tinoisgood\n\n\nCode:\n\n${q}`}, {quoted: m})
            break
        
        // Ephoto1
        case 'wetglass':
        case 'multicolor3d':
        case 'watercolor':
        case 'luxurygold':
        case 'galaxywallpaper':
        case 'lighttext':
        case 'beautifulflower':
        case 'puppycute':
        case 'royaltext':
        case 'heartshaped':
        case 'birthdaycake':
        case 'galaxystyle':
        case 'hologram3d':
        case 'greenneon':
        case 'glossychrome':
        case 'greenbush':
        case 'metallogo':
        case 'noeltext':
        case 'glittergold':
        case 'textcake':
        case 'starsnight':
        case 'wooden3d':
        case 'textbyname':
        case 'writegalacy':
        case 'galaxybat':
        case 'snow3d':
        case 'birthdayday':
        case 'goldplaybutton':
        case 'silverplaybutton':
        case 'freefire':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2
            if (args.length == 0) return newReply(`Example: ${prefix + command} TINOO `)
            newReply(mess.wait)
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${args}`}, caption: `Created By @tinoisgood\n\n Type: ${command}\n\nText: ${args}`}, { quoted: m })
            break

        case 'shadow':
        case 'cup':
        case 'cup1':
        case 'romance':
        case 'smoke':
        case 'burnpaper':
        case 'lovemessage':
        case 'undergrass':
        case 'love':
        case 'coffe':
        case 'woodheart':
        case 'woodenboard':
        case 'summer3d':
        case 'wolfmetal':
        case 'nature3d':
        case 'underwater':
        case 'golderrose':
        case 'summernature':
        case 'letterleaves':
        case 'glowingneon':
        case 'fallleaves':
        case 'flamming':
        case 'harrypotter':
        case 'carvedwood':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2
            if (args.length == 0) return newReply(`Example: ${prefix + command} @tinoisgood`)
            newReply(mess.wait)
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${args}`}, caption: `Created By @tinoisgood\n\n Type: ${command}\n\nText: ${args}`}, { quoted: m})
            break

    // Text Prome
        case 'pornhub':
        case 'glitch':
        case 'avenger':
        case 'space':
        case 'ninjalogo':
        case 'marvelstudio':
        case 'lionlogo':
        case 'wolflogo':
        case 'steel3d':
        case 'wallgravity':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2
            if (args.length == 0) return newReply(`Example: ${prefix + command} @tinoisgood`)
            newReply(mess.wait)
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${args[0]}&text2=${args[1]}`}, caption: `Created By @tinoisgood\n\n Type: ${command}\n\nText: ${args}`}, { quoted: m })
            break

        case 'blackpink':
        case 'neon':
        case 'greenneon':
        case 'advanceglow':
        case 'futureneon':
        case 'sandwriting':
        case 'sandsummer':
        case 'sandengraved':
        case 'metaldark':
        case 'neonlight':
        case 'holographic':
        case 'text1917':
        case 'minion':
        case 'deluxesilver':
        case 'newyearcard':
        case 'bloodfrosted':
        case 'halloween':
        case 'jokerlogo':
        case 'fireworksparkle':
        case 'natureleaves':
        case 'bokeh':
        case 'toxic':
        case 'strawberry':
        case 'box3d':
        case 'roadwarning':
        case 'breakwall':
        case 'icecold':
        case 'luxury':
        case 'cloud':
        case 'summersand':
        case 'horrorblood':
        case 'thunder':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2
            if (args.length == 0) return newReply(`Example: ${prefix + command} @tinoisgood`)
            newReply(mess.wait)
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${args}` }, caption: `Created By @tinoisgood\n\n Type: ${command}\n\nText: ${args}`}, { quoted: m })
            break
        
            case 'akira':
            case 'akiyama':
            case 'ana':
            case 'asuna':
            case 'ayuzawa':
            case 'boruto':
            case 'chitoge':
            case 'deidara':
            case 'doraemon':
            case 'elaina':
            case 'emilia':
            case 'erza':
            case 'gremory':
            case 'hestia':
            case 'hinata':
            case 'inori':
            case 'isuzu':
            case 'itachi':
            case 'itori':
            case 'kaga':
            case 'kagura':
            case 'kakasih':
            case 'kaori':
            case 'keneki':
            case 'kotori':
            case 'kurumi':
            case 'loli':
            case 'madara':
            case 'mikasa':
            case 'miku':
            case 'minato':
            case 'naruto':
            case 'nezuko':
            case 'onepiece':
            case 'pokemon':
            case 'rize':
            case 'sagiri':
            case 'sakura':
            case 'sasuke':
            case 'shina':
            case 'shinka':
            case 'shizuka':
            case 'shota':
            case 'toukachan':
            case 'tsunade':
            case 'yuki': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 2
                
                newReply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: (mess.done) }, { quoted: m })
        }
        break
            case 'aesthetic':
            case 'anjing':
            case 'blankpink':
            case 'boneka':
            case 'darkjokes':
            case 'hekel':
            case 'justina':
            case 'kpop':
            case 'kucing':
            case 'mobil':
            case 'motor':
            case 'pubg':
            case 'rose':
            case 'ryujin':
            case 'wallhp': {
            newReply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Image/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
        break
            case 'cyberspace':
            case 'mountain':
            case 'programming':
            case 'technology': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            newReply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
            break
            case 'cecan':
            case 'china':
            case 'cogan':
            case 'indonesia':
            case 'japan':
            case 'korea':
            case 'malaysia':
            case 'thailand':
            case 'vietnam': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                newReply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
            break
            case 'couple': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 10
                
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                newReply(mess.wait)
                let random = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, {
                    image: {
                        url: random.male
                    },
                    caption: `Couple Male`
                }, {
                    quoted: m
                })
                conn.sendMessage(m.chat, {
                    image: {
                        url: random.female
                    },
                    caption: `Couple Female`
                }, {
                    quoted: m
                })
            }
            break
            
            case 'tohd':
            case 'remini': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 50
            newReply(`🚩 50 Limit Used`)
                newReply(mess.wait)
                if (isMedia) {
                    const media = await conn.downloadAndSaveMediaMessage(quoted)
                    const anu = await TelegraPh(media)
                    await 
                    conn.sendMessage(m.chat, { image: { url: `https://api.itsrose.site/image/unblur?url=${anu}&apikey=olengblogeid` }, caption: `Sukses membuat hd` }, { quoted: m })
                } else {
                newReply('Reply gambar nya bang')
                }
            }
            break
            
            case 'jadianime': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 50
            newReply(`🚩 50 Limit Used`)
            newReply(mess.wait)
                if (isMedia) {
                    const media = await conn.downloadAndSaveMediaMessage(quoted)
                    const anu = await TelegraPh(media)
                    await 
                    conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/imagetoanime?apikey=${apikey}&img=${anu}` }, caption: mess.done }, { quoted: m })
                } else {
                newReply('Reply gambar nya bang')
                }
            }
            break
            
            case 'nomerhoki': case 'nomorhoki': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!Number(text)) return newReply(`Contoh : ${prefix + command} 6288292024190`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} Dika Ardianta`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} Dika|Novia`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!ext)return newReply(`Contoh : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix+ command} 7 7 2005`)
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
                if (date == 'Invalid Date') return date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                
                if (!text) return newReply(`Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(text)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hasil :* ${anu.message}`, m)
            }
            break
        

            /*case 'family100': {
                if ('family100'+m.chat in _family100) {
                    newReply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    return false
                }
                let anup = await fetchJson('https://raw.githubusercontent.com/tinogustino/database/master/games/family100.json')
                let random = anup[Math.floor(Math.random() * anup.length)]
                let hasilp = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await conn.sendText(m.chat, hasilp, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            // Akinator menu start
            
        case 'akinator': 
        
                    if (akinator.hasOwnProperty(m.sender.split('@')[0])) newReply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${apikey}`)
                    let { server, frontaddr, session, signature, question, step } = get_result.result
                    const data = {}
                    data["server"] = server
                    data["frontaddr"] = frontaddr
                    data["session"] = session
                    data["signature"] = signature
                    data["question"] = question
                    data["step"] = step
                    imi_txt = `${question}\n\n`
                    imi_txt += "0 - Ya\n"
                    imi_txt += "1 - Tidak\n"
                    imi_txt += "2 - Saya Tidak Tau\n"
                    imi_txt += "3 - Mungkin\n"
                    imi_txt += "4 - Mungkin Tidak"
                    conn.sendText(m.chat, imi_txt, m).then(() => {
                        akinator[m.sender.split('@')[0]] = data
                        fs.writeFileSync("./src/akinator.json", JSON.stringify(akinator))
                    })
                    break
                case 'cancelakinator':
                    if (!akinator.hasOwnProperty(m.sender.split('@')[0])) newReply("Anda tidak memiliki akinator sebelumnya")
                    delete akinator[m.sender.split('@')[0]]
                    fs.writeFileSync("./src/akinator.json", JSON.stringify(akinator))
                    newReply("Success mengcancel akinator sebelumnya")
                    break */
        // Akinator menu end
        case 'kuismath':
    case 'math': {
        if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
        let {
            genMath,
            modes
        } = require('./database/math.js')
        if (!text) return newReply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
        let result = await genMath(text.toLowerCase())
        conn.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
            kuismath[m.sender.split('@')[0]] = result.jawaban
        })
        await sleep(result.waktu)
        if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
            console.log("Jawaban: " + result.jawaban)
            newReply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
            delete kuismath[m.sender.split('@')[0]]
        }
    }

    break
        case 'tebak': {
            if (args[0] === 'gambar') {
                if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let anu = await fetchJson('https://raw.githubusercontent.com/tinogustino/database/master/games/tebakgambar.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, {
                    image: {
                        url: result.img
                    },
                    caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`
                }, {
                    quoted: m
                }).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    conn.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                }
            } else if (args[0] === 'kata') {
                if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let anu = await fetchJson('https://raw.githubusercontent.com/tinogustino/database/master/games/tebakkata.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    conn.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`, m)
                    delete tebakkata[m.sender.split('@')[0]]
                }
            } else if (args[0] === 'kalimat') {
                if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let anu = await fetchJson('https://raw.githubusercontent.com/tinogustino/database/master/games/tebakkalimat.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    conn.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                }
            } else if (args[0] === 'lirik') {
                if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let anu = await fetchJson('https://raw.githubusercontent.com/tinogustino/database/master/games/tebaklirik.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    conn.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                }
            } else if (args[0] === 'tebakan') {
                if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let anu = await fetchJson('https://raw.githubusercontent.com/tinogustino/database/master/games/tebaktebakan.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    conn.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m)
                    delete tebaktebakan[m.sender.split('@')[0]]
                }
            } else if (args[0] === 'bendera') {
                if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let anu = await fetchJson('https://raw.githubusercontent.com/tinogustino/database/master/games/tebakbendera.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, {
                    image: {
                        url: result.img
                    },
                    caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
                }, {
                    quoted: m
                }).then(() => {
                    tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                })
                await sleep(60000)
                if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.name)
                    conn.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
                    delete tebakbendera[m.sender.split('@')[0]]
                }
            } else if (args[0] === 'bendera2') {
                if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let anu = await fetchJson('https://raw.githubusercontent.com/tinogustino/database/master/games/tebakbendera2.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, {
                    image: {
                        url: result.img
                    },
                    caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`
                }, {
                    quoted: m
                }).then(() => {
                    tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase()
                })
                await sleep(60000)
                if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.name)
                    conn.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[m.sender.split('@')[0]]}`, m)
                    delete tebakbendera2[m.sender.split('@')[0]]
                }
            } else if (args[0] === 'kabupaten') {
                if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let anu = await fetchJson('https://raw.githubusercontent.com/tinogustino/database/master/games/tebakkabupaten.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, m).then(() => {
                    tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
                })
                await sleep(60000)
                if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.title)
                    conn.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m)
                    delete tebakkabupaten[m.sender.split('@')[0]]
                }
            } else if (args[0] === 'kimia') {
                if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let anu = await fetchJson('https://raw.githubusercontent.com/tinogustino/database/master/games/tebakkimia.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, m).then(() => {
                    tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
                })
                await sleep(60000)
                if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.lambang)
                    conn.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m)
                    delete tebakkimia[m.sender.split('@')[0]]
                }
            } else if (args[0] === 'asahotak') {
                if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let anu = await fetchJson('https://raw.githubusercontent.com/tinogustino/database/master/games/asahotak.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    conn.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m)
                    delete tebakasahotak[m.sender.split('@')[0]]
                }
            } else if (args[0] === 'siapakahaku') {
                if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let anu = await fetchJson('https://raw.githubusercontent.com/tinogustino/database/master/games/siapakahaku.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebaksiapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    conn.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[m.sender.split('@')[0]]}`, m)
                    delete tebaksiapakahaku[m.sender.split('@')[0]]
                }
            } else if (args[0] === 'susunkata') {
                if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let anu = await fetchJson('https://raw.githubusercontent.com/tinogustino/database/master/games/susunkata.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
                    tebaksusunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    conn.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m)
                    delete tebaksusunkata[m.sender.split('@')[0]]
                }
            } else if (args[0] === 'tekateki') {
                if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let anu = await fetchJson('https://raw.githubusercontent.com/tinogustino/database/master/games/tekateki.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebaktekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    conn.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}`, m)
                    delete tebaktekateki[m.sender.split('@')[0]]
                }
            }
        }
        break
            case 'bass': 
            case 'blown': 
            case 'deep': 
            case 'earrape': 
            case 'fast': 
            case 'fat': 
            case 'nightcore': 
            case 'reverse': 
            case 'robot': 
            case 'slow': 
            case 'smooth': 
            case 'tupai': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                
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
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return newReply(err)
                let buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else newReply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                newReply(e)
                }
                }
            break
        // Add Menu
        case 'gimage': {
        if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) 
                db.data.users[m.sender].limit -= 2
                newReply(`🚩 2 Limit Used`)
            if (args.length == 0) return newReply(`Contoh :\n${prefix+command} rumah mewah`)
                newReply(mess.wait)
                kueri = args.join(" ")
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/gimage?apikey=${apikey}&query=${kueri}` }, caption: `[ *Tdk perlu berterimakasih tuan* ]` }, {quoted:m})
            }
            break
case 'playstore':
        if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) 
                db.data.users[m.sender].limit -= 2
                newReply(`🚩 2 Limit Used`)
            if (args.length == 0) return newReply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `[ *PLAY STORE SEARCH FROM ${query.toUpperCase()}* ]\n\n`
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.price}\n`
                        ini_txt += `Score : ${x.scoreText}\n`
                        ini_txt += `Summary : ${x.summary}\n\n──────────────────────\n`
                    }
                    newReply(ini_txt)
                    break
                    case 'infocuaca':{
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            
            if (args.length == 0) return newReply(`Example: ${prefix + command} Yogyakarta`)
            newReply(mess.wait)
            get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${args[0]}?apikey=${apikey}`)
            dataaaa = get_result.result
            var titttttttttt = `Tempat : ${dataaaa.tempat}\n`
            titttttttttt += `Cuaca : ${dataaaa.cuaca}\n`
            titttttttttt += `Angin : ${dataaaa.angin}\n`
            titttttttttt += `Description : ${dataaaa.description}\n`
            titttttttttt += `Kelembapan : ${dataaaa.kelembapan}\n`
            titttttttttt += `Suhu : ${dataaaa.suhu}\n`
            titttttttttt += `Udara : ${dataaaa.udara}\n`
            titttttttttt += `Permukaan laut : ${dataaaa.permukaan_laut}\n`
            conn.sendMessage(m.chat, { location: { degreesLatitude: dataaaa.latitude, degreesLongitude: dataaaa.longitude } })
            newReply(titttttttttt)
            }
            break
                    case 'searchplace':
                if (!isRegistered) return newReply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) 
                db.data.users[m.sender].limit -= 2
                newReply(`🚩 2 Limit Used`)
            if (args.length == 0) return newReply(`Example: ${prefix + command} Padang`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/searchplace?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `[ *SEARCH PLACE FROM ${query.toUpperCase()}* ]\n\n`
                    for (var x of get_result) {
                        ini_txt += `Nama : ${x.display_name}\n`
                        ini_txt += `Kota : ${x.full.city}\n`
                        ini_txt += `Provinsi : ${x.full.state}\n`
                        ini_txt += `Negara : ${x.full.country}\n\n──────────────────────\n`

                    }
                    conn.sendMessage(m.chat, { location: { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude } }, ini_txt, m )
            
                    newReply(ini_txt)
                    break
            /*
            case 'setcmd': {
                if (!m.quoted) return newReply('Reply Pesan!')
                if (!m.quoted.fileSha256) return newReply('SHA256 Hash Tidak Ditemukan ❎')
                if (!text) return newReply(`Untuk Command Apa?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return newReply('Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: +new Date,
                    locked: false,
                }
                newReply(mess.done)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return newReply(`Tidak Ada Hash`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return newReply('Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎')
                delete global.db.data.sticker[hash]
                newReply(mess.done)
            }
            break
            case 'listcmd': {
                let teks = `*List Hash 🚀*
Info: *bold* hash is Locked 🔒

*Hash ☕ :*
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                conn.sendText(m.chat, teks, m, {
                    mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
                })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return newReply(mess.owner)
                if (!m.quoted) return newReply('Reply Pesan!')
                if (!m.quoted.fileSha256) return newReply('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return newReply('Hash Not Found In Database')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                newReply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) return newReply('Reply Message Yang Ingin Disave Di Database')
                if (!text) return newReply(`Contoh : ${prefix + command} Nama File`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return newReply(`'${text}' Telah Terdaftar Di List Pesan`)
                msgs[text.toLowerCase()] = quoted.fakeObj
                newReply(`Berhasil Menambahkan Pesan Di List Pesan Sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return newReply(`Contoh : ${prefix + command} File Name\n\nLihat List Pesan Dengan ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return newReply(`'${text}' Tidak Terdaftar Di List Pesan`)
                conn.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => {
                    return {
                        nama,
                        ...isi
                    }
                })
                let teks = 'LIST DATABASE 📂\n\n'
                for (let i of seplit) {
                    teks += `📛 *Name :* ${i.nama}`
                    teks += `🚀 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
                }
                newReply(teks)
            }
            break
            case 'delmsg':
            case 'deletemsg': {
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return newReply(`'${text}' tidak terdaftar didalam list pesan`)
                delete msgs[text.toLowerCase()]
                newReply(`Berhasil menghapus '${text}' dari list pesan`)
            }
            break
            */
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 5

arxzy = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await conn.sendMessage(m.chat, { audio: arxzy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'menu':
    if (!isRegistered) return newReply('𝙺𝚊𝚖𝚞 𝚋𝚎𝚕𝚞𝚖 𝚍𝚊𝚏𝚝𝚊𝚛! 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚍𝚊𝚏𝚝𝚊𝚛 𝚍𝚎𝚗𝚐𝚊𝚗 𝚌𝚊𝚛𝚊 𝚔𝚎𝚝𝚒𝚔 *#𝚍𝚊𝚏𝚝𝚊𝚛 𝚗𝚊𝚖𝚊|𝚞𝚖𝚞𝚛*')
    let menunya =` 𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚍𝚊𝚝𝚊𝚗𝚐 𝚍𝚒 *𝙵𝚊𝚝𝚑𝚎𝚛𝙱𝚘𝚝-𝙼𝙳*

    ‣‣‣ *𝙸𝙽𝙵𝙾 𝚂𝙴𝚁𝚅𝙴𝚁* ‣‣‣

    ⭔ *𝙼𝙾𝙳𝙴 :* ${conn.public ? '𝙿𝚄𝙱𝙻𝙸𝙲' : ' 𝙿𝚁𝙸𝚅𝙰𝚃𝙴'}
    ⭔ *𝚃𝙰𝙽𝙶𝙶𝙰𝙻 :* ${hariini}
    ⭔ *𝙹𝙰𝙼*: ${wib}
    ⭔ *𝙱𝙰𝙸𝙻𝙴𝚈𝚂 :* encodeXs
    ⭔ *𝚁𝚄𝙽𝚃𝙸𝙼𝙴 :* ${runtime(process.uptime())}
    ⭔ *𝚃𝙾𝚃𝙰𝙻 𝚄𝚂𝙴𝚁 :* ${Object.keys(global.db.data.users).length}
    ⭔ *𝚃𝙾𝚃𝙰𝙻 𝙵𝙸𝚃𝚄𝚁𝙴 :* ${totalFitur()}

    ‣‣‣ *𝙸𝙽𝙵𝙾 𝚄𝚂𝙴𝚁* ‣‣‣

    ⭔ *𝙽𝙰𝙼𝙴 :* ${pushname}
    ⭔ *𝙽𝚄𝙼𝙱𝙴𝚁 :* ${m.sender.split('@')[0]}
    ⭔ *𝚂𝚃𝙰𝚃𝚄𝚂 :* ${isCreator ? "𝙾𝚆𝙽𝙴𝚁" : "𝚄𝚂𝙴𝚁"}
    ⭔ *𝚄𝚂𝙴𝚁 :* ${isPremium ? '𝙿𝚁𝙴𝙼𝙸𝚄𝙼' : '𝙵𝚁𝙴𝙴'}
    ⭔ *𝙻𝙸𝙼𝙸𝚃 :* ${isCreator ? '𝚄𝙽𝙻𝙸𝙼𝙸𝚃𝙴𝙳' : `${db.data.users[m.sender].limit}`}


    ${readmore}
    ‣‣‣ *𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙼𝙴𝙽𝚄* ‣‣‣

    ⭔ ${prefix}*𝚂𝚃𝙸𝙲𝙺𝙴𝚁* _𝚔𝚒𝚛𝚒𝚖 𝚐𝚊𝚖𝚋𝚊𝚛 𝚍𝚎𝚗𝚐𝚊𝚗 𝚝𝚊𝚐_
    ⭔ ${prefix}*𝚂𝙼𝙴𝙼𝙴* _𝚔𝚒𝚛𝚒𝚖 𝚐𝚊𝚖𝚋𝚊𝚛 𝚍𝚎𝚗𝚐𝚊𝚗 𝚝𝚊𝚐_
    ⭔ ${prefix}*𝚃𝙾𝙼𝙿4* _𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚊𝚝𝚊𝚞 𝚐𝚒𝚏𝚝 𝚓𝚊𝚍𝚒 𝚟𝚒𝚍𝚎𝚘_
    ⭔ ${prefix}*𝚃𝙾𝙼𝙿3* _𝚟𝚒𝚍𝚎𝚘 𝚙𝚎𝚗𝚍𝚎𝚔 𝚓𝚊𝚍𝚒 𝚜𝚞𝚊𝚛𝚊_
    ⭔ ${prefix}*𝚃𝙾𝚅𝙽* _𝚟𝚒𝚍𝚎𝚘/𝚜𝚞𝚊𝚛𝚊 𝚓𝚊𝚍𝚒 𝚟𝚗_
    ⭔ ${prefix}*𝚃𝙾𝙼𝙿3* _𝚟𝚒𝚍𝚎𝚘/𝚜𝚞𝚊𝚛𝚊 𝚓𝚊𝚍𝚒 𝚖𝚙3_
    ⭔ ${prefix}*𝚃𝙾𝙶𝙸𝙵* _𝚟𝚒𝚍𝚎𝚘 𝚊𝚝𝚊𝚞 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚓𝚊𝚍𝚒 𝚐𝚒𝚏𝚝_

    ‣‣‣ *𝚂𝚃𝙰𝙻𝙺𝙴𝚁 𝙼𝙴𝙽𝚄* ‣‣‣

    ⭔ ${prefix}*𝙸𝙶𝚂𝚃𝙰𝙻𝙺* _𝚍𝚊𝚗 𝚒𝚍 𝚒𝚐_

    ‣‣‣ *𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 𝙼𝙴𝙽𝚄* ‣‣‣

    ⭔ ${prefix}*𝚈𝚃𝙼𝙿3* _𝚕𝚒𝚗𝚔 𝚟𝚒𝚍𝚎𝚘 𝚢𝚝_
    ⭔ ${prefix}*𝚈𝚃𝙼𝙿4* _𝚕𝚒𝚗𝚔 𝚟𝚒𝚍𝚎𝚘 𝚢𝚝_
    ⭔ ${prefix}*𝚃𝙸𝙺𝚃𝙾𝙺* _𝚕𝚒𝚗𝚔 𝚟𝚒𝚍𝚎𝚘 𝚝𝚒𝚔𝚝𝚘𝚔_
    ⭔ ${prefix}*𝚃𝙸𝙺𝚃𝙾𝙺𝙰𝚄𝙳𝙸𝙾* _𝚕𝚒𝚗𝚔 𝚟𝚒𝚍𝚎𝚘 𝚝𝚒𝚔𝚝𝚘𝚔_
    ⭔ ${prefix}*𝙸𝙶𝙳𝙻* _𝚕𝚒𝚗𝚔 𝚟𝚒𝚍𝚎𝚘 𝚊𝚝𝚊𝚞 𝚏𝚘𝚝𝚘 𝚒𝚐_

    ‣‣‣ *𝙾𝚃𝙷𝙴𝚁 𝙼𝙴𝙽𝚄* ‣‣‣

    ⭔ ${prefix}*𝙲𝙴𝙺𝚁𝙴𝚂𝙸* _𝚙𝚊𝚜𝚝𝚒𝚔𝚊𝚗 𝚗𝚘 𝚛𝚎𝚜𝚒 𝚋𝚎𝚗𝚎𝚛 𝚢𝚊_
    ⭔ ${prefix}*𝙲𝙴𝙺𝙰𝙿𝙸𝙺𝙴𝚈* _𝚔𝚑𝚞𝚜𝚞𝚜 𝚘𝚠𝚗𝚎𝚛_
    ⭔ ${prefix}*𝙸𝙽𝙵𝙾𝙶𝙴𝙼𝙿𝙰* _𝚒𝚗𝚏𝚘 𝚐𝚎𝚖𝚙𝚊 𝚝𝚎𝚛𝚔𝚒𝚗𝚒_
    ⭔ ${prefix}*𝙲𝙴𝙺𝙺𝙾𝙳𝙴𝙿𝙾𝚂* _𝚖𝚊𝚜𝚞𝚔𝚔𝚊𝚗 𝚗𝚊𝚖𝚊 𝚔𝚊𝚋𝚞𝚙𝚊𝚝𝚎𝚗_
    ⭔ ${prefix}*𝙸𝙽𝙵𝙾𝙲𝚄𝙰𝙲𝙰* _𝚖𝚊𝚜𝚞𝚔𝚔𝚊𝚗 𝚗𝚊𝚖𝚊 𝚔𝚊𝚋𝚞𝚙𝚊𝚝𝚎𝚗_
	⭔ ${prefix}*𝙰𝙸* _𝚖𝚊𝚜𝚞𝚔𝚔𝚊𝚗 𝚝𝚎𝚡𝚝_

    ‣‣‣ *𝙴𝙳𝚄𝙲𝙰𝚃𝙸𝙾𝙽 𝙼𝙴𝙽𝚄* ‣‣‣

    ⭔ ${prefix}*𝙱𝚁𝙰𝙸𝙽𝙻𝚈* _𝚊𝚙𝚊 𝚢𝚊𝚗𝚐 𝚖𝚊𝚞 𝚍𝚒𝚌𝚊𝚛𝚒_
    ⭔ ${prefix}*𝚁𝙾𝙱𝙾𝙶𝚄𝚁𝚄* _𝚊𝚙𝚊 𝚢𝚊𝚗𝚐 𝚖𝚊𝚞 𝚍𝚒𝚌𝚊𝚛𝚒_
    ⭔ ${prefix}*𝚆𝙸𝙺𝙸𝙿𝙴𝙳𝙸𝙰* _𝚊𝚙𝚊 𝚢𝚊𝚗𝚐 𝚖𝚊𝚞 𝚍𝚒𝚌𝚊𝚛𝚒_
    ${readmore}
    
    ‣‣‣ *𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄* ‣‣‣

    ⭔ ${prefix}*𝚃𝙴𝙱𝙰𝙺 𝙶𝙰𝙼𝙱𝙰𝚁*
    ⭔ ${prefix}*𝚃𝙴𝙱𝙰𝙺 𝙰𝚂𝙰𝙷𝙾𝚃𝙰𝙺*
    ⭔ ${prefix}*𝚃𝙴𝙱𝙰𝙺 𝙺𝙰𝚃𝙰*
    ⭔ ${prefix}*𝚃𝙴𝙱𝙰𝙺 𝙺𝙰𝙻𝙸𝙼𝙰𝚃*
    ⭔ ${prefix}*𝚃𝙴𝙱𝙰𝙺 𝙺𝙸𝙼𝙸𝙰*
    ⭔ ${prefix}*𝚃𝙴𝙱𝙰𝙺 𝚂𝚄𝚂𝚄𝙽𝙺𝙰𝚃𝙰*
    ⭔ ${prefix}*𝚃𝙴𝙱𝙰𝙺 𝚃𝙴𝙺𝙰𝚃𝙴𝙺𝙸*
    ⭔ ${prefix}*𝚃𝙴𝙱𝙰𝙺 𝚂𝙸𝙰𝙿𝙰𝙺𝙰𝙷𝙰𝙺𝚄*
    ⭔ ${prefix}*𝚃𝙴𝙱𝙰𝙺 𝙱𝙴𝙽𝙳𝙴𝚁𝙰*
    ⭔ ${prefix}*𝚃𝙴𝙱𝙰𝙺 𝙻𝙸𝚁𝙸𝙺*
    ⭔ ${prefix}*𝙺𝚄𝙸𝚂𝙼𝙰𝚃𝙷*

    ‣‣‣ *𝙶𝚁𝙾𝚄𝙿 𝙼𝙰𝙽𝙰𝙶𝙴* ‣‣‣

    ⭔ ${prefix}*𝙺𝙸𝙲𝙺* _𝚝𝚊𝚐 𝚞𝚜𝚎𝚛_
    ⭔ ${prefix}*𝙰𝙳𝙳* _𝚝𝚊𝚐 𝚞𝚜𝚎𝚛_
    ⭔ ${prefix}*𝙿𝚁𝙾𝙼𝙾𝚃𝙴* _𝚝𝚊𝚐 𝚞𝚜𝚎𝚛_
    ⭔ ${prefix}*𝙳𝙴𝙼𝙾𝚃𝙴* _𝚝𝚊𝚐 𝚞𝚜𝚎𝚛_
    ⭔ ${prefix}*𝚂𝙴𝚃𝙽𝙰𝙼𝙴* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝚂𝙴𝚃𝙳𝙴𝚂𝙲* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝚂𝙴𝚃𝙿𝙿𝙶𝙲* _𝚛𝚎𝚙𝚕𝚢/𝚞𝚙 𝚒𝚖𝚐_
    ⭔ ${prefix}*𝚃𝙰𝙶𝙰𝙻𝙻* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙷𝙸𝙳𝙴𝚃𝙰𝙶* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺* _𝚘𝚗/𝚘𝚏𝚏_
    ⭔ ${prefix}*𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚈𝚃* _𝚘𝚗/𝚘𝚏𝚏_
    ⭔ ${prefix}*𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚃𝚃* _𝚘𝚗/𝚘𝚏𝚏_
    ⭔ ${prefix}*𝙶𝚁𝙾𝚄𝙿* _𝚘𝚙𝚎𝚗/𝚌𝚕𝚘𝚜𝚎_
    ⭔ ${prefix}*𝙴𝙳𝙸𝚃𝙸𝙽𝙵𝙾*
    ⭔ ${prefix}*𝙼𝚄𝚃𝙴𝙶𝙲*
    ⭔ ${prefix}*𝙻𝙸𝙽𝙺𝙶𝙲*
    ⭔ ${prefix}*𝚁𝙴𝚅𝙾𝙺𝙴*
    ⭔ ${prefix}*𝙻𝙸𝚂𝚃𝙾𝙽* 

    ‣‣‣ *𝚃𝙴𝚇𝚃 𝙼𝙴𝙽𝚄* ‣‣‣

    ⭔ ${prefix}*𝙲𝙴𝚁𝙿𝙴𝙽*
    ⭔ ${prefix}*𝙵𝙰𝙺𝚃𝙰𝚄𝙽𝙸𝙺*
    ⭔ ${prefix}*𝙽𝙰𝙼𝙰𝚁𝙰𝙽𝙳𝙾𝙼*
    ⭔ ${prefix}*𝙺𝙰𝚃𝙰𝙱𝙸𝙹𝙰𝙺*
    ⭔ ${prefix}*𝙺𝙰𝚃𝙰𝙱𝚄𝙲𝙸𝙽*
    ⭔ ${prefix}*𝙿𝙰𝙽𝚃𝚄𝙽* 

    ‣‣‣ *𝙼𝙰𝙸𝙽 𝙼𝙴𝙽𝚄* ‣‣‣

    ⭔ ${prefix}*𝙾𝚆𝙽𝙴𝚁*
    ⭔ ${prefix}*𝚂𝙿𝙴𝙴𝙳*
    ⭔ ${prefix}*𝙼𝙴𝙽𝚄*
    ⭔ ${prefix}*𝚂𝙲𝚁𝙸𝙿𝚃*
    ⭔ ${prefix}*𝚃𝚀𝚃𝙾*
    ⭔ ${prefix}*𝚁𝚄𝙽𝚃𝙸𝙼𝙴*
    ⭔ ${prefix}*𝚂𝙲𝚁𝙸𝙿𝚃*
    ⭔ ${prefix}*𝙲𝙴𝙺𝙻𝙸𝙼𝙸𝚃*
    ⭔ ${prefix}*𝙱𝚄𝚈𝙿𝚁𝙴𝙼*

    ‣‣‣ *𝙿𝚁𝙸𝙼𝙱𝙾𝙽 𝙼𝙴𝙽𝚄* ‣‣‣

    ⭔ ${prefix}*𝙰𝚁𝚃𝙸𝙼𝙸𝙼𝙿𝙸*	
    ⭔ ${prefix}*𝙰𝚁𝚃𝙸𝙽𝙰𝙼𝙰*
    ⭔ ${prefix}*𝚂𝚄𝙰𝙼𝙸𝙸𝚂𝚃𝚁𝙸*
    ⭔ ${prefix}*𝚁𝙰𝙼𝙰𝙻𝙲𝙸𝙽𝚃𝙰*
    ⭔ ${prefix}*𝙿𝙰𝚂𝙰𝙽𝙶𝙰𝙽*
    ⭔ ${prefix}*𝚁𝙴𝚉𝙴𝙺𝙸*
    ⭔ ${prefix}*𝚆𝙴𝚃𝙾𝙽*
    ⭔ ${prefix}*𝙺𝙰𝚁𝙰𝙺𝚃𝙴𝚁*
    ⭔ ${prefix}*𝚂𝙷𝙸𝙾*

    ‣‣‣ *𝙸𝚂𝙻𝙰𝙼𝙸 𝙼𝙴𝙽𝚄* ‣‣‣

    ⭔ ${prefix}*𝙰𝚂𝙼𝙰𝚄𝙻𝙷𝚄𝚂𝙽𝙰*
    ⭔ ${prefix}*𝙰𝙻𝚀𝚄𝚁𝙰𝙽𝙰𝚄𝙳𝙸𝙾*
    ⭔ ${prefix}*𝙹𝙰𝙳𝚆𝙰𝙻𝚂𝙾𝙻𝙰𝚃*
    ⭔ ${prefix}*𝙺𝙸𝚂𝙰𝙷𝙽𝙰𝙱𝙸*
    ⭔ ${prefix}*𝙻𝙸𝚂𝚃𝚂𝚄𝚁𝙰𝙷*
    ⭔ ${prefix}*𝙰𝙻𝚀𝚄𝚁𝙰𝙽*

‣‣‣ *𝙸𝙼𝙰𝙶𝙴 𝙼𝙰𝙺𝙴𝚁* ‣‣‣

    ⭔ .*𝚃𝙾𝙻𝙾𝙻𝚂𝙴𝚁𝚃𝙸𝙵𝙸𝙺𝙰𝚃*
    ⭔ .*𝙱𝚄𝙲𝙸𝙽𝚂𝙴𝚁𝚃𝙸𝙵𝙸𝙺𝙰𝚃*
    ⭔ .*𝙿𝙰𝙲𝙰𝚁𝚂𝙴𝚁𝚃𝙸𝙵𝙸𝙺𝙰𝚃*
    ⭔ .*𝙰𝚃𝚃𝙿*
    ⭔ .*𝚀𝙲*

‣‣‣ *𝙰𝚂𝚄𝙿𝙰𝙽 𝙼𝙴𝙽𝚄* ‣‣‣

    ⭔ .*𝙲𝙴𝙲𝙰𝙽*
    ⭔ .*𝙲𝙷𝙸𝙽𝙰*
    ⭔ .*𝙲𝙾𝙶𝙰𝙽*
    ⭔ .*𝙹𝙰𝙿𝙰𝙽*
    ⭔ .*𝙺𝙾𝚁𝙴𝙰*
    ⭔ .*𝚃𝙷𝙰𝙸𝙻𝙰𝙽𝙳*
    ⭔ .*𝚅𝙸𝙴𝚃𝙽𝙰𝙼*

‣‣‣ *𝙼𝙴𝙼𝙴 𝙼𝙴𝙽𝚄* ‣‣‣

    ⭔ .*𝙼𝙴𝙼𝙴𝙸𝙽𝙳𝙾*
    ⭔ .*𝙳𝙰𝚁𝙺𝙹𝙾𝙺𝙴*

‣‣‣ *𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝚂𝚄𝙰𝚁𝙰* ‣‣‣

    ⭔ ${prefix}*𝙵𝙰𝚂𝚃* _tag/upload audio/vn_
    ⭔ ${prefix}*𝚂𝙻𝙾𝚆* _tag/upload audio/vn_
    ⭔ ${prefix}*𝚁𝙾𝙱𝙾𝚃* _tag/upload audio/vn_
    ⭔ ${prefix}*𝚃𝚄𝙿𝙰𝙸* _tag/upload audio/vn_
    ⭔ ${prefix}*𝙱𝙻𝙾𝚆𝙽* _tag/upload audio/vn_
    ⭔ ${prefix}*𝙳𝙴𝙴𝙿* _tag/upload audio/vn_
    ⭔ ${prefix}*𝙱𝙰𝚂𝚂* _tag/upload audio/vn_

‣‣‣ *𝚂𝙴𝙰𝚁𝙲𝙷 𝙸𝙼𝙰𝙶𝙴* ‣‣‣

    ⭔ ${prefix}*𝙿𝙾𝙺𝙴𝙼𝙾𝙽* 
    ⭔ ${prefix}*𝚁𝙸𝚉𝙴* 
    ⭔ ${prefix}*𝙰𝙴𝚂𝚃𝙷𝙴𝚃𝙸𝙲* 
    ⭔ ${prefix}*𝙱𝙻𝙰𝙽𝙺𝙿𝙸𝙽𝙺* 
    ⭔ ${prefix}*𝙱𝙾𝙽𝙴𝙺𝙰* 
    ⭔ ${prefix}*𝙺𝙿𝙾𝙿* 
    ⭔ ${prefix}*𝚆𝙰𝙻𝙻𝙷𝙿*
    ⭔ ${prefix}*𝙼𝙾𝚄𝙽𝚃𝙰𝙸𝙽* 
    ⭔ ${prefix}*𝙿𝚁𝙾𝙶𝚁𝙰𝙼𝙸𝙽𝙶* 
    ⭔ ${prefix}*𝚃𝙴𝙲𝙷𝙽𝙾𝙻𝙾𝙶𝚈* 
    ⭔ ${prefix}*𝙲𝙾𝚄𝙿𝙻𝙴*

    ‣‣‣ *𝙼𝙰𝙺𝙴𝚁 𝙸𝙼𝙰𝙶𝙴 & 𝚃𝙴𝚇𝚃* ‣‣‣

    ⭔ ${prefix}*𝚆𝙴𝚃𝙶𝙻𝙰𝚂𝚂* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙼𝚄𝙻𝚃𝙸𝙲𝙾𝙻𝙾𝚁3𝙳* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝚆𝙰𝚃𝙴𝚁𝙲𝙾𝙻𝙾𝚁* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙻𝙸𝙶𝙷𝚃𝚃𝙴𝚇𝚃* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙷𝙾𝙻𝙾𝙶𝚁𝙰𝙼3𝙳* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙽𝙾𝙴𝙻𝚃𝙴𝚇𝚃* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙶𝙻𝙸𝚃𝚃𝙴𝚁𝙶𝙾𝙻𝙳* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙶𝙾𝙻𝙳𝙿𝙻𝙰𝚈𝙱𝚄𝚃𝚃𝙾𝙽* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝚂𝙸𝙻𝚅𝙴𝚁𝙿𝙻𝙰𝚈𝙱𝚄𝚃𝚃𝙾𝙽* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙻𝚄𝚇𝚄𝚁𝚈𝙶𝙾𝙻𝙳* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝚃𝙴𝚇𝚃𝙲𝙰𝙺𝙴* _𝚝𝚎𝚡𝚝_

‣‣‣ *𝙿𝙷𝙾𝙾𝚃𝙾 𝙾𝚇𝚈 𝙼𝙴𝙽𝚄* ‣‣‣

    ⭔ ${prefix}*𝚂𝙷𝙰𝙳𝙾𝚆* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙲𝚄𝙿* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙲𝚄𝙿1* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝚁𝙾𝙼𝙰𝙽𝙲𝙴 * _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝚂𝙼𝙾𝙺𝙴* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝚄𝙽𝙳𝙴𝚁𝙶𝚁𝙰𝚂𝚂* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙻𝙾𝚅𝙴* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙲𝙾𝙵𝙵𝙴* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝚆𝙾𝙾𝙳𝙷𝙴𝙰𝚁𝚃* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙽𝙰𝚃𝚄𝚁𝙴3𝙳* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝚄𝙽𝙳𝙴𝚁𝚆𝙰𝚃𝙴𝚁* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙵𝙻𝙰𝙼𝙼𝙸𝙽𝙶* _𝚝𝚎𝚡𝚝_

‣‣‣ *𝚃𝙴𝚇𝚃𝙿𝚁𝙾 𝙼𝙴𝙽𝚄* ‣‣‣

    ⭔ ${prefix}*𝙽𝙴𝙾𝙽* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙽𝙴𝙾𝙽𝙻𝙸𝙶𝙷𝚃* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙼𝙴𝚃𝙰𝙻𝙳𝙰𝚁𝙺* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙷𝙾𝙻𝙾𝙶𝚁𝙰𝙿𝙷𝙸𝙲* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙷𝙰𝙻𝙻𝙾𝚆𝙴𝙽* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙹𝙾𝙺𝙴𝚁𝙻𝙾𝙶𝙾* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙽𝙰𝚃𝚄𝚁𝙴𝙻𝙴𝙰𝚅𝙴𝚂* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙱𝙾𝙺𝙴𝙷* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙶𝙻𝙸𝚃𝙲𝙷* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙱𝚁𝙴𝙰𝙺𝚆𝙰𝙻𝙻* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝚁𝙾𝙰𝙳𝚆𝙰𝚁𝙽𝙸𝙽𝙶* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝚃𝙴𝚇𝚃1917* _𝚝𝚎𝚡𝚝_

‣‣‣ *ANIME 𝙼𝙴𝙽𝚄* ‣‣‣

    ⭔ ${prefix}*𝙰𝙺𝙸𝚈𝙰𝙼𝙰* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙳𝙾𝚁𝙰𝙴𝙼𝙾𝙽* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙷𝙸𝙽𝙰𝚃𝙰* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙺𝙾𝚃𝙾𝚁𝙸* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙻𝙾𝙻𝙸* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙼𝙰𝙳𝙰𝚁𝙰* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙼𝙸𝙺𝙰𝚂𝙰* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙼𝙸𝙽𝙰𝚃𝙾* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝙾𝙽𝙴𝙿𝙸𝙴𝙲𝙴* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝚂𝙰𝙺𝚄𝚁𝙰* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝚂𝙰𝚂𝚄𝙺𝙴* _𝚝𝚎𝚡𝚝_
    ⭔ ${prefix}*𝚂𝙷𝙸𝚉𝚄𝙺𝙰* _𝚝𝚎𝚡𝚝_
    *𝙼𝚎𝚗𝚞 𝚖𝚊𝚜𝚒𝚑 𝚍𝚊𝚕𝚊𝚖 𝚙𝚎𝚗𝚐𝚎𝚖𝚋𝚊𝚗𝚐𝚊𝚗, 𝙼𝚘𝚑𝚘𝚗 𝙳𝚒𝚖𝚊𝚔𝚕𝚞𝚖𝚒*
`
                conn.sendMessage(m.chat, {
                    image: fs.readFileSync('./media/menu.jpg'),
                    caption: menunya
                },
                {
                    quoted: fkontak
                })
await sleep(1000)
conn.sendMessage(m.chat, {audio: fs.readFileSync('./vnme.mp3'), ptt: true, 
seconds: 360000000,
waveform:  [
100,0,100,0,100,0,100
], 
mimetype: 'audio/mpeg'}, { quoted: m })
                break
                
                default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return newReply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return newReply(bang)
                    }
                    try {
                        newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        newReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return newReply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await newReply(evaled)
                    } catch (err) {
                        await newReply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return newReply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return newReply(err)
                        if (stdout) return newReply(stdout)
                    })
                }
                
                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }


    } catch (err) {
        console.log("Eror Di Bagian adrian.js "+util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
