module.exports.config = {
  name: "goiadmin2",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100075122837809","100004160441215") {
    var aid = ["100075122837809","100004160441215"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = [",আর পারলামনা bot bot করতে করতে এখন মেনশন দেয়া শুরু করছে 🙂",  "আছি আছি এতো মেনশন দিতে হবেনা😌", " দারা তোদের একটা ব্যবস্হা নিতে হবে খালি ডাকে আর ডাকে 🥲", "আবে সালা তোরা নেকামি করবি আর আমাকে মেনশন দিবি কেন, আমার বসকে মেনশন দে😌", "Assalamu Walaikum আপনি জদি মে হন তাহলে বেশী করে ইমরান বসকে মেনশন দেন আমাকে নাহ ওকে🥵🙈", " তুই আর কতো জালাবি একটু বলবি🥵🥰😍😏"," আমি BOT,, IMRAN BOSS এর সাথে  free fire খেলে আমাকে মেনশন দিবা না😡😡😡"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
                 }