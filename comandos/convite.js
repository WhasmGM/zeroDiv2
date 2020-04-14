const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let embed = new Discord.RichEmbed();

  const mensagem = new Discord.RichEmbed()
    .setTitle(client.user.username, client.user.avatarURL)
    .setDescription(
      "`Olá, eu sou o " +
        client.user.username +
        ", um bot focado em anúncios DM e divulgação`"
    )
    .setThumbnail(client.user.avatarURL)
    .addField(
      "<:zero3:696091828348518400> Me adicione em seu servidor:",
      `**[Clique aqui](https://discordapp.com/api/oauth2/authorize?client_id=506577257532489757&permissions=59392&scope=bot)**`
    )
    .addField(
      "<:zero7:696092364971704350> Caso você esteja pensando:",
      `**"Nossa ele tem permissão de adm ele vai derrubar meu servidor."**\n` +
        `Se estiver com medo é só tirar as minhas permissões pois preciso só das permissões de:\n` +
        `**Ler, escrever, gerenciar mensagens, inserir links e anexar arquivos.**`
    )
    .addField(
      "<a:zero8:696092526503002172> Use `z!anunciar (msg)` para anunciar seu servidor...",
      `**[Entre em meu servidor](https://discord.gg/uns)**`
    )
    .setColor("RANDOM")
    .setFooter(client.user.username, client.user.avatarURL);
  message.channel.send(mensagem);
};