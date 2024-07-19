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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347037543371";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_33_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDgxLFxuICAgICAgICAxNzksXG4gICAgICAgIDY3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM5LFxuICAgICAgICA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICA0NixcbiAgICAgICAgMTc2LFxuICAgICAgICA4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NixcbiAgICAgICAgMTA1LFxuICAgICAgICA0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjksXG4gICAgICAgIDY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOCxcbiAgICAgICAgODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDg0LFxuICAgICAgICA5NixcbiAgICAgICAgMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NixcbiAgICAgICAgNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVwK3J0MW0wZ0p5U1J4VjRqNGQwNi94WUlCY3VQdkJyYnVqT2hzcTRSYXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAzNzU0MzM3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTRBMzQyREQ4MUE4QTMwNEQ2OTc0MzgwNThFQzk4QzRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzYzNTg5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVrck5HeHBfUnNXcl9fTG55amlfSXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2EwOThiZGYtNjk3OC00NzFlLTk2MjEtMjYwZTZiYTdjYWRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMTgwLFxuICAgICAgMjM2LFxuICAgICAgMjI1LFxuICAgICAgMjEyLFxuICAgICAgNTAsXG4gICAgICAxNjYsXG4gICAgICAyMTksXG4gICAgICA3LFxuICAgICAgMjAxLFxuICAgICAgOTcsXG4gICAgICA2MCxcbiAgICAgIDQ4LFxuICAgICAgMTk4LFxuICAgICAgMTIzLFxuICAgICAgMTk4LFxuICAgICAgMTE3LFxuICAgICAgMjI2LFxuICAgICAgMjMsXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICA4MCxcbiAgICAgIDE0MixcbiAgICAgIDU5LFxuICAgICAgNjIsXG4gICAgICAyMzUsXG4gICAgICAxOTMsXG4gICAgICAzOSxcbiAgICAgIDIzOCxcbiAgICAgIDQ3LFxuICAgICAgMzMsXG4gICAgICAxOTYsXG4gICAgICAxMjEsXG4gICAgICAxNDcsXG4gICAgICAxMDYsXG4gICAgICAyMzUsXG4gICAgICA0NCxcbiAgICAgIDQyLFxuICAgICAgMTEzLFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0tWWDVTWDRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMzc1NDMzNzE6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzQyMzQ1MTY3NjY3Nzk6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPVGY1UE1HRVAzWTU3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFJTE8vNmJhL2Ftb2ludFhLTGxra2JMYlBNTnZ4QkZRTjVrRlNEQkdnalU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZGt5cCtWaXUyTVBDZ2NlVmVhUEZGMWJEWi94SlVrNWVtcUtNQURSU3cvcnpwWHhuZllpL01QTDBxSnpMc3Nnemk1dnhCTlA4cWlqd3FRTkFoUjFkQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMXZicHRyc0hlVkJlSkIwVTZJbEhSVmVvVTIwMTZMMXRidWRybEo2UWc1MGJTOTNXV3FrUmk5UEN6Y1J0UDlvVDVSdnJRVWNBN09tMVhlc3Q0YS84aFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzNzU0MzM3MToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzYzNTg0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
