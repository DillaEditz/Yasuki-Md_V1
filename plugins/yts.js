const { cmd } = require('../command');
const yts = require('yt-search');
const { fetchJson } = require('../lib/functions');

// Helper function to format views
const formatViews = (views) => {
    if (views >= 1_000_000_000) {
        return `${(views / 1_000_000_000).toFixed(1)}B`;
    } else if (views >= 1_000_000) {
        return `${(views / 1_000_000).toFixed(1)}M`;
    } else if (views >= 1_000) {
        return `${(views / 1_000).toFixed(1)}K`;
    } else {
        return views.toString();
    }
};

// URL for the thumbnail image
const thumbnailUrl = 'https://telegra.ph/file/3653d1cd025076c0559d5.jpg';



//========= YTS Search Command for 100 Videos =========//

cmd({
    pattern: "yts",
    alias: ["yta","ytv","yt"],
    desc: "Search and display up to 100 YouTube video details",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("Please type a Name or Url... 🤖");

        const search = await yts(q);
        const videos = search.videos.slice(0, 5); // Get only the first 100 videos

        if (videos.length === 0) return reply("No videos found for your query.");

        let message = `👹️ *_Chuti_Yakshani-Md_* 👹️ *YT Search 🎥*\n\n`;

        videos.forEach((data, index) => {
            message += `*No - ${index + 1} ⤵*\n\n`;
            message += `🎶 *𝗧𝗶𝘁𝗹𝗲*: _${data.title}_\n\n`;
            message += `👤 *𝗖𝗵𝗮𝗻𝗻𝗲𝗹*: _${data.author.name}_\n\n`;
            message += `📝 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻*: _${data.description}_\n\n`;
            message += `⏳ *𝗧𝗶𝗺𝗲*: _${data.timestamp}_\n\n`;
            message += `⏱️ *𝗔𝗴𝗼*: _${data.ago}_\n\n`;
            message += `👁️‍🗨️ *𝗩𝗶𝗲𝘄𝘀*: _${formatViews(data.views)}_\n\n`;
            message += `🔗 *𝗟𝗶𝗻𝗸*: ${data.url}\n\n`;
        });
        message += `👹️ *_Chuti_Yakshani-Md Yt DL_* 👹️\n\n`;
        message += `*𝗛𝗼𝘄 𝗧𝗼 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗩𝗶𝗱𝗲𝗼 𝗢𝗿 𝗔𝘂𝗱𝗶𝗼 ✅*\n\n`;
        message += `Example -  .video (enter video title)\n`;
        message += `Example - .song (enter video title)\n\n`;
        message += `♻️ *~Powered by Chuti_Yakshani-MD~* ♻️`;

        // Send the video details with the image
        await conn.sendMessage(from, { image: { url: thumbnailUrl }, caption: message }, { quoted: mek });

    
    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
