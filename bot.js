const Discord = require('discord.js');
const client = new Discord.Client();
var sent = false;

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
            message.reply('ya one sorreh fackin twat arent ya mate ');
    }
});

client.on('message', message => {
    if(message.content.toLowerCase().substring(0, 5) === '!play') {
            message.reply('ya sorry cunt, only the lorde scumbag can play musics  ');
    }
});

client.on('message', message => {
    if(message.attachments) {
        if(sent === false)
        {
            message.reply('is that a picture of you mate? golly fuckin eh you are uglier than i thought ya fackin prick');
            sent = true;
        }
    }
});

var http = require("http");
setInterval(function() {
    http.get("https://chuffy-bot.herokuapp.com/");
}, 300000);

client.login(process.env.BOT_TOKEN);
