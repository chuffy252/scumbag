const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase().substring(0,6) === 'hi bot'){
        message.reply('fack off ya cunt');
    }
});

client.on('message', message => {
    if(message.content.toLowerCase().substring(0, 10) === 'i love you') {
            message.reply('ya one sorreh fuckin twat arent ya mate ');
    }
});

var http = require("http");
setInterval(function() {
    http.get("https://chuffy-bot.herokuapp.com/");
}, 300000);

client.login(process.env.BOT_TOKEN);
