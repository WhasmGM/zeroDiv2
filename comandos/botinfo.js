const Discord = require("discord.js")

const moment = require('moment')

moment.locale('pt-br')

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};


exports.run =  async (client, message, args) => {

    const date = client.user.createdAt


    let u = convertMS(client.uptime);

    let segundo = u.s + " Segundos"
    let minuto = u.m + " Minutos"
    let hora =u.h + " Horas" 
    let dia = u.d + " Dias"  



    let uptimeE = new Discord.RichEmbed()
        
            .setColor("RANDOM")
            .setThumbnail(client.user.displayAvatarURL)
            .setAuthor('🤖 - Minhas informações')
            .addField('<:zero18:696099017154887711> **Usuários**', `<:zero21:696099725543473172> ${client.users.size}`)
            .addField('<:zero2:696091828528873573> **Guilds**', `<:zero21:696099725543473172> ${client.guilds.size}`)
            .addField('<:zero20:696099017230385222> **Canais**', `<:zero21:696099725543473172> ${client.channels.size}`)
            .addField('<a:zero19:696099017129721917> **Ping**', `<:zero21:696099725543473172> ${Math.round(client.ping)}ms`)
            .addField('<:zero29:696725732788928623> **Criado em**', formatDate('<:zero21:696099725543473172> DD/MM/YYYY', date))
            message.channel.send(uptimeE).then(msg => {
                msg.delete(20000)
              })
 
};

/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
    var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
    return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
      return template.split(specs[i]).join(item)
    }, template)
  }