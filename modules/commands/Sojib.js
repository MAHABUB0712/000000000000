module.exports.config = {
    name: "birthday",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "...",
    description: "5 বারের জন্য ক্রমাগত বন্ধুর ট্যাগ ট্যাগ করুন\nসেই ব্যক্তিকে আত্মা কলিং বলা যেতে পারে",
    commandCategory: "othre",
    usages: " please @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("আপনি কাকে উইস করতে চান এমন 1 জনকে @ম্যানশন করতে হবে", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("𝐋𝐄𝐓'𝐒 𝐆𝐎, 𝐓𝐇𝐈𝐒 𝐈𝐒 𝐆𝐎 𝐈𝐌𝐑𝐀𝐍 𝐁𝐎𝐓 ");
setTimeout(() => {a({body: "‎শুভ জন্মদিন! আশা করি আজকের এই বিশেষ দিনে প্রত্যেকটি মুহূর্ত যেন আনন্দ এবং খুশি দিয়ে ভরে ওঠে।।  😌😌" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "‎এই বিশেষ দিনে ইমরান বসের এর পক্ষ থেকে জানাই শুভ জন্মদিন!  😍.." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "‎একটি জন্মদিন একটি নতুন শুরু, একটি জন্মদিন আরেকটি সুন্দর বছরের প্রথম দিন…শুভ জন্মদিন! 🐰" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "‎আশা করি আজকের এই দিনে তোমার জীবনে অনেক হাসি এবং খুশিতে ভরে উঠুক। একটি অসাধারণ দিনের জন্য তোমাকে অনেক শুভেচ্ছা জানালাম। শুভ জন্মদিন! 💔!" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "‎আশা করি তোমার এই শুভ দিনটি কেকের মতো মিষ্টি হবে।  হ্যাপি বার্থ ডে টু ইউ " + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "‎জন্মদিন একটি নতুন বছরের মতো এবং আপনার জন্য আমার সুখ পূর্ণ একটি দুর্দান্ত বছর কামনা রইল। শুভ জন্মদিন! " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "‎আমি আশা করি আপনার সব ইচ্ছা পূরণ হবে। শুভ জন্মদিন! " + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "‎_শুভ জন্মদিন আলোকিত হোক ভবিষ্যৎ। প্রতিটা দিন কাটুক সুন্দর ভাবে।সুখ দিয়ে পরিপূর্ণ হোক জীবন।  " + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "‎সুন্দর মন প্রাণ রত্ন হােক আপনার।আগামীর প্রতিটা সময়, সূর্যদয় ও চাঁদের।আলােয় উদ্ধভাসিত হােক তোমার জীবনের প্রতিটা মুহূর্ত 🙂আনন্দময় হােক!এই শুভকামনা করি ❤❤ " + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "‎ღ__সুন্দর এই ভূবনে সুন্দরতম জীবন হোক তোর 😻🥰ღ পূরন হোক প্রতিটি স্বপ্ন প্রতিটি আশা বেচেঁ থাক হাজার বছর!!🤍🥀 ।" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "‎𝐁𝐫𝐢𝐠𝐡𝐭𝐞𝐧 𝐭𝐡𝐞 𝐟𝐮𝐭𝐮𝐫𝐞. 𝐁𝐮𝐢𝐥𝐝 𝐚 𝐛𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 𝐥𝐢𝐟𝐞. 𝐀𝐜𝐜𝐞𝐩𝐭 𝐛𝐢𝐫𝐭𝐡𝐝𝐚𝐲 𝐰𝐢𝐬𝐡𝐞𝐬  😘।" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "‎𝐖𝐢𝐬𝐡 𝐲𝐨𝐮 𝐚𝐥𝐥 𝐭𝐡𝐞 𝐛𝐞𝐬𝐭 𝐨𝐧 𝐭𝐡𝐢𝐬 𝐬𝐩𝐞𝐜𝐢𝐚𝐥 𝐦𝐨𝐦𝐞𝐧𝐭𝐬 ✋" + " " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: " ‎𝐃𝐨 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐧𝐞𝐰 𝐢𝐧 𝐭𝐡𝐞 𝐟𝐮𝐭𝐮𝐫𝐞. 𝐀𝐯𝐞𝐫𝐚𝐠𝐞 𝐠𝐨𝐨𝐝 𝐥𝐢𝐟𝐞 𝐰𝐢𝐭𝐡 𝐧𝐞𝐰 𝐨𝐧𝐞𝐬 " + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("~𝐇𝐚𝐩𝐩𝐲 𝐁𝐢𝐫𝐭𝐡𝐝𝐚𝐲 তোমার জন্য দোয়া ও ভালোবাসা রইলো বস ইমরান")}, 39000);
setTimeout(() =>{a("🥰𝐈𝐦𝐫𝐚𝐧 𝐀𝐡𝐦𝐞𝐝🥰 \n")}, 42000);



  
}