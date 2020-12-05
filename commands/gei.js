const gei = Math.floor(Math.random() * 100) + 0;
const Discord = require("discord.js");

module.exports = {
    name: "gei",
    description: "Este es el ejemplo para no escribir",
    execute(message, args){
        let mentionedMember = message.mentions.members.first();
        let mentionedUser = message.mentions.users.first();

        const embed = new Discord.MessageEmbed()
            .setTitle(`${mentionedUser.username} Es un ${gei}% gei :rainbow_flag:`)
            .setColor('GRAY')
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp();
        message.channel.send(embed);
        }
        
    }
