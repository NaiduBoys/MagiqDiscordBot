const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('message', function(message){
    if(message.content == 'Am I good at minecraft?')
    {
        message.reply('Maybe but @『 Ｒｏｘｉｕｎ 』#5546 is the best')
    }
});

bot.on('message', function(message){
    if(message.content == '/ip')
    {
        message.reply('The Official Magiq Sever ip is magiqserver.aternos.me')
    }
});

bot.on('message', function(message){
    if(message.content == '/skywars')
    {
        message.reply('The SkyWars Leaderboard for this week (Mon 29th - 4th Feb) are 1st Roxiun (@『 Ｒｏｘｉｕｎ 』#5546 ) 2nd Logxiun (@Logxiun#5567 ) and 3rd YNaiduboy (N/A)')
    }
});

bot.on('message', function(message){
    if(message.content == '/deadchat')
    {
        const embed = new Discord.RichEmbed()
            /*
            * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
            */
            .setColor(0x00AE86)
            .setFooter("Made with ❤︎ by『 Ｒｏｘｉｕｎ 』#5546  ")
            .setImage("https://i.imgur.com/0WjrVUN.png")
            /*
            * Takes a Date object, defaults to current date.
             */
            .setTimestamp()
            /*
            * Inline fields may not display as inline if the thumbnail and/or image is too big.
            */
            /*
            * Blank field, useful to create some space.
            */
 
            message.channel.send({embed});
    }
});

bot.on('message', function(message){
    if(message.content == '/helproles')
    {
        const embed = new Discord.RichEmbed()
            /*
            * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
            */
            .setColor(0x00AE86)
            .setDescription("**To get some roles go to #self-roles (See the gif for how to do it).**")
            .setFooter("Made with ❤︎ by『 Ｒｏｘｉｕｎ 』#5546  ")
            .setImage("https://i.gyazo.com/be0de2e58f6f9b6307b72b90818d9e93.gif")
            /*
            * Takes a Date object, defaults to current date.
             */
            .setTimestamp()
            /*
            * Inline fields may not display as inline if the thumbnail and/or image is too big.
            */
            /*
            * Blank field, useful to create some space.
            */
 
            message.channel.send({embed});
    }
});

bot.on('message', function(message){
    if(message.content == '/help')
    {
        const embed = new Discord.RichEmbed()
            /*
            * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
            */
            .setColor(0x00AE86)
            .setDescription("**Help Commands.**")
            .addField("__Roles__", "/helproles.", true)
            .addField("__Staff Assitance__", "/ticket (in #ticket-commands).", true)
            .setFooter("Made with ❤︎ by『 Ｒｏｘｉｕｎ 』#5546  ")
            /*
            * Takes a Date object, defaults to current date.
             */
            .setTimestamp()
            /*
            * Inline fields may not display as inline if the thumbnail and/or image is too big.
            */
            /*
            * Blank field, useful to create some space.
            */
 
            message.channel.send({embed});
    }
});

bot.login('NTM5MjIxOTM1NTIzODg5MTUy.Dy_l3g.jmEieOtke9w1BE5tNrQFWyOynA8');