
const Discord = require('discord.js')

exports.run = (bot, message, args) => {
        var embed = new Discord.RichEmbed()
        .setAuthor("Ajuda?","https://cdn.discordapp.com/emojis/498689223881392168.png?size=2048")
        .setColor("#ff0bf7")
        .setDescription(`Meus comandos foram enviados em seu privado.`)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    message.channel.send(embed).then(msg => {
        msg.delete(20000)
      })

        var embed = new Discord.RichEmbed()
            .setTitle("<a:zero16:696095723489460374> | Escolha uma categoria...")
            .setDescription("\n\n<:zero27:696118165909798954> **| Moderação**\n<:zero28:696118165461008536> **| Utilidades**")
            .setColor("#ff0bf7")

        message.author.send({embed}).then(msg=>{
            msg.react('696118165461008536').then(r=>{
            msg.react('696118165909798954')
        })
        const divfilter = (reaction, user) => reaction.emoji.id === '696118165461008536' && user.id === message.author.id;
        const informacoesfilter = (reaction, user) => reaction.emoji.id === '696118165909798954' && user.id === message.author.id;
        const div = msg.createReactionCollector(divfilter, { time: 40000 });
        const informacoes = msg.createReactionCollector(informacoesfilter, { time: 60000 });
        
        informacoes.on('collect', r2 => { 
        embed = new Discord.RichEmbed()
            .setTitle("<:zero28:696118165461008536> | Utilidades")
            .addField(`**z!cargotodos**`, `» Dê cargo a todos do servidor com apenas um comando. __(Necessario permissão de Gerenciar Servidor)__`)
            .addField(`**z!lock**`, `» Retire a permissão dos membros de enviarem mensagem em um certo Chat. __(Necessario permissão de Gerenciar Mensagens.)__`)
            .addField(`**z!unlock**`, `» Readicione a permissão dos membros de enviarem mensagem em um certo Chat. __(Necessario permissão de Gerenciar Mensagens.)__`)
            .addField(`**z!botinfo**`, `» Use este comando para ver minhas informações`)
            .setColor("#ff0bf7")
            msg.edit(embed);
        })

    div.on('collect', r => { 
        embed = new Discord.RichEmbed()
            .setTitle("<:zero27:696118165909798954> | Moderação")
            .addField(`**z!aviso**`, `» Envie uma mensagem a todos do seu servidor. __(Necessario meu cargo de Permissão.)__`)
            .addField(`**z!say**`, `» Envie uma mensagem pelo bot. __(Necessario permissão de Administrador)__`)
            .addField(`**z!convite**`, `» Meu convite e convite para meu suporte. `)          
            .addField(`**z!anunciar**`, `» Use este comando para divulgar seu servidor.`)
            .setColor("#ff0bf7")
            msg.edit(embed);
        })
    })
}