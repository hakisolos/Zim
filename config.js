//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZLcVpJUitXT24rYndINktqZ241TlBMS2ZiZ3lZS0FUQmRYeEtEWUlVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXNMR3pYSzcxV2w4WVFMTVVva1MrM1NZU3hrSnBYQXlDalJXTWs3SzV4cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TjJ6VXRMV0ZBOElnSG12U0k5WmtqNXNwbkxyM3VQQWZCYnNOeEJnVFVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQjdoNXAydHc0eDNJTTZqczdSeFZPU2s2d1drUUNpNXQ0VVlMNEptbGlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdKNHEzQWxxdzUvbWZPbFFZcUNtNGttbEtHWi9hSXVQRERmNFRORHFSSDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InA0bjkrSnpZT240cUlZdDQwMVBaSW9DdzhDeldTSFAwTHFlNGt6Mm1KMXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1ZT3FYaUJZd3RqYVc4aXlCYUxmck03bzVJR1ZWZGNVQ1lUQ2F6MkNFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlFadGZENUtiY3hJd2RPL1FNR24xQWF6c2lLR3JtSmxENlVmU3U2alp4cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFkKzI3dTFTcTNEMEgvUUQxVzc0VC85L3BvcjUzU1M1aDc2bXg3RC9EcXkzcE5acTkwSVh5U2pEYXA5SHV2aGErS2sxSGR5eExzTE9Cb2JYZVNUNml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJkWU1YWitFdTJIQSsya0xiTnh3V1RPR0g4R3dLRERueFJLQk53dEh1c3VjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJERWhJakhDdVNwS1FBR29vd09SUzNBIiwicGhvbmVJZCI6IjY5OGMzZGNjLTdkMDEtNGY4YS1iNDhjLTE5ZDFlZGJjMGQ5ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCaHpVa3dGVjQvcTQ3a1hHeW1sRlFmUW1kM0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1dWUWVZYUZ4dUdPS0ptODNSaFExYUlyc1dFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZTRUxYQzFZIiwibWUiOnsiaWQiOiIyNjM3MTY0MDEwNjA6NzlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTGVvbWFuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPRFI3dVlDRUwzMHE3b0dHQmtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJEU2VJR05Kd21nR3RJZHl1Y0hwODhtaTVGL2NSQ0JBZ01XaDJ0VnVTMFIwPSIsImFjY291bnRTaWduYXR1cmUiOiJ1Q1ljcmVvdnhwbXA1aXFHZnNGNGo5UGppbVY0WHV4MElOK2R2SG1XcjkxclBIeVAwYXFvWWVIaXpiUHR2bWZyUWJ1MDhOZGZra0dPa1JaVlRWcWVBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVjdESWpiOHoyVHVTSXZnT2JVMnBpaHN1TVBpYTY5OG5BbWNYR3l2OWduRGgrUnJJRU9ob0VJUE1qTS9sT0d0dmE4dm5HbUlRNkNCYmliN1ZnM2FXZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTY0MDEwNjA6NzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUTBuaUJqU2NKb0JyU0hjcm5CNmZQSm91UmYzRVFnUUlERm9kclZia3RFZCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjk2Njk4NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNNG0ifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
