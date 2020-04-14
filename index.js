const fs = require("fs");
console.log("♨️ Ligando bot...");
const Discord = require("discord.js");
const client = new Discord.Client({
  autoReconnect: true,
  messageCacheMaxSize: 2024,
  fetchAllMembers: true,
  disabledEvents: ["typingStart", "typingStop", "guildMemberSpeaking"],
  messageCacheLifetime: 1680,
  messageSweepInterval: 1680
});
const config = require("./config.json");
const tokens = require("./tokens.json");
const { Client, Util } = require("discord.js");
var token1 = tokens.token1;

var prefix = config.prefix;  

client.login(token2);
console.log('Bot 2 Ligado ');


client.on("guildCreate", guild => {
  const moment = require("moment");
  let canal = client.channels.get("699429780424097802");
  let icon = guild.iconURL || "https://loritta.website/assets/img/unknown.png";
  let embedentrada = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail(icon)
    .setTitle(`**Entrei em um servidor novo** \`${guild.name}\``, true)
    .addField(`**Nome do servidor**`, `\`${guild.name}\``, true)
    .addField(`**Id do servidor**`, `\`${guild.id}\``, true)
    .addField("**Membros:**", `\`${guild.memberCount}\``, true)
    .addField("**Região do servidor:**", `\`${guild.region}\``, true)
    .addField("**Dono**", `${guild.owner}`, true)
    .addField("**Id do dono**", `\`${guild.ownerID}\``, true)
    .addField(
      "**Criado em**",
      `\`${moment.utc(guild.createdAt).format("lll")}\``,
      true
    )
    .setColor("RANDOM");

  canal.send(embedentrada);
});

client.on("guildDelete", guild => {
  const moment = require("moment");
  let canal = client.channels.get("699429780424097802");
  let icon = guild.iconURL || "https://loritta.website/assets/img/unknown.png";
  let embedsaida = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail(icon)
    .setTitle(
      `**Acabei de sair de um servidor :7775:** \`${guild.name}\``,
      true
    )
    .addField(`**Nome do servidor**`, `\`${guild.name}\``, true)
    .addField(`**Id do servidor**`, `\`${guild.id}\``, true)
    .addField("**Membros:**", `\`${guild.memberCount}\``, true)
    .addField("**Região do servidor:**", `\`${guild.region}\``, true)
    .addField("**Dono**", `${guild.owner}`, true)
    .addField("**Id do dono**", `\`${guild.ownerID}\``, true)
    .setColor("RANDOM");

  canal.send(embedsaida);
});

client.on("guildCreate", async guild => {
  guild.createRole({
    name: "Perm da Isabella 💸",
    color: "#ff5c8e"
  });
});

client.on("ready", () => {
  console.log(
    `Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`
  );
  client.user.setPresence({
    game: {
      name: config.Status,
      type: "STREAMING",
      url: "https://www.twitch.tv/Wantz_"
    }
  });

  let status = [
    {
      name: `Seu server no topo`,
      digite: "STREAMING",
      url: "https://www.twitch.tv/Wantz_"
    },
    {
      name: `Duvidas? Use z!ajuda`,
      type: "STREAMING",
      url: "https://www.twitch.tv/Wantz_"
    },
    {
      name: `aids pro mundo`,
      type: "STREAMING ,",
      url: "https://www.twitch.tv/Wantz_"
    },
    {
      name: `Meu prefixo é: z!`,
      type: "STREAMING",
      url: "https://www.twitch.tv/Wantz_"
    },
    {
      name: `Universe Secret no topo!!!`,
      type: "STREAMING",
      url: "https://www.twitch.tv/Wantz_"
    },
  ];

  function st() {
    let rs = status[Math.floor(Math.random() * status.length)];
    client.user.setPresence({ game: rs });
  }
  st();
  setInterval(() => st(), 10000); //10000 = 10Ms = 10 segundos
});

client.on("message", message => {
  if (message.content.startsWith(`<@506577257532489757>`))
    ("Olá, a procura de ajuda? Utilize `z!ajuda`");

  if (message.channel.type == "dm") return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (e) {
    console.log(e.stack);
    message.reply(
      ":x: Comando Inexistente, veja meus comandos usando `z!ajuda`"
    );
  }
});

const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);