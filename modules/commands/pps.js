module.exports.config = {
    name: "bolod",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "...",
    description: "5 বারের জন্য ক্রমাগত বন্ধুর ট্যাগ ট্যাগ করুন\nসেই ব্যক্তিকে আত্মা কলিং বলা যেতে পারে",
    commandCategory: "othre",
    usages: " please @mention",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("আপনি যাকে বলদ বানাতে চান এমন 1 জনকে @ম্যানশন করতে হবে", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("....///-- আমি আমার বস ইমরান এর পক্ষো থেকে বলতাছি, ☺️💝🌺...//");
setTimeout(() => {a({body: "আবে সালা বলদ " + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "সালা গাজা খোর ইমরান কে গালী দেও😾😼" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "সালা বদনা চোরের নাতি😼😌" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "‎সালা আবাল 🙂\n\ক সালা ফন্নর নাতি " + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "সালা আবাল গরু\n\n বোকা চো★★দা " + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "সালা হিজলা,\n\n সালার পো তোর চেয়ে হিজলা মনে হয় ভালো " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "তোর কতো বড় সাহস ইমরান বসকে গালী দেও😾 " + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "‎তোকে দেখলে আফছুছ লাগে তুই হিজলা কেন" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "টমেটো লাল কাঁচা মরিচ ঝাল তুই হিজলা থাকবি চিরকাল  " + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "তোর লজ্জা থাকে তাহলে আর ইমরান কে গালী দিবি নাহ !!💚 ।" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "সালা বলদ চোর ⚜— -!!-।" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "༉༎༉সালা তুই নিজে একটা বলদ চুরি করছো ও একটা বলদ" + " " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: "কিরে হিজলা লজ্জা আছে তোর" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("~🖤সালা তোরে এমন ঔষধ দিবে এক বারে বুঝো ই তো")}, 39000);
setTimeout(() =>{a("ভালো হইয়া জা ইমরান তোর বস লাগে ঠিক (সমাপ্ত) ")}, 47000);



  
}