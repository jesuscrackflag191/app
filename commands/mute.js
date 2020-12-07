const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
 
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Calla');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> ha sido muteado`);
                return
            }
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> ha sido muteado por ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> ha sido desmuteado`)
            }, ms(args[1]));
        } else {
            message.channel.send('No encuentro el usuario');
        }
    }
}
 