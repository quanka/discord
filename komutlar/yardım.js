const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedNarcosCode = new Discord.MessageEmbed()

    .setColor("YELLOW")
    .setTitle(
      "**▬▬▬▬▬▬[** ✨ **Quanka Bot** ✨ **]▬▬▬▬▬▬**  **  **Prefixim: `-`"
    )
    .setThumbnail(
      "https://media.discordapp.net/attachments/794195467427643442/983366279182315550/Parcalanma_ve_Neon_Efektli_Logo.png?width=656&height=656"
    )
    .setDescription(
      `

**▬▬▬▬▬▬▬[** :closed_lock_with_key:  **Komut Listesi**   :closed_lock_with_key: **]▬▬▬▬▬▬**

> **» -moderasyon :** Moderasyon komudları görüntüler.
> **» -kullanıcı :** Userler için açık komudlar...
> **» -eğlence :** Sizi biraz eğlendirir.
> **» -eğlence2 :** size güzel komudlarımı göstereyim sizi eğlendirecek...
> **» -logo :** İstediniz şekillerde bi logo oluşturabilirsiniz...
> **» -logo2 :**logo2 kamutlarıyla sizlerle...

**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/28Hfjp8gAw)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: -yardım**
> :bulb: **Discord Js Sürümü: 12.4.0**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/28Hfjp8gAw)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=794145236141211659&scope=bot&permissions=268443710&response_type=code)** **•** **[YouTube](https://www.youtube.com/channel/UCvDYTPFB_tOZh6_a79BXUOw)**
`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(EmbedNarcosCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-yardım"
};
