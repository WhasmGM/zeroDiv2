const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  const perm = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/696086229434761216/be063ea080344c2a981ebe1d8da35b02.png?size=2048"
    )
    .addField(
      `<a:zero9:696093036270059641> ┆${message.author.username}`,
      `Você não tem permissão para usar este comando!`
    )
    .addField(
      `<a:zero26:696105043610435625> ┆Como consigo a permissão?`,
       `Você tem que o adicionar o seguinte cargo em você: **"Perm do Zero 💸"** que ja foi criado na minha entrada no servidor, caso não tenha crie!`
    );

  if (!message.member.roles.some(r => ["Perm do Zero 💸"].includes(r.name)))
    return message.reply(perm);

  let dmGuild = message.guild;
  let msg = args.join(" ");

  if (!msg || msg.length <= 0)
    return message.author.send("Nenhuma mensagem especificada");

  dmGuild.members.forEach(member => {
    member.send(msg);
  });

  const membros = message.guild.memberCount;

  message.channel
    .send("*`Mensagem enviada para`* ***`" + membros + "`*** *`membros`*")
    .then(msg => msg.delete(15000));
  message.channel
    .send("**`Mensagem a ser enviada:`\n**" + msg)
    .then(msg => msg.delete(15000));
};
