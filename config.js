const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'aOgQmRAS#RDERdY4BC68TWKRW2Bz1T0pbTbhP4Ix9N6RBvy9GjVs',
    ALIVE_IMG: process.env.ALIVE_IMG || "https://iili.io/3okmx3B.jpg", // Img Url
    ALIVE_MSG: process.env.ALIVE_MSG || "hi  am alo", // Alive msg
};