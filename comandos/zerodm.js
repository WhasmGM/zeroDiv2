const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '620664124682272788' && message.author.id !== '572151104968589337' && message.author.id !== '653316458700341268') return message.reply("<:zero10:696093216625393794> | você não possui permissão para usar esse comando.");
message.delete()
 
let on = client.users.filter(m => m.presence.status === 'online')
let npertube = client.users.filter(m => m.presence.status === 'dnd')
let ausente = client.users.filter(m => m.presence.status === 'idle')
let todos = client.users.filter(m => m.presence.status === 'idle' || m.presence.status === 'dnd' || m.presence.status === 'online')
let off = client.users.filter(m => m.presence.status === 'offline')

let servidores = client.guilds.size
let usuarios = client.users.size

let mensagem = args.join(" ")
  let wantz = client.users.get('620664124682272788')
      
  message.channel.send(`<a:zero16:696095723489460374> _**A mensagem está sendo enviada para:**_\n\n` +
  `<:zero11:696094639953936414> **${on.size}** onlines\n` +
  `<:zero12:696094640012787732>** ${npertube.size}** ocupados\n` +
  `<:zero13:696094639865987173> **${ausente.size}** ausentes\n\n` +
  `<a:zero15:696095034197671986> **Total de usuários:** ${todos.size}\n\n` +
  `<:zero14:696094639886696448> __**${off.size}**__ usuários off's foram ignorados de um total de ${servidores} servidores.`)

on.forEach((f1) => {f1.send(mensagem).then(msg => msg.delete(600000))}); 
    
npertube.forEach((f2) => {f2.send(mensagem).then(msg => msg.delete(600000))});
    
ausente.forEach((f3) => {f3.send(mensagem).then(msg => msg.delete(600000))});

  wantz.forEach((f4) => {
    message.channel.send(`<a:zero16:696095723489460374> _**A mensagem foi enviada para:**_\n\n` +
    `<:zero11:696094639953936414> **${on.size}** onlines\n` +
    `<:zero12:696094640012787732>** ${npertube.size}** ocupados\n` +
    `<:zero13:696094639865987173> **${ausente.size}** ausentes\n\n` +
    `<a:zero15:696095034197671986> **Total de usuários:** ${todos.size}\n\n` +
    `<:zero14:696094639886696448> __**${off.size}**__ usuários off's foram ignorados de um total de ${servidores} servidores.`)
    
  });
    
}