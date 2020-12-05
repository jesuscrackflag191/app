const ms = require('ms');
const Discord = require("discord.js");


module.exports = {
    name: "hack",
    description: "Este es el ejemplo para no escribir",
    execute(message, args){

        let usuarioh = message.mentions.users.first();
		if (!usuarioh)
			return message.channel.send(
				'<:emoji_8~1:765687824539582526> | Menciona a alguien para hackear'
			);

		let contras = [
			'EllaNoMeAma',
			'FriendZoneForEver',
			'SoyFeo4234',
			'RojonoGuapo1703'
		];
		let gmails = ['tumama@gmail.com', 'dcopn@gmail.com',  'ptaqsad@gmail.com', 'putoelqlolea@gmail.com', 'joto@gmail.com'];
		let ips = [
			'191.168.2.1',
			'131.168.1.4',
			'156.156.7.0',
			'101.151.1.9',
			'111.111.1.1',
			'133.134.9.8',
			'082.334.134',
			'027.746.674',
			'937.577.385',
			'999.777.888',
			'846.238.836',
			'666.666.666',
			'666'
		];
		let wifi = ['jotito23', 'feito24', 'tkllas1222', 'wifi3462'];
		var Num = contras[Math.floor(contras.length * Math.random())];
		var Num1 = gmails[Math.floor(gmails.length * Math.random())];
		var Num3 = ips[Math.floor(ips.length * Math.random())];
		var Num4 = wifi[Math.floor(wifi.length * Math.random())];
		message.channel.send('___**Conectando al Wi-Fi...**___').then(m => {
			setTimeout(function() {
				m.edit('___**Conectando al Wi-Fi..**___').then(m => {});
			}, 5000);
			setTimeout(function() {
				m.edit('___**Conectando al Wi-Fi.**___').then(m => {});
			}, 6000);
			setTimeout(function() {
				m.edit('___**Conectando al Wi-Fi.**___').then(m => {});
			}, 7000);
			setTimeout(function() {
				m.edit('___**Conectando al Wi-Fi.**___').then(m => {});
			}, 8000);
			setTimeout(function() {
				m.edit('___**Conectado exitosamente :white_check_mark:**___').then(
					m => {}
				);
			}, 9000);

			setTimeout(function() {
				m.edit('___**Conectado exitosamente :white_check_mark:**___').then(
					m => {}
				);
			}, 10000);

			setTimeout(function() {
				m.edit('___**Obteniendo sus datos...**___').then(m => {});
			}, 11000);
			setTimeout(function() {
				m.edit('___**Obteniendo sus datos..**___').then(m => {});
			}, 12000);
			setTimeout(function() {
				m.edit('___**Obteniendo sus datos..**___').then(m => {});
			}, 13000);
			setTimeout(function() {
				m.edit('___**Obteniendo sus datos...**___').then(m => {});
			}, 11000);
			setTimeout(function() {
				m.edit('___**Obteniendo sus datos..**___').then(m => {});
			}, 12000);
			setTimeout(function() {
				m.edit('___**Obteniendo sus datos..**___').then(m => {});
			}, 13000);
			setTimeout(function() {
				m.edit('___**Wi-Fi Conectado :white_check_mark:**___').then(m => {});
			}, 14000);
			setTimeout(function() {
				let embed = new Discord.MessageEmbed()
					.setTitle('' + message.author.tag + ' hackeo a: ' + usuarioh + '')
					.setDescription(
						'<:gmail:784869277743972433> | Su Gmail: ' +
							Num1 +
							' \n<:candado:784874124844466196> | Su Contraseña:  ' +
							Num +
							' \n?? | Su IP:  ' +
							Num3 +
							' \n?? | Su Wi-fi: ' +
							Num4 +
							''
					)
					.setColor('#04ff00');
				return message.channel.send(embed);
			}, 14000);
        });

    }
}