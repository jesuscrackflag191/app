const gei = Math.floor(Math.random() * 100) + 0;
const Discord = require("discord.js");

module.exports = {
    name: "gei",
    description: "Este es el ejemplo para no escribir",
    execute(message, args){
        const target = message.mentions.users.first();
        if (target) {
            let memberTarget = message.guild.members.cache.get(target.id);
        const embed = new Discord.MessageEmbed()
            .setTitle(`<@!${memberTarget.user.nickname}> Es un ${gei}% gei :rainbow_flag:`)
            .setColor('GRAY')
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp();
        message.channel.send(embed);
        }
        
    }
}