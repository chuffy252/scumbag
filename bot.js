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
    if(message.content.toLowerCase().substring(0, 17) === 'i love you chubot') {
        if(message.author.username === 'Chuffy') {
            message.reply('i love u chu');
        }
        else {
            message.reply('shut the fuck up');
        }
    }
});

var http = require("http");
setInterval(function() {
    http.get("https://chuffy-bot.herokuapp.com/");
}, 300000);

client.login(process.env.BOT_TOKEN);
