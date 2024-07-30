const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349035471427";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_47_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcwLFxuICAgICAgICA5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NixcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICA2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMTM5LFxuICAgICAgICA1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzksXG4gICAgICAgIDk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMCxcbiAgICAgICAgNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBU1QvQ1Awc0xoL3R4TVZyL3hqbkU4TE93ZVdCcC95TjdUK0QvNmoxYzhvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMzU0NzE0MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRCMTU4MTY4OTBEQTc4Nzc0OTY4NTU3MzVGRDQ5REIzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjM1MDg0MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTTUF4ZVdrWlE3bUp1ejFPRHAxT293XCIsXG4gIFwicGhvbmVJZFwiOiBcIjhhOTMxZmU3LTBjNmQtNDhkNS1hZGRhLTcyYTYzYmYxNmU0YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAzLFxuICAgICAgODgsXG4gICAgICAxNzgsXG4gICAgICA4MSxcbiAgICAgIDM1LFxuICAgICAgMjEzLFxuICAgICAgMTE3LFxuICAgICAgOTEsXG4gICAgICAyNDMsXG4gICAgICA3OCxcbiAgICAgIDEzMyxcbiAgICAgIDUzLFxuICAgICAgMjUyLFxuICAgICAgNTQsXG4gICAgICA5NCxcbiAgICAgIDIwNyxcbiAgICAgIDE0MSxcbiAgICAgIDMwLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICAyMDgsXG4gICAgICAxMDcsXG4gICAgICAxNTQsXG4gICAgICAxMzMsXG4gICAgICAxNTksXG4gICAgICAxMjQsXG4gICAgICA5NCxcbiAgICAgIDk3LFxuICAgICAgOTgsXG4gICAgICA0OSxcbiAgICAgIDEyMSxcbiAgICAgIDIwMixcbiAgICAgIDM0LFxuICAgICAgMTE0LFxuICAgICAgMTAyLFxuICAgICAgMTA2LFxuICAgICAgMjQsXG4gICAgICA0LFxuICAgICAgMTkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxGM1ZUQVA3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM1NDcxNDI3OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTW92ZVwiLFxuICAgIFwibGlkXCI6IFwiNDQ2ODkzMDI1NDAzNjY6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSks3N01FR0VPLzVvN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVSkpuZy9vUHVHL1oxeDcyd3JTUnd6enFvZnRxSW5KOWRhK2xIR2YzdjFnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkM4Slk4SE9lWTNCY1JyNUNFQ3hYcjViYzg4N3E2VVAxcmo4czQ5N000Wnd3aEhDeUlhZUFTN1VCU1lZSXBrNTdYaysvUE11WGZhUUozT1V6elF6ZEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkIvTGVhZEx6QUFpRHV4NncyOWlGbXFKQm0xWkRBdHhhVnY2OVRSbWc1MW5tdlNBSUc2Zk51K253NEdkejJJdCtaMUlJVjdpWGJGeVMwWEtRRkhqWWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzU0NzE0Mjc6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjM1MDgzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFDb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUNvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMTZYekNTUFA1WjVIVFpiaHI2OGRFem5RU3VBOTNkU2pkMDNWb01WQ3VKbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzQ4NzA0NjU3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
