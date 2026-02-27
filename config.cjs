const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0dmZHZlWm0zaFM1dy9oQWxVNVVzdmtQdUYrTkdDN1ZVanJSUnFjWlRuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUhaWFpFamFoRkZKRHdVMWxkSWIwZFcvL01XaExiQ2lOZUk0cnM4VmJpMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTFdYdFdzYzNGczNpaldNaWxsbmdUQWFhUWFxeThIQ1JnaTVPa0Q1cVhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMdWNPYzJLZTBJNnN2WDVpTllkampVaWo2QXVrWUNFQ3BvdllVU0xKQzNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllQaUlQMXZ3WXNjRkNSdnBIVitxYW1kY0orNjM3SWhmQ3NLR2M2eTJFRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhYWmtDNS9IVFB3dmJIZUU4ZWlGTzZaMnFtN3ZJaldYeTZmNXpjZnpnblk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSURwajZ2Z2pyZ3NROTVkZmcreFdxY2YvNkxPblVwdktNTkdyckxQalJWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3J6S1hLdEl0Kzg2Z3FCdTlVUUZ3YktVQS9SOHBuRXZJY2o4dVl0dzZRTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV4QmtrdmNSV1lTdlAvN1VVd2cyeXJ4NTlBUTliVmtiU0liaTdWdnZwWmgrUWpLdUxwVUhSVk1oWTFETlBFK1kxNk9wZGZLeVVNMkdVd1RhaEo5VmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6Iks3Vk4zSmc4Uk9pcHF6aXFGakpITnNSc3h6WERNMGVZalo3Q0o3aVZ1V009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkdQNlNYMVpOIiwibWUiOnsiaWQiOiIyMzc2NDA0NDI3NTk6N0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE3MTMyNjk1MDA4MDczNzo3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGl0ellzR0VKTzNnODBHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZVlGdXBpaHhoZHc0bnFGc3JWOXRWeW8xL1U4VllzMWtQYVlpdnVOK2lGVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUlJtNWNDbHprK29CdkxlendsbVFwVjZUTmlYaHROdG9xZHlTa0d1RkFXMUFGRTZnTE5Yd1MwK3FjL21FaTJYSHVGVHE0STB2WC8xTHJwQjA2VDRUQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IklnTVBDSGRJb1pTZ0xiMFhJWSszZGRraHJ5dDVlL1l0ODNjN09WbmdNdVZRc2FXbXdsb0JxZEtjUG1OcEtick11VWFVRUlveXhtcFIxelVRczVFWmlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjQwNDQyNzU5OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWG1CYnFZb2NZWGNPSjZoYksxZmJWY3FOZjFQRldMTlpEMm1JcjdqZm9oViJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzcyMTQ5NjYxLCJsYXN0UHJvcEhhc2giOiJubTNCYiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRmwzIn0=
    ",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "237640442759",
  "OWNER_NAME": process.env.OWNER_NAME || "Twilight Shadow",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
