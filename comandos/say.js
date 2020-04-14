var Discord = require('discord.js')
const client = new Discord.Client();

exports.run = (client, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== '591703886142898177' && message.author.id !== '620664124682272788') return message.reply("<a:zero9:696093036270059641> | você não possui permissão para usar esse comando.")

  message.delete();
  
let mensagem = args.join(" ")

message.channel.send(mensagem)

}