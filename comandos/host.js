const Discord = require("discord.js")
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment") 
moment.locale('pt-BR');

 module.exports.run = async (bot, message, args) => {
  if (message.author.id !== '620664124682272788' && message.author.id !== '572151104968589337') return message.reply("<:zero10:696093216625393794> | você não possui permissão para usar esse comando.");
message.delete()
            let { version } = require("discord.js");
     
            cpuStat.usagePercent(function(err, percent, seconds) {
              if (err) {
                return console.log(err);
              }
             
             let secs = Math.floor(bot.uptime % 60);
             let days = Math.floor((bot.uptime % 31536000) / 86400);
             let hours = Math.floor((bot.uptime / 3600) % 24);
             let mins = Math.floor((bot.uptime / 60) % 60);

              let embedStats = new Discord.RichEmbed()
             .setTitle("<:zero22:696102183699218493> | Informações sobre a Host")
             .setColor("RANDOM")
             .addField("<:zero11:696094639953936414> | Memoria a ser usada", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
             .addField("<:zero11:696094639953936414> | Discord.js", `${version}`, true)
             .addField("<:zero11:696094639953936414> | CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
             .addField("<:zero11:696094639953936414> | CPU a ser usada", `\`${percent.toFixed(2)}%\``,true)
             .addField("<:zero11:696094639953936414> | Arch", `\`${os.arch()}\``,true)
             .addField("<:zero11:696094639953936414> | Plataforma", `\`\`${os.platform()}\`\``,true)
             message.channel.send(embedStats).then(msg => {
              msg.delete(20000)
            })
            })


}

module.exports.config = {
    name: "cpu",
    aliases: ["cpu", "host"]
    }