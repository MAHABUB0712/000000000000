const fs = require("fs");
module.exports.config = {
	name: "💔",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "💔",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("qt")==0 || 
  event.body.indexOf("💔")==0) {
		var msg = {
				body: "কষ্ট পাইয়ো না সোনা😥🥀\nগান্টা শোনো ভালো লাগবে😅💔",
				attachment: fs.createReadStream(__dirname + `/nayan/nayan1.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😥", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }