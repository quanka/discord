const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!args[0]) return message.reply(`**Market şuan kapalı malesef** :name_badge: `)
  
  if (args[0] === 'sa') {
    let qMoney = await db.get(`para_${message.author.id}`) 
    let qFiyat = 100 
    
    if (qMoney < qFiyat) return message.reply('Yetersiz Bakiye')
    
    db.set(`ìştebişiler_${message.author.id}`, "Aktif")
    db.add(`para_${message.author.id}`, -qFiyat)
    
    return message.reply(`Ürün başarıyla satın alındı!`)
  }


  
}
exports.conf = {
  
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'market'
}