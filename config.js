const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables for Elite md]════════\\


global.owner = process.env.OWNER_NUMBER || '94775686166'
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Jithula:Jithula@cluster0.i9f4p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.port= process.env.PORT || 5000
global.email = 'Eboxsrilanka2009@gmail.com'
global.github = 'https://github.com/bit-x-tm/elite-md'
global.location = 'Srilanaka'
global.gurl = 'https://instagram.com/ebox@nt' // add your username
global.sudo = process.env.SUDO || '2347039570336,2348050907760'
global.devs = '2347039570336,2348050907760';
global.website = 'http://www.ebox.free.nf/?i=1' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/ad72b729bc880fa0d13f3.png'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "IZUKU;;; eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZhMWdVeUpoT080K0NmRGVhR0NoT3YvSzVTckFQMkZlQnJQTWtkWE4yQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWoydEs2YjJoV2tXR2VpTXYzazh1aTRiTE5jM0g4VndUZ1RPdUVuWVpSTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSmVkdkJmNVpoMzVkNmRHZ2pDNmxtU2xoTEVSWTg4UXROTWlqSSs1K0dRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwanVsVVNyNVk0N3EwNmlseFR3V2VsZ1hkTjl6SlViRjk1TGs5MGNHeFRVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVBWXpQbDRFTUVUR090NjZ1eXRTeGNUTkc4ZXRBODJJai9JM3UvazkzVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImU3OWFkaHJSRFlaVWFIeHBMWTJhQ2FnREkwRFRxTGpLdGM5bzN1RDc4aGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkNHQSsxeEtYNCs0UG1SYm5QbStxTGpoQTczb1dCME9NcTNtYzZXODFraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1RmVVA3bWhiWFFseW1qbktBSmxzZW1kQ253RDR0YmxpMDU4Z2ZuVXZBMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlNYnJXNTBFK2pDUVFWVyszWTBweXVsTVBMK01KOFVIUDlpUEdwSlpya3Ezd0tsaCtNT3V0djVCaUxBbm8ycDRUSFFUL3pnTHpwRC8vMU1yVFIzOUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6Ijh4RkhoYWxhSThpRS9rQkd3SElTRVRWWVRaSWhjUzU2REZXTHRJRlNvQjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjoxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0Yk9yUHZaa1Q0R2tFMmVxUjlVY1FnIiwicGhvbmVJZCI6IjY4NTVmYmMwLWI5MzYtNGU0Yy1hOGY0LWJlNWJhNWI0MTg2NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzWDhEd3dWeWxPZzlheDRQV1NRU1pkUXpCRTQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1LMUQ1VlVtbnFkZWY1SklzK1ZjdWljc29VUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05PbDNPWUJFTXZsNzdvR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZyMytuRXRKTEUrNlJJYWZRdFZjdmN2TlBjR1NGUVRlcnhKMzBiZzBheVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkEyN0NUVTk3Y2xlS1hpcDhyOE0vTklqU2xUckNVQVZ1cDJTWVVPMzdLUHN2dFdaaEdxVlFlbXNVUmhPMEYrTVQwZmNrbjBNWUpCKzQ1SVdRc0EzMEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHVG5XdVI0K01hejluMVlNVzdCUE9ZYTBBdkt5aFlNT3JyR3NWcDNNSi9CWGlGZU01cmxrNGVnb3ZnYmhFRWp6TWp1R0Fmak1GcmFVblRURjNCb2hEdz09In0sIm1lIjp7ImlkIjoiOTQ3NzU2ODYxNjY6NjZAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzU2ODYxNjY6NjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmE5L3B4TFNTeFB1a1NHbjBMVlhMM0x6VDNCa2hVRTNxOFNkOUc0TkdzayJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDA3OTE4MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBM0YifQ==",
  botname:   process.env.BOT_NAME === undefined ? 'Elite BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Nethindu ' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'No name' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'ELITE-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
  autosendstatus:  process.env.STATUS_SENDER === undefined ? false : process.env.STATUS_SENDER,
  anticall:  process.env.ANTI_CALL === undefined ? false : process.env.ANTI_CALL,
  recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'ADAM',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
