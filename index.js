var telegramBot = require(`node-telegram-bot-api`);
var token = '';
var bot = new telegramBot(token, {polling: true});
bot.onText(/\/start/, (msg) => {
    let welcomeTest = `Hi There ${msg.from.first_name}(${msg.from.username})! :D\n I am Alexs Echo Bot. `
    bot.sendMessage(msg.chat.id, welcomeTest);
    });
bot.onText(/\/echo (.+)/, function(msg,match){
    //console.log(msg);
    //console.log(match);
    var chatId = msg.chat.id;
    var echo = match[1];
    bot.sendMessage(chatId,`You said: ${echo}`);
})