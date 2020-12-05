const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "calc",
    description: "Get the answer to a math problem",
    execute(message, args){

        if(!args[0]) return message.channel.send('Porfavor pon una ecuacion');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Porfavor pon una ecuacion valida')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculadora Casio FX 570')
        .addField('Ecuacion', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Respuesta', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}