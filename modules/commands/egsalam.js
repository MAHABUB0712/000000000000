const fs = require("fs");
module.exports.config = {
	name: "salam",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "salam",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Walaikumussalam")==0 || event.body.indexOf("আসসালামু আলাইকুম")==0 || event.body.indexOf("Assalamualaikum")==0 || event.body.indexOf("Salam")==0) {
		var msg = {
				body: "𝐒𝐀𝐋𝐀𝐌 𝐊𝐎𝐋𝐈𝐙𝐀🖤🥀 \n\n\n\n𝐍𝐀𝐘𝐄𝐌_𝐊𝐈𝐍𝐆🖤🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/kgfsalam.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }