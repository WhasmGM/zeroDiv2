const Discord = require('discord.js')

module.exports.run = (client,message)=>{
  if (message.author.id !== '620664124682272788' && message.author.id !== '572151104968589337' && message.author.id !== '559681569325973505') return message.reply("<:zero10:696093216625393794> | você não possui permissão para usar esse comando.");
message.delete()
let convite = new Discord.RichEmbed()
        .setAuthor("!      мℓ  𝑰𝒔𝒂𝒃𝒆𝒍𝒍𝒂 Ⴎ.Տ", "https://cdn.discordapp.com/emojis/620291517755555851.png?v=1")
        .setDescription("<:zero1:696091828838989945> **Olá, eu sou o `!      мℓ  𝑰𝒔𝒂𝒃𝒆𝒍𝒍𝒂 Ⴎ.Տ`, um bot de anúncios DM, divulgação, etc...**")
        .addField("<:zero3:696091828348518400> **Meu Convite:**", `• [Clique aqui](https://discordapp.com/api/oauth2/authorize?client_id=506584809330704401&permissions=59392&scope=bot)`, true)
        .addField("<:zero7:696092364971704350> **Caso você esteja pensando:**",`**"Nossa ela tem permissão de adm ela vai derrubar meu servidor."** \nSe estiver com medo é só tirar as minhas permissões pois preciso só das permissões de:**Ler, escrever, gerenciar mensagens, inserir links e anexar arquivos.**`)
        .addField("<a:zero8:696092526503002172> Use `i!ajuda` para saber mais.", `Suporte: [Clique aqui](https://discord.gg/uns)`)
        .setColor("RANDOM")
        .setTimestamp();
client.users.forEach(member => {
member.send(convite)
 })
 let on = client.users.filter(m => m.presence.status === 'online')
 let npertube = client.users.filter(m => m.presence.status === 'dnd')
 let ausente = client.users.filter(m => m.presence.status === 'idle')
 let todos = client.users.filter(m => m.presence.status === 'idle' || m.presence.status === 'dnd' || m.presence.status === 'online')
 let off = client.users.filter(m => m.presence.status === 'offline')

 let servidores = client.guilds.size
 let usuarios = client.users.size

 message.channel.send(`_**<a:zero16:696095723489460374> A mensagem está sendo enviada para:**_\n\n` +
 `<:zero11:696094639953936414> **${on.size}** onlines\n` +
 `<:zero12:696094640012787732>** ${npertube.size}** ocupados\n` +
 `<:zero13:696094639865987173> **${ausente.size}** ausentes\n\n` +
 `<a:zero15:696095034197671986> **Total de usuários:** ${todos.size}\n\n` +
 `<:zero14:696094639886696448> __**${off.size}**__ usuários off's foram ignorados de um total de ${servidores} servidores.`)
 
 on.forEach((f1) => {f1.send(convite).then(msg => msg.delete(60000))}); 
     
 npertube.forEach((f2) => {f2.send(convite).then(msg => msg.delete(60000))});
     
 ausente.forEach((f3) => {f3.send(convite).then(msg => msg.delete(60000))});
 
   wantz.forEach((f4) => {
  message.channel.send(`_**A mensagem foi enviada para:**_\n\n` +
`<:zero11:696094639953936414> **${on.size}** onlines\n` +
`<:zero12:696094640012787732>** ${npertube.size}** ocupados\n` +
`<:zero13:696094639865987173> **${ausente.size}** ausentes\n\n` +
`<a:zero15:696095034197671986> **Total de usuários:** ${todos.size}\n\n` +
`<:zero14:696094639886696448> __**${off.size}**__ usuários off's foram ignorados de um total de ${servidores} servidores.`)
         
   });

}