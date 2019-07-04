const Discord = require('discord.js');
const bot = new Discord.Client();
const FFMPEG = require('ffmpeg')
const YoutubeStream = require('youtube-audio-stream')
const { Canvas } = require('canvas-constructor');
const axios = require('axios')
const superagent = require('superagent')
const moment = require("moment")
const fetch = require("node-fetch")
const arraySort = require("array-sort")
const table = require("table")
const request = require("request")
const ascii = require("ascii-art")


bot.login(process.env.TOKEN)

bot.on("ready", guild => {
  console.log(`${bot.user.username} est connecté !`)
  bot.user.setStatus('dnd')
  setTimeout(game1, 5000);
  let game = false;
  function game1(){

    bot.user.setActivity("ToTo en train de le programmer !", {type: "WATCHING"});

    setTimeout(game2, 5000);
  };

  function game2(){

    bot.user.setActivity('trouver son préfixe ➜ ' + prefix);

    setTimeout(game3, 5000);
  };

  function game3(){

    bot.user.setActivity(bot.guilds.map(g => g).length + " serveurs", {type: "WATCHING"});

    setTimeout(game4, 5000);
  };

  function game4(){

    bot.user.setActivity("Visual Studio Code",{type: "WATCHING"});

    setTimeout(game5, 5000);
  };
  
  function game5(){
    bot.user.setActivity("à quoi ressemblera le futur",{type: "WATCHING"});

    setTimeout(game6, 5000);
  };

  function game6(){

    bot.user.setActivity(bot.users.size + " utilisateurs !",{type: "WATCHING"});

    setTimeout(game1, 5000);
  };

})

var prefix = ("=");

bot.on("message", async(message) => {

  //A FAIRE
  //Help pour invite
  //Finir commande invite

  var party_launch = false
  var max_num = 10000
  let hello_word = ["slt","salut","cc","coucou","yo","hello","bonjour","bjr"]// ,"","","","","","",""]

  if(!message.guild) return
  if(message.author.bot === true) return
  var log_channel = bot.channels.get ("587256158956421120")
  var erreur_create_emoji = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle(':x: Erreur :x:')
    .setDescription("Vérifier que le format est correct")
    .addField("• Exemples", "➜ **" + prefix + "add-emoji <URL> <nom>**\n➜ **" + prefix + "add-emoji http://pngimg.com/uploads/thief/thief_PNG22.png robber**")

  var help_add_emoji = new Discord.RichEmbed()
    .setColor("#03c900")
    .setTitle("Aide pour la commande `add-emoji`")
    .setDescription("Cette commande permet de rajouter un emoji sur votre serveur")
    .addField("• **Commande :**", "*" + prefix + "add-emoji <URL> <nom>*")
    .addField("• **Exemple :**", "*" + prefix + "add-emoji http://pngimg.com/uploads/thief/thief_PNG22.png robber*" )
  
  var help_bowling = new Discord.RichEmbed()
    .setColor("#03c900")
    .setTitle("Aide pour la commande `bowling`")
    .setDescription("Cette commande permet de jouer au bowling")
    .addField("• **Commande :**", "*" + prefix + "bowling*")

  var help_ping = new Discord.RichEmbed()
    .setColor("#03c900")
    .setTitle("Aide pour la commande `ping`")
    .setDescription("Cette commande permet de connaître le temps de latence de Milano")
    .addField("• **Commande :**", "*" + prefix + "ping*")

  var help_dog = new Discord.RichEmbed()
    .setColor("#03c900")
    .setTitle("Aide pour la commande `dog`")
    .setDescription("Cette commande va vous montrer une photo de chien")
    .addField("• **Commande :**", "*" + prefix + "dog*")

  var help_cat = new Discord.RichEmbed()
    .setColor("#03c900")
    .setTitle("Aide pour la commande `cat`")
    .setDescription("Cette commande va vous montrer une photo de chat")
    .addField("• **Commande :**", "*" + prefix + "chat*")

  var help_count_members = new Discord.RichEmbed()
    .setColor("#03c900")
    .setTitle("Aide pour la commande `count-members`")
    .setDescription("Cette commande va compter le nombre de personnes sur le serveur actuellement")
    .addField("• **Commande :**", "*" + prefix + "count-members*")

  var help_info_bot = new Discord.RichEmbed()
    .setColor("#03c900")
    .setTitle("Aide pour la commande `botinfo`")
    .setDescription("Cette commande va donner des informations sur Milano")
    .addField("• **Commande :**", "*" + prefix + "botinfo*")

  var help_card_bot = new Discord.RichEmbed()
    .setColor("#03c900")
    .setTitle("Aide pour la commande `cardbot`")
    .setDescription("Cette commande va donner des informations sur Milano sous forme d'une carte")
    .addField("• **Commande :**", "*" + prefix + "cardbot*")
  
  var help_avatar = new Discord.RichEmbed()
    .setColor("#03c900")
    .setTitle("Aide pour la commande `avatar`")
    .setDescription("Cette commande va donner ton avatar ou l'avatar d'un autre membre")
    .addField("• **Commande :**", "*" + prefix + "avatar* ➜ Pour avoir ton avatar\n*" + prefix + "avatar @user* ➜ Pour avoir l'avatar de la personne mentionnée")
    .addField("• **Exemple :**", "*" + prefix + "avatar @ToTo*" )
    .addField("• **Raccourcis et synonymes :**", prefix + "av")

  var help_pileouface = new Discord.RichEmbed()
    .setColor("#03c900")
    .setTitle("Aide pour la commande `pileouface`")
    .setDescription("Cette commande te permet de jouer à pile ou face")
    .addField("• **Commande :**", "*" + prefix + "pileouface <`pile` ou `face`>*")
    .addField("• **Exemple :**", "*" + prefix + "pileouface pile*" )
    .addField("• **Raccourcis et synonymes :**", prefix + "pileouf <`pile` ou `face`>")

  var help_invite = new Discord.RichEmbed()
    .setColor("#03c900")
    .setTitle("Aide pour la commande `invite`")
    .setDescription("Cette commande va te donner le lien pour inviter Milano sur ton serveur")
    .addField("• **Commande :**", "*" + prefix + "invite*")

    var help = new Discord.RichEmbed()
      .setColor('#FFFFF')
      .setTitle("Aide pour le bot Milano !")
      .setDescription("Pour obtenir de l'aide pour une commande, utilisez `" + prefix + "help <commande>` (toutes les commandes n'ont pas encore de description)\nSi vous avez des idées d'améliorations pour Milano, tapez la commande `" + prefix + "idee`")
      .addField("➜ **Préfixe** ", prefix, true)
      .addField("➜ **Commandes modération**", "`chmute` ; `chunmute` ; `mute` ; `unmute`")
      .addField("➜ **Commandes utiles**", "`add-emoji` ; `ping` ; `count-members` ; `botinfo` ; `avatar` ; `Milano` ; `remove-emoji`")
      .addField("➜ **Commandes funs**", "`bowling` ; `code-binaire` ; `uncode-binaire` ; `server` ; `time` ; `emoji` ; `cat` ; `dog` ; `pileouface` ; `succes` ; `profile` ; `avatar` ; `info`")
      .addField("➜ **Commandes owner et son ami**", "`all emoji`")

    var bot_info = new Discord.RichEmbed()
      .setThumbnail(bot.user.displayAvatarURL)
      .setColor("#7293ff")
      .setTitle("Informations sur le bot Milano")
      .addField("• Nom :", bot.user.username, true)
      .addField("• " + bot.user.username + " a été créé le :", bot.user.createdAt)
      .addField("• Il a rejoint " + message.guild.name + " le :", message.guild.joinedAt)
      .addField("• Différents liens :","[Invitez Milano sur votre serveur](https://discordapp.com/oauth2/authorize?client_id=581124441191481382&scope=bot&permissions=8)\n[Rejoignez mon serveur !](https://discord.gg/sjr5HBa)\n[Notre serveur RP](https://discord.gg/uUs8BJk)")
  
  var count_members = new Discord.RichEmbed()
    .setColor("#009dff")
    .addField("Nombre de membres dans " + message.guild.name, message.guild.memberCount + " membres")

    var args = message.content.split(" ")
    if(message.content.startsWith(prefix + "add-emoji")) {
      if(!args[1]) return message.channel.send(erreur_create_emoji)
      if(!args[2]) return message.channel.send(erreur_create_emoji)
      message.guild.createEmoji(args[1], args[2]).catch()
      var create_emoji = new Discord.RichEmbed()
        .setColor('#18dd28')
        .setTitle("Action : Création d'émoji")
        .setThumbnail(args[1])
        .addField("Lien de l'emoji :", args[1])
        .addField("Ajouté sous le nom de :", args[2])
        .addField('Ajouté par :', message.author.username)
        .setFooter('Ajouté le ' + message.createdAt)
      log_channel.send(create_emoji)
    }

    if(message.content.startsWith(prefix + "count")) {
      message.channel.send(count_members)
    }

    if(message.content.startsWith(prefix + "suc")) {
      if(!args[1]) return message.channel.send(":x: **Erreur** :x:\nMerci de préciser le texte pour votre succès !")
      var ach_image = Math.floor(Math.random() * 28)
      args.shift()
      if(args.join(" ").length > 20 | args.join(" ").length < 1) return message.channel.send(":x: **Trop long** :x:\nLe texte de votre succès doit comprendre entre 1 et 20 caractères !")
      var ach = ("https://minecraftskinstealer.com/achievement/" + ach_image + "/Succès dévérouillé !/" + args.join("+"))
      message.channel.send(new Discord.Attachment(ach, "Minecraft.jpg")).catch(error => message.channel.send("Erreur : " + error))
    }
    if(message.content.startsWith(prefix + "pro")){
      const user = message.mentions.users.first()
      if(user) {
        const member = message.guild.member(user)
        if(member) {
        var user_status = member.presence.status
        if(user_status === "dnd") {
            user_status = "Ne Pas Déranger"
        }
        if(user_status === "online") {
            user_status = "En ligne"
        }
        if(user_status === "offline") {
            user_status = "Hors-ligne"
        }
        if(user_status === "idle") {
            user_status = "Inactif"
        }
        var user_game = member.presence.game
        if(user_game === null) {
          user_game = "rien"
          var MOT_GAME = "Ne fait "
        } else {
          if(user_game.type === 0) {
            var MOT_GAME = "Joue à "
          }
          if(user_game.type === 1) {
            var MOT_GAME = "Stream sur "
          }
          if(user_game.type === 2) {
            var MOT_GAME = "Ecoute "
          }
          if(user_game.type === 3) {
            var MOT_GAME = "Regarde "
          }
        }
        var creation_date = moment(member.user.createdAt).format("L") + " à " + moment(member.user.createdAt).format("LT")
        var arrived_date = moment(member.joinedAt).format("L") + " à " + moment(member.joinedAt).format("LT")
        var profil = new Discord.RichEmbed()
          .setColor("#12ff00")
          .setTitle("Profil de " + member.user.username)
          .setFooter(member.user.username, member.user.avatarURL)
          .setTimestamp()
          .setThumbnail(member.user.avatarURL)
          .addField("Nom :", member.user.username)
          .addField("Tag :", member.user.tag)
          .addField("ID :", member.user.id)
          .addField("Date de création du compte", "`" + creation_date + "`")
          .addField("Date d'arrivée sur "+ message.guild.name + " :", "`" + arrived_date + "`")
          .addField("Rôle le plus élevé :", member.highestRole)
          .addField("Statut : ", user_status)
          .addField("Activité/Jeu : ", MOT_GAME + "`" + user_game + "`")
        message.channel.send(profil)
      }
        } else {
      var user_status = message.author.presence.status
        if(user_status === "dnd") {
            user_status = "Ne Pas Déranger"
        }
        if(user_status === "online") {
            user_status = "En ligne"
        }
        if(user_status === "offline") {
            user_status = "Hors-ligne"
        }
        if(user_status === "idle") {
            user_status = "Inactif"
        }
        var user_game = message.author.presence.game
        if(user_game === null) {
          user_game = "rien"
        }
        var creation_date = moment(message.author.createdAt).format("L") + " à " + moment(message.author.createdAt).format("LT")
        var arrived_date = moment(message.member.joinedAt).format("L") + " à " + moment(message.member.joinedAt).format("LT")
        var profil = new Discord.RichEmbed()
          .setTitle("Profil de " + message.author.username)
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setTimestamp()
          .setThumbnail(message.author.avatarURL)
          .addField("Nom :", message.author.username)
          .addField("Tag :", message.author.tag)
          .addField("ID :", message.author.id)
          .addField("Date de création du compte", "`" + creation_date + "`")
          .addField("Date d'arrivée sur "+ message.guild.name + " :", "`" + arrived_date + "`")
          .addField("Rôle le plus élevé :", message.member.highestRole)
          .addField("Statut : ", user_status)
          .addField("Activité/Jeu : ", "Joue à `" + user_game + "`")
          //.addField("Nombre de serveurs :", message.author.client.guilds.array().length)
        message.channel.send(profil)
      }
    }
    if(message.content.startsWith(prefix + "mute")) {
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Tu n'es pas autorisé à utiliser cette commande ! Tu as besoin de la permission `Gérer les rôles`.")
      if(!message.guild.me.hasPermission(["MANAGE_ROLES","ADMINISTRATOR"])) return message.channel.send("Je n'ai pas la permission pour ajouter un rôle")
      if(!args[1]) return message.channel.send("Veuillez entrer un utilisateur")
      var muted = message.mentions.members.first()
      if(!muted) return message.channel.send("Veuillez entrer un utilisateur")
      if(muted.user.bot === true) return message.channel.send("Tu ne peux pas mute un bot !")
      var reason = args.slice(2).join(" ")
      if(!reason) var reason = "Pas de raison précisé"

      let mute_role = message.guild.roles.find(r => r.name === "Muted")
      if (mute_role) {
        muted.addRole(mute_role)
        message.channel.send(":white_check_mark: " + muted + ' a bien été mute ')
      }
      else {
        message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
            message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                channel.overwritePermissions(mute_role, {
                    SEND_MESSAGES: false
                })
            })
            message.channel.send(":white_check_mark: " + member + ' a bien été muté')
            muted.addRole(mute_role.id).then(muted.createDM().then(DM => DM.send("Vous avez été muté par " + message.author.username + " dans le serveur " + message.guild.name + "\nRaison : " + reason)))
        })
      }
      if(!mute_role) return message.channel.send("Veuillez créer un rôle `Muted`")
    }
    if(message.content.startsWith(prefix + "unmute")) {
      var mute_role = message.guild.roles.find(r => r.name === "Muted")
      
      var muted = message.guild.member(message.mentions.users.first())
      if(!muted.roles.get(mute_role.id)) return message.channel.send(muted + " n'a pas été mute !")
      muted.removeRole(mute_role)
      message.channel.send(":white_check_mark: " + muted + " a été démute")
    }
    if(message.content === prefix + "server") {
      var nbrePage = 1
      var serv_list = bot.guilds.sort((servA, servB) => servB.memberCount - servA.memberCount).map(s => "**" + s.name + "** | " + s.memberCount + " membres | Rejoint le `" + moment(s.joinedAt).format("L") + " à " + moment(s.joinedAt).format("LT") + "`\n").slice(0, 10)
      var page = "Page 1 / "
      var serv_list_embed1 = new Discord.RichEmbed()
        .setTitle("Liste des serveurs (" + bot.guilds.map(n => n).length + ")")
        .setDescription(serv_list)
        .setFooter(page + Math.ceil(Math.ceil(bot.guilds.map(n => n).length)/10))
        .setColor("#00caf7")
      message.channel.send(serv_list_embed1)
      .then(async msg => {
        await msg.react("⏪")
        await msg.react("⏩")

        bot.on("messageReactionAdd", (reaction, user) => {
          if(reaction.emoji.name === "⏩" && user.id === message.author.id && reaction.message.id === msg.id) {
            nbrePage = nbrePage + 1
            if(nbrePage > 3) nbrePage = 1
            var serv_listBIS = bot.guilds.sort((servA, servB) => servB.memberCount - servA.memberCount).map(s => "**" + s.name + "** | " + s.memberCount + " membres | Rejoint le `" + moment(s.joinedAt).format("L") + " à " + moment(s.joinedAt).format("LT") + "`\n").slice(nbrePage * 10 - 10, nbrePage * 10)
            var page = "Page " + nbrePage + " / "
            var serv_list_embed = new Discord.RichEmbed()
              .setTitle("Liste des serveurs (" + bot.guilds.map(n => n).length + ")")
              .setDescription(serv_listBIS)
              .setFooter(page + Math.ceil(Math.ceil(bot.guilds.map(n => n).length)/10))
              .setColor("#00caf7")
            msg.edit(serv_list_embed)
            reaction.remove(message.author)
          }
          if(reaction.emoji.name === "⏪" && user.id === message.author.id && reaction.message.id === msg.id) {
            nbrePage = nbrePage - 1
            if(nbrePage < 1) nbrePage = 3
            var serv_listBIS = bot.guilds.sort((servA, servB) => servB.memberCount - servA.memberCount).map(s => "**" + s.name + "** | " + s.memberCount + " membres | Rejoint le `" + moment(s.joinedAt).format("L") + " à " + moment(s.joinedAt).format("LT") + "`\n").slice(nbrePage * 10 - 10, nbrePage * 10)
            var page = "Page " + nbrePage + " / "
            var serv_list_embed = new Discord.RichEmbed()
              .setTitle("Liste des serveurs (" + bot.guilds.map(n => n).length + ")")
              .setDescription(serv_listBIS)
              .setFooter(page + Math.ceil(Math.ceil(bot.guilds.map(n => n).length)/10))
              .setColor("#00caf7")
            msg.edit(serv_list_embed)
            reaction.remove(message.author)
          }
        })
      })
    }

    if(message.content.startsWith(prefix + "role")) {
      if(!args[1] | args[1] === 1) {
        var roles = message.guild.roles.map(ro => "⏣ " + ro.name).slice(0, 10)
        var roles_embed = new Discord.RichEmbed()
          .setTitle("Rôles de " + message.guild.name + " (" + roles.length + " rôles)")
          .setDescription(roles)
          .setColor("#06c400")
          .setFooter("Page 1")
        message.channel.send(roles_embed)
      }
      if(args[1] > 1) {
        if(args[1] > message.guild.roles.map(ro => "⏣ " + ro.name).length) {
          message.channel.send("Veuillez saisir un nombre entre 1 et " + Math.round( message.guild.roles.map(ro => "⏣ " + ro.name).length / 10))
        } else {
        var roles = message.guild.roles.map(ro => "⏣ " + ro.name).slice(0 + (args[1]* 10), 10 + (args[1]* 10))
        var roles_embed = new Discord.RichEmbed()
          .setTitle("Rôles de " + message.guild.name + " (" + roles.length + " rôles)")
          .setDescription(roles)
          .setColor("#06c400")
          .setFooter("Page "+ args[1])
        message.channel.send(roles_embed)
        }
      }
    }
  if(message.content.startsWith(prefix + "roul")) {
      var inscrit_list = [message.author.username]
      var RouletteRusseEmbed = new Discord.RichEmbed()
        .setTitle("Partie de roulette russe lancée par " + message.author.username)
        .setDescription("⏣ Réagissez avec <:inscription:595975368909914128> pour vous inscrire/désinscrire.\n⏣ " + message.author.username + " réagis avec <:start:595977330632032276> pour lancer la partie.")
        .addField("Inscrits :", inscrit_list.join(", "))
      message.channel.send(RouletteRusseEmbed)
      .then(async msg => {
        await msg.react("595975368909914128"),
        await msg.react("595977330632032276")

        bot.on("messageReactionAdd", (reaction, user) => {
          if(reaction.emoji.id === "595975368909914128" && bot.user.id != user.id && reaction.message.id === msg.id) {
            if(user.id != message.author.id) {
              if(inscrit_list.includes(user.username)) {
                for (var i = 0; i < inscrit_list.length; i++){
                  if (inscrit_list[i] === user.username) {
                      var pos = i;
                    reaction.remove(user)
                    inscrit_list.splice(pos, 1)
                    var RouletteRusseEmbedBIS = new Discord.RichEmbed()
                      .setTitle("Partie de roulette russe lancée par " + message.author.username)
                      .setDescription("⏣ Réagissez avec <:inscription:595975368909914128> pour vous inscrire/désinscrire.\n⏣ " + message.author.username + " réagis avec <:start:595977330632032276> pour lancer la partie.")
                      .addField("Inscrits :", inscrit_list.join(" ⏣ "))
                    msg.edit(RouletteRusseEmbedBIS)
                  }
                }
              } else {
                inscrit_list.push(user.username)
                reaction.remove(user)
                var RouletteRusseEmbedBIS = new Discord.RichEmbed()
                  .setTitle("Partie de roulette russe lancée par " + message.author.username)
                  .setDescription("⏣ Réagissez avec <:inscription:595975368909914128> pour vous inscrire/désinscrire.\n⏣ " + message.author.username + " réagis avec <:start:595977330632032276> pour lancer la partie.")
                  .addField("Inscrits :", inscrit_list.join(" ⏣ "))
                msg.edit(RouletteRusseEmbedBIS)
              }
            } else {
              reaction.remove(user)
            }
          }
          if(reaction.emoji.id === "595977330632032276" && bot.user.id != user.id && reaction.message.id === msg.id) {
            if(user.id != message.author.id) return message.channel.send("Tu n'es pas le meneur de cette partie, tu ne peux pas utiliser cet émoji !").then(reaction.remove(user)).then(msg => msg.delete(5000))
            if(inscrit_list.length <= 1) return message.channel.send("<:error:596287356537929758>Tu ne peux pas lancer la partie tout seul ! 😶").then(reaction.remove(user)).then(msg => msg.delete(5000))
            var rand = Math.floor(Math.random() * Math.floor(inscrit_list.length))
            console.log(rand)
            for(let s = 0; s <= rand; s++) {
              if(s != rand) {
                var survive = new Discord.RichEmbed() 
                  .setDescription(inscrit_list[s] + " a survécu !")
                  .setColor("#2194ff")
                message.channel.send(survive)
                console.log("N° : " + s)
                console.log("Survivant " + (s + 1) + " : " + inscrit_list[s])
              } else {
                var dead = new Discord.RichEmbed() 
                  .setDescription("Aïe ! Ca fait mal, adieu " + inscrit_list[s])
                  .setColor("#ff0000")
                message.channel.send(dead)
                console.log("N° : " + s)
                console.log("Mort : " + inscrit_list[s])
                msg.delete()
              }
            }
          }
        })
      })
    }

    if(message.author.username === "ToTo" | message.author.username === "Icebarg" | message.author.id === "484991641090916362") {
      if(message.content.startsWith(prefix + "all")) {
        if(args[1].startsWith("emo")) {
          if(!args[2] | args[2] === 1) {
            var allemoji = bot.emojis.map(allemo => "⏣ " + allemo.guild + " | " + allemo.name + " \n`" + allemo.id + "` " + bot.emojis.get(allemo.id).toString()).slice((0 + 20), 20 + (1 * 20))
            var allemoji_embed = new Discord.RichEmbed()
              .setTitle("Tous les émojis de " + bot.user.username + " (" + allemoji.length + " émojis)")
              .setDescription(allemoji)
              .setColor("#06c400")
              .setFooter("Page 1")
            message.channel.send(allemoji_embed)
          }
          if(args[2] > 1) {
            if(args[2] > bot.emojis.map(allemo => "⏣ " + allemo.name).length / 20 ) {
              message.channel.send("Veuillez saisir un nombre entre 1 et " + Math.round( bot.emojis.map(allemo => "⏣ " + allemo.name).length / 20))
            } else {
            var allemoji = bot.emojis.map(allemo => "⏣ " + allemo.guild + " | " + allemo.name + " \n`" + allemo.id + "` " + bot.emojis.get(allemo.id).toString()).slice(0 + (args[2]* 20), 20 + (args[2]* 20))
            var allemoji_embed = new Discord.RichEmbed()
              .setTitle("Tous les émojis de " + bot.user.username + " (" + allemoji.length + " émojis)")
              .setDescription(allemoji)
              .setColor("#06c400")
              .setFooter("Page "+ args[2])
            message.channel.send(allemoji_embed)
            }
          }
        }
        
        if(args[1].startsWith("memb")) {
          if(!args[2] | args[2] === 1) {
            var allmember = bot.guilds.map(serv => "⏣ " + serv.name + "\n    ➜ " + serv.members.map(mem => mem.user.username).slice(0 , 30).join("\n    ➜ ")).slice(0,1)
            var allmember_embed = new Discord.RichEmbed()
              .setTitle("Voici tous les membres")
              .setDescription(allmember)
            message.channel.send(allmember_embed)
          }
          if(args[2] > 1) {
            if(args[2] > bot) {
              message.reply("Veuillez taper un numéro compris entre 1 et " + find_guild(args[2]))
            } else {
            var allmember = bot.guilds.map(serv => "⏣ " + serv.name + "\n\n    ➜ " + serv.members.map(mem => mem.user.username).slice(0 + (args[2]* 30), 30 + (args[2]* 30)).join("\n    ➜ ")).slice(0,1)
            var allmember_embed = new Discord.RichEmbed()
              .setTitle("Voici tous les membres")
              .setDescription(allmember)
            message.channel.send(allmember_embed)
            }
          }
        }
      }
    }
    if(message.content.startsWith(prefix + "asci")) {
      ascii.font(args.slice(1).join(" "), "Doom", function(rendered) {
        rendered = rendered.trimRight()

        if(rendered.length > 900) return message.channel.send(":x: Erreur :x:\nLe message est trop long !")

        message.channel.send(rendered, {
          code: "md"
        })
      })
    }
    if(message.content.startsWith (prefix + "icon")) {
          message.channel.send(message.guild.iconURL)
    }
    if(message.content.startsWith(prefix+ "emo")) {
        function emoji() {
          if(message.guild.emojis.map(e => "⏣ " + e.name + " " + bot.emojis.get(e.id).toString()).length === 0) {
            var serv_emoji = "Aucun émoji sur " + message.guild.name
            var serv_emoji_embed = new Discord.RichEmbed()
              .setTitle("Voici les emojis du serveur " + message.guild.name)
              .setDescription(serv_emoji)
              .setColor("#ff0000")
            message.channel.send(serv_emoji_embed).catch()
            return
          }
          if(!args[1] | args[1] === 1) {
            var serv_emoji = message.guild.emojis.map(e => "⏣ " + e.name + " " + bot.emojis.get(e.id).toString()).slice(0, 10)
            var serv_emoji_embed = new Discord.RichEmbed()
              .setTitle("Voici les emojis du serveur " + message.guild.name + " (" + serv_emoji.length + " emojis)")
              .setDescription(serv_emoji)
              .setColor("#06c400")
              .setFooter("Page 1 / " + Math.ceil(message.guild.emojis.map(emo => emo.name).length / 10))
            message.channel.send(serv_emoji_embed).catch()
          }
           if(args[1] > 1) {
              if(args[1] > Math.ceil(message.guild.emojis.map(emo => emo.name).length / 10)) {
                message.channel.send("Veuillez saisir un nombre entre 1 et " + Math.ceil(message.guild.emojis.map(emo => emo.name).length / 10))
              } else {
                var serv_emoji = message.guild.emojis.map(e => "⏣ " + e.name + bot.emojis.get(e.id).toString()).slice(0 + (args[1]* 10) - 10,(args[1]* 10))
                var serv_emoji_embed = new Discord.RichEmbed()
                  .setTitle("Voici les emojis du serveur " + message.guild.name + " (" + serv_emoji.length + " emojis)")
                  .setDescription(serv_emoji)
                  .setColor("#06c400")
                  .setFooter("Page " + args[1] + " / " + Math.ceil(message.guild.emojis.map(emo => emo.name).length / 10))
                message.channel.send(serv_emoji_embed).catch()
              }
          }
        }
        setImmediate(emoji)
    }
  if(message.content.startsWith(prefix + "reve")) {
    if(!args[1]) return message.channel.send("Veullez entrer un texte à inverser ! :upside_down:")
      var arg = message.content.split("")
      message.channel.send(arg.slice(args[0].split("").length).join("").split("").reverse().join(""))
    }

    if(message.content.startsWith(prefix + "priperm")) {
      const member = message.guild.member(message.mentions.users.first())
      if(member) {
        message.delete()
        var permisssions = message.member.permissions
        message.author.createDM().then(DM => DM.send(permisssions.toArray().length + " permissions sur " + message.guild.name + " : :arrow_down: :arrow_down: :arrow_down:\n\n\n" + permisssions.toArray().join("\n")))
      }
    }

    function find_guild(name) {
      bot.guilds.find("name",name)
    }

    if(message.content.startsWith(prefix + "serv-inv")) {
      if(!args[1]) return message.channel.send("Veuillez entrer un nom de serveur ! Pour voir ma liste, tapez `=server` !")
      //console.log(args.slice(1).join(" ") in bot.guilds + "\n" + bot.guilds)
      if(args.slice(1).join(" ") in bot.guilds === true) return message.channel.send("Le serveur `" + args.slice(1).join(" ") + '` ne fait pas partie de mes serveurs !')
      var serv_invi = find_guild(args.slice(1))
      var serv_invi_embed = new Discord.RichEmbed()
        .setTitle("Voici les différents liens d'invitation qu'il existe pour le serveur " + args.slice(1).join(" "))
        .setDescription(serv_invi)
      message.channel.send(serv_invi_embed)
    }
    if(message.content.startsWith(prefix + "sond")) {
      if(args[1].startsWith("cont")) {
        if(!message.member.hasPermission("ADMINISTRATOR") && !message.author.username == "ToTo") return
        message.delete()
        if(!args[2]) return message.channel.send("Veuillez entrer le sujet de votre sondage\n*Ce message se supprime dans 5s*").then(msgDel => msgDel.delete(5000)).catch(er => console.log("Discord error, Unknown message"))
        var SondageEmbed = new Discord.RichEmbed()
          .setTitle(args.slice(2).join(" "))
          .setTimestamp()
          .setFooter("Sondage de " + message.author.username, message.author.avatarURL)
        message.channel.send(SondageEmbed)
      }
      if(args[1].startsWith("id")) {  
        for(i = 0; i <= args.slice(3).length ; i++) {
          console.log(i)
          message.channel.fetchMessage(args[2])
          .then((msg) => {
            console.log(i)
            console.log(String(args[2 + i]));
            
            msg.react(String(args[2 + i]));
          });
        }
      }
    }

    if(message.content === prefix + "simple") {
      if(args[1].startsWith("cont")) {
        if(!message.member.hasPermission("ADMINISTRATOR") && !message.author.username == "ToTo") return
        message.delete()
        if(!args[2]) return message.channel.send("Veuillez entrer le sujet de votre sondage\n*Ce message se supprime dans 5s*").then(msgDel => msgDel.delete(5000)).catch(er => console.log("Discord error, Unknown message"))
        var SondageEmbed = new Discord.RichEmbed()
          .setTitle(args.slice(2).join(" "))
          .setTimestamp()
          .setFooter("Sondage de " + message.author.username, message.author.avatarURL)
        message.channel.send(SondageEmbed).then(msg => {
            msg.react("✅")
            msg.react("❌")
        })
      }
    }
    if(message.content.startsWith(prefix + "log")) {
      if(message.author != "ToTo") return
      message.delete()
      var negativeAnswer = -1
      var positiveAnswer = -1
      var deleteNumber = 0
      var SondageEmbed = new Discord.RichEmbed()
          .setTitle(args.slice(1).join(" "))
          .setTimestamp()
          .setFooter("Sondage de " + message.author.username, message.author.avatarURL)
      message.channel.send(SondageEmbed).then((msg) => {
        msg.react("✅"),
        msg.react("❌")
        const data_res = msg.createReactionCollector((reaction, user) => user.id);
        data_res.on("collect", async (reaction) => {
          if (reaction.emoji.name === "✅"){
                positiveAnswer = positiveAnswer + 1
          }
          
          if (reaction.emoji.name === "❌") {
            negativeAnswer = negativeAnswer + 1
          }
          var width = positiveAnswer / (positiveAnswer + negativeAnswer) * 400
          if(width === 0 | width === NaN) {
            width = 1
            var COULEUR = "#000000"
          } else {
            var COULEUR = "#00bf40"
          }
          if(negativeAnswer + positiveAnswer === 0) {
            width = 200
          }
          var vote = new Canvas(500,100)

                .setColor("#ffffff")
                .addBeveledRect(0,0, 500, 100,15)
                .setColor("#000000")
                .addBeveledRect(5,5, 490, 90,15)
                .setColor("#ff0000")
                .addBeveledRect(50, 40, 400, 40, 30)
                .setColor(COULEUR)
                .addBeveledRect(50, 40, width, 40 , 30)
                .setColor("#ff0000")
                .setTextFont("20px Impact")
                .addText(100 - Math.round(width/4) + "%", 425,30)
                .setColor("#00bf40")
                .addText(Math.round(width/4) + "%", 55,30)

                .toBuffer();
                
                console.log("Positive : " + positiveAnswer)
                console.log("Negative : " + negativeAnswer)
              console.log(positiveAnswer / (positiveAnswer + negativeAnswer) * 400)
              if(deleteNumber >= 3) {
                message.channel.bulkDelete(1)
              }
              if (deleteNumber >= 2) {
                message.channel.send(new Discord.Attachment(vote))
                deleteNumber = deleteNumber + 1
              } else {
                deleteNumber = deleteNumber + 1
              }
        })
        bot.on("messageReactionRemove", (reaction, user) => {
          if(reaction.message.id === msg.id) {
              if (reaction.emoji.name === "✅"){
                positiveAnswer = positiveAnswer - 1
              }
          
              if (reaction.emoji.name === "❌") {
                negativeAnswer = negativeAnswer - 1
              }
            }
            var width = positiveAnswer / (positiveAnswer + negativeAnswer) * 400
            if(width === 0 | width === NaN) {
              width = 1
              var COULEUR = "#000000"
            } else {
              var COULEUR = "#00bf40"
            }
            if(negativeAnswer + positiveAnswer === 0) {
              width = 200
            }
            var vote = new Canvas(500,100)
  
                  .setColor("#ffffff")
                  .addBeveledRect(0,0, 500, 100,15)
                  .setColor("#000000")
                  .addBeveledRect(5,5, 490, 90,15)
                  .setColor("#ff0000")
                  .addBeveledRect(50, 40, 400, 40, 30)
                  .setColor(COULEUR)
                  .addBeveledRect(50, 40, width, 40 , 30)
                  .setColor("#ff0000")
                  .setTextFont("20px Impact")
                  .addText(100 - Math.round(width/4) + "%", 425,30)
                  .setColor("#00bf40")
                  .addText(Math.round(width/4) + "%", 55,30)
  
                  .toBuffer();
                  console.log("Positive : " + positiveAnswer)
                  console.log("Negative : " + negativeAnswer)
                console.log(positiveAnswer / (positiveAnswer + negativeAnswer) * 400)
                if(deleteNumber >= 3) {
                  message.channel.bulkDelete(1)
                }
                if (deleteNumber >= 2) {
                  message.channel.send(new Discord.Attachment(vote))
                  deleteNumber = deleteNumber + 1
                } else {
                  deleteNumber = deleteNumber + 1
                }
          })
      })
    }
    if(message.content === prefix + "loc") {
      message.channel.send("Region : " + message.guild.region + "\nPosition : " + message.guild.position)
    }

    if(message.content.startsWith("test invi")) {
      let member = message.guild.member(message.mentions.users.first());

        if(!member && !args[0]) member = message.author;

        else if(!member && args[0]) {
            member = message.guild.members.get(args[0]);

            if(!member) {
                return message.channel.send(`:x: L'utilisateur n'existe pas, veuillez réessayer`)
            };
        };

        const guild_invites = await message.guild.fetchInvites(),
            invites = guild_invites.filter((invite) => invite.inviter === member.user);
            invitations_uses = guild_invites.forEach(inv => invites.use)

        if(invites <= 0) {
            return message.channel.send(`:x: Cet utilisateur n'a pas d'invitations sur ce serveur`);
        } else {
          message.channel.send(invites.forEach(invite => invite.uses))
        }
    }

    if(message.content.startsWith(prefix + "chmute")) {
      message.delete()
      if(message.member.voiceChannel === undefined) return message.reply("tu dois être connecté dans un channel vocal pour utiliser cette commande !")
      
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("tu n'as pas la permission requise (`Administrateur`) !")
      
      message.guild.members.forEach(m=> {
        if(m.voiceChannel != null && m.voiceChannelID === message.member.voiceChannelID) {
          m.setMute(true).catch()
        }
        })
        message.channel.send("Tout les membres du channel `" + message.member.voiceChannel.name + "` ont bien été mute") 
    }
    if(message.content.startsWith(prefix + "chunmute")) {
      message.delete()
      if(message.member.voiceChannel === undefined) return message.reply("tu dois être connecté dans un channel vocal pour utiliser cette commande !")
      
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("tu n'as pas la permission requise (`Administrateur`) !")
      message.guild.members.forEach(m=> {
        if(m.mute === true) {
        m.setMute(false).catch()
        } else {
          return
        }
      })
      message.channel.send("Tout les membres du channel `" + message.member.voiceChannel.name + "` ont bien été unmute")
    }
    if(message.content.startsWith(prefix + "te")) {
      message.guild.members.forEach(m => {
        message.channel.send(m.user.username + " is mute ? => " + m.mute)
      })
    }

    if(message.content.startsWith(prefix + "dog") ) {
      request("https://dog.ceo/api/breeds/image/random", (error, res, body) => {
        if (error) { return message.channel.send("Error-API"); }
        if (res.statusCode !== 200) { 
          return message.channel.send(`Error: ${res.statusCode}`); 
        }
        var body = JSON.parse(body)
        var dog_embed = new Discord.RichEmbed()
        .setTitle('Voici un chien ! :dog:')
        .setImage(body.message)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        message.channel.send(dog_embed)

      })}
    if(message.content.startsWith(prefix + "cat") ) {
      let { body } = await superagent.get('https://aws.random.cat//meow')
      let cat_embed = new Discord.RichEmbed()
        .setTitle("Voici un chat !")
        .setImage(body.file)
        .setColor("#756969")
    message.channel.send(cat_embed)
    }
    if(message.content.startsWith(prefix + "pand")) {
    let { body } = await superagent.get('https://some-random-api.ml/img/panda')
    let panda_embed = new Discord.RichEmbed()
        .setTitle("Voici un panda ! :panda_face: ")
        .setImage(body.link)
        .setColor("#756969")
    message.channel.send(panda_embed)
    }
    if(message.content.startsWith(prefix + "hu")) {
      let { body } = await superagent.get('https://some-random-api.ml/animu/hug')
      let hug_embed = new Discord.RichEmbed()
          .setTitle(message.author.username + " Fait un **gros** câlin à " + message.mentions.users.first() + ":hug: ")
          .setImage(body.link)
          .setColor("#756969")
      message.channel.send(hug_embed)
    }
    if(message.content.startsWith(prefix + "pika")) {
      let { body } = await superagent.get('https://some-random-api.ml/pikachuimg')
      let pikachu_embed = new Discord.RichEmbed()
          .setTitle("Voici un pikachu sauvage !")
          .setImage(body.link)
          .setColor("#0008ff")
      message.channel.send(pikachu_embed)
    }
    if(message.content.startsWith(prefix + "code-bi")) {
      if(!args[1]) return message.reply("il faut donner un texte à coder en binaire :wink:")
      args.shift()
      let { body } = await superagent.get('https://some-random-api.ml/binary?text=' + args.join(" "))
      
      let text_to_binary_embed = new Discord.RichEmbed()
          .setTitle("Codage binaire")
          .addField("Texte original :", args.join(" "))
          .addField("Message en binaire", body.binary)
          .setColor("#0061ff")
      message.channel.send(text_to_binary_embed)
      }
    if(message.content.startsWith(prefix + "uncode-bi")) {
      if(!args[1]) return message.reply("il faut donner un texte à coder en binaire :wink:")
        args.shift()
        let { body } = await superagent.get('https://some-random-api.ml/binary?decode=' + args.join(""))
        
        let binary_to_text_embed = new Discord.RichEmbed()
            .setTitle("Décodage binaire")
            .addField("Texte original :", args.join(" "))
            .addField("Message traduit :", body.text)
            .setColor("#0061ff")
        message.channel.send(binary_to_text_embed)
    }

    if(message.content.startsWith(prefix + "todo")) {
      var todo1 = new Discord.RichEmbed()
        .setTitle("**Commande à rajouter :** **__remove-emoji__**")
        .setDescription("Permet de retirer un émoji du serveur")
        .addField("Problème :", "Ne parvient pas à retrouver l'emoji")
        .setTimestamp()

      var todo2 = new Discord.RichEmbed()
        .setTitle("**Commande à rajouter :** **__leaderboard/top__**")
        .setDescription("Permet d'obtenir le tableau des 10 meilleurs serveurs (avec le plus de membres) dans l'ordre croissant")
        .addField("Problème :", "Pas les connaissances suffisantes (Possible d'utiliser le .sort() )")
        .setTimestamp()

        message.delete()
        message.channel.send(todo1)
        .then(msg => {
          msg.react("✅")
          msg.react("❌")
        })
        message.channel.send(todo2).then(msg => {
          msg.react("✅")
          msg.react("❌")
        })
    }

    function find_emoji() {
      message.guild.deleteEmoji(message.guild.emojis.find("name", args[1]).id).catch()
      message.channel.send("Emoji supprimé avec succès ! :white_check_mark:")
    }

    if(message.content.startsWith(prefix + "remove-emo")) {
      if(!args[1]) return message.channel.send("Veuillez entrer un emoji à retirer !")
      console.log(args[1])
      //console.log(message.guild.emojis.map(e => e.name).slice(0, 20))
      if(args[1] in message.guild.emojis === true) return message.channel.send("Je ne parviens pas à trouver cet émoji ! Vérifiez que le nom soit correct !")
      if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send("Tu n'as pas la permission requise (`Gérer les emojis`) !")
      setImmediate(find_emoji)
    }


    if(message.content.startsWith(prefix + "help")) {
      if(!args[1]) return message.channel.send(help)
      if(args[1] === "add-emoji") {
        message.channel.send(help_add_emoji)
      }
      if(args[1].startsWith("bowl")) {
        message.channel.send(help_bowling)
      }
      if(args[1].startsWith("ping")) {
        message.channel.send(help_ping)
      }
      if(args[1].startsWith("dog")) {
        message.channel.send(help_dog)
      }
      if(args[1].startsWith("cat")) {
        message.channel.send(help_cat)
      }
      if(args[1].startsWith("count")) {
        message.channel.send(help_count_members)
      }
      if(args[1].startsWith("cardb")) {
        message.channel.send(help_card_bot)
      }
      if(args[1].startsWith("boti")) {
        message.channel.send(help_info_bot)
      }
      if(args[1].startsWith("av")) {
        message.channel.send(help_avatar)
      }
      if(args[1].startsWith("pileouf")) {
        message.channel.send(help_pileouface)
      }
      if(args[1].startsWith("inv")) {
        message.channel.send(help_invite)
      }
      //else{message.channel.send("Ce nom de commande n'existe pas ou n'est pas encore disponible")
      //}
    }

      if(message.content.startsWith (prefix + "ping")) {
        message.channel.send("Calcul en cours ...").then(message => {
          message.edit(':ping_pong: **Pong !** :ping_pong: \nMon ping est de `'+ Math.round(bot.ping) + '` ms')
        })
      }

      if(message.content.startsWith(prefix + "id")) {
        if(!args[1]) return message.channel.send("Veuillez saisir une idée à transmettre au créateur de Milano !")
        message.channel.send("Ton idée a bien été transmise !")
        log_channel.send("**Idée de " + message.author.username + ", sur le serveur " + message.guild.name + "**\n➜ " + args.slice(1).join(" "))
      }
      if(message.content.startsWith(prefix + "give")) {
        var role = message.guild.roles.get(args[1])
        message.guild.members.forEach(m => m.addRole(role) )
        
      }

      if(message.guild.id === "527853450902372362") {
        if(message.content.startsWith(prefix + "vbn")) {
          message.delete()
          var vbn = new Discord.RichEmbed()
        }
      }

      if(message.content.startsWith(prefix + "info")) {
        let dnd_member = 0
        let idle_member = 0
        let offline_member = 0
        let online_member = 0
        let bot_number = 0
        let human_number = 0

        if(message.guild.roles.map(na => na.name).length - 15 <= 0) {
          if(message.guild.roles.map(e => e.name).length === 0) {
            var MessageRole = "Aucun rôle"
          } else {
            var MessageRole = message.guild.roles.map(na => na).sort((roleA, roleB) => roleB.calculatedPosition - roleA.calculatedPosition).slice(0, 15).join(" ❱ ")
          }
        }
        else {
          var MessageRole = message.guild.roles.map(na => na).sort((roleA, roleB) => roleB.calculatedPosition - roleA.calculatedPosition).slice(0, 7).join(" ❱ ") + " ❱ et " + (message.guild.roles.map(na => na.name).length - 15) + " autres rôles..."
        }
        if(message.guild.emojis.map(na => na.name).length - 10 <= 0) {
          if(message.guild.emojis.map(e => e.name).length === 0) {
            var Message = "Aucun émoji"
          } else {
            var Message = message.guild.emojis.map(na => bot.emojis.get(na.id).toString()).slice(0, 10).join(" [⏣](https://discordapp.com/) ")
          }
        }
        else {
          var Message = message.guild.emojis.map(na => bot.emojis.get(na.id).toString()).slice(0, 10).join(" [⏣](https://discordapp.com/) ") + " [⏣](https://discordapp.com/) et " + (message.guild.emojis.map(na => na.name).length - 10) + " autres émojis..."
        }
        let position = 0
        if(message.guild.region === "eu-west") position = "Europe de l'ouest";
        if(message.guild.region === "eu-central") position = "Europe central";
        if(message.guild.region === "sydney") position = "Sydney";
        if(message.guild.region === "hongkong") position = "Hong-Kong";
        if(message.guild.region === "brazil") position = "Brésil";
        if(message.guild.region === "india") position = "Inde";
        if(message.guild.region === "japan") position = "Japon";
        if(message.guild.region === "russia") position = "Russie";
        if(message.guild.region === "singapore") position = "Singapour" ;
        if(message.guild.region === "southafrica") position = "Afriue du sud" 
        if(message.guild.region === "singapore") position = "Singapour" ;
        if(message.guild.region === "us-west") position = "Etats-Unis de l'Ouest" ;
        if(message.guild.region === "us-east") position = "Etats-Unis de l'Est" ;
        if(message.guild.region === "us-south") position = "Etats-Unis du sud" ;
        if(message.guild.region === "us-central") position = "Etats-Unis central" ;
        message.guild.members.forEach(member => {
          if(member.presence.status === "dnd") dnd_member++;
          if(member.presence.status === "idle") idle_member++;
          if(member.presence.status === "offline") offline_member++;
          if(member.presence.status === "online") online_member++;
          if(member.user.bot === true) bot_number++;
          if(member.user.bot === false) human_number++;
          });
        let category = 0
        let text = 0
        let voice = 0
        message.guild.channels.forEach(c => {
          if(c.type === "category") category++;
          if(c.type === "text") text++;
          if(c.type === "voice") voice++;
        })
        var serv_embed = new Discord.RichEmbed()
          .setTitle("Info sur le serveur " + message.guild.name)
          .setThumbnail(message.guild.iconURL)
          .addField("__**Propriétaire :**__", "Nom : " + message.guild.owner.user.username +"\nID : " + message.guild.ownerID)
          .addField("__**Membres : " + message.guild.memberCount +"**__", bot.emojis.get("592780406437183489") + " Bots : " + bot_number + " [❱](https://discordapp.com/) 👥 Humains " + human_number + "\n\n" + bot.emojis.get("593390576615948305") + " En ligne [⏣](https://discordapp.com/) " + online_member + "\n" + bot.emojis.get("593390486123839488") + " Ne pas déranger [⏣](https://discordapp.com/) " + dnd_member + "\n" + bot.emojis.get("593390520039112704") + " Inactif [⏣](https://discordapp.com/) " + idle_member + "\n" + bot.emojis.get("593390555849949196") + " Hors ligne [⏣](https://discordapp.com/) " + offline_member)
          .addField("__**Date de création**__", moment(message.guild.createdAt).format("L") + " à " + moment(message.guild.createdAt).format("LT"))
          .addField("__**Localisation**__", position)
          .addField("__**Emojis**__", Message)
          .addField("__**Rôles (" + message.guild.roles.map(r => r.name).length + ")**__", MessageRole)
          .addField("__**Channels (" + message.guild.channels.map(c => c.name).length + ")**__", "Catégorie [➜](https://discordapp.com/) " + category + "\nTextuel [➜](https://discordapp.com/) " + text + "\nVocal [➜](https://discordapp.com/) " + voice)
          .setTimestamp()
          .setFooter(message.guild.name, message.guild.iconURL)
          message.channel.send(serv_embed)
      }
      if(message.content.startsWith(prefix + "guess")){
        message.reply("Le nombre a bien été choisie. A toi de jouer !")
        party_launch = true
        randnum = Math.floor(Math.random() * (max_num - 0) + 0)
        console.log("Le nombre choisi est : " + randnum)
    }
    if(party_launch && message.content != Number){
        if(Number.isInteger(parseInt(message.content))){
            if(message.content > randnum){
                message.reply("Le nombre est plus petit !")
            }
            else if(message.content < randnum){
                message.reply("Le nombre est plus grand !")
            }
            else{
                message.channel.send(message.author + ' à gagner la partie !')
                party_launch = false
            }
        }
    }
      if(message.content.startsWith(prefix + "cle")) {
        if(!args[1]){
          message.delete()
          message.channel.send("Veuillez saisir un nombre de messages à supprimer !")
          .then(msg => msg.delete(5000))
          return

        }
        if(args[1] > 100 | args[1] <1) return message.channel.send("Je ne peux supprimer que 100 messages à la fois !")
        .then(message => {
          message.delete(10000).catch(error => message.channel.send("Erreur : " + error))
        })
        const fetched = await message.channel.fetchMessages({limit: args[1]}).catch(error => message.channel.send("Erreur : " + error));
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'as pas les permissions nécessaires pour utiliser cette commande, tu as besoin d'avoir la permission `Gérer les messages` pour pouvoir l'utiliser !")
        message.delete().catch(error => message.channel.send("Erreur : " + error))
        
        message.channel.bulkDelete(fetched.size, true).catch()
      
        message.channel.send(":white_check_mark: " + fetched.size + " messages ont été supprimés !").catch(error => message.channel.send("Erreur : " + error))
        .then(message => {
          message.delete(5000).catch(error => message.channel.send("Erreur : " + error))
        })
      }

      if(message.content.startsWith(prefix + "create-channel")) {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return ("Tu n'as pas la permission requise (`Gérer les salons`)")
        if(!args[1]) return message.channel.send("Veuillez entrer le type de salon (`text` ; `voice` ; `category`)")
        if(args[1] != "text" && args[1] != "voice" && args[1] != "category") return message.channel.send("Veuillez entrer un type de salon valide (`text` ; `voice` ; `category`)")
        if(!args[2]) return message.channel.send("Veuillez entrer le nom du salon")
        message.guild.createChannel(args.slice(2).join(" "), {
          type : args[1]
          }).then(message.channel.send (":white_check_mark: Salon créé sous le nom de `" + args.slice(2).join(" ") + "`, type : `" + args[1] + "`" )).catch(error => message.channel.send("Erreur : " + error))
      }

      function timer() {
        message.author.createDM().then(function (channel) {
        return channel.send("Hey ! N'oublie pas de `" + args.slice(2).join(" ")+ "` ")
        })
      }
      function UPTIME(duration) {
        var milliseconds = parseInt((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
          
          return hours + "h " + minutes + "min " + seconds + "s";
        }
    
      if(message.content.startsWith(prefix + "rmd")) {
        
        if(!args[1]) return message.channel.send(":x: **Erreur** :x:\nEntre un temps en seconde pour savoir quand je vais devoir te rappeler de faire quelque chose !")
        if(isNaN(args[1]) | args[1] > 2000000) return message.channel.send(":x: **Erreur** :x:\nEntre un temps valide en secondes !\n*Exemple : " + prefix + "rmd 100 appeler MilanoBot*")
        if(!args[2]) return message.channel.send(":x: **Erreur** :x:\nMerci d'entrer ce que vous voulez que je vous rappelle !")
        
        message.channel.send("Je vais te rappeler de `" + args.slice(2).join(" ") + "` dans " + UPTIME(args[1]*1000))
        setTimeout(timer, (args[1]*1000))
      }

      if(message.content.startsWith(prefix + bot.user.username)) {
        var main_server = bot.guilds.get("556157666288861185");
        
        var bot_status = bot.user.presence.status
        if(bot_status === "dnd") {
            bot_status = "Ne Pas Déranger"
        }
        if(bot_status === "online") {
            bot_status = "En ligne"
        }
        if(bot_status === "offline") {
            bot_status = "Hors-ligne"
        }
        if(bot_status === "idle") {
            bot_status = "Inactif"
        }
        function UPTIME(duration) {
        var milliseconds = parseInt((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
          
          return hours + "h " + minutes + "min " + seconds + "s";
        }
        var log_channel = bot.channels.get("587256158956421120");
        var last_restart = UPTIME(bot.uptime)
        var connected_or_not = new Discord.RichEmbed()
            .setTitle("Information sur le bot")
            .addField(bot.guilds.get("556157666288861185").emojis.get("587303511927291904") + " Statut :" , "⏣ "+ bot_status , true)
            .addField( bot.guilds.get("556157666288861185").emojis.get("587297954625355777") + " Nombre de serveurs :" , "⏣ Sur " + bot.guilds.size + " serveurs",true)
            .addField(":repeat: Dernier redémarrage :", "⏣ " + last_restart,true)
            .addField(bot.guilds.get("556157666288861185").emojis.get("588795486085841040") + " Temps de latence :", "⏣ " + Math.round(bot.ping)+ " ms",true)
            .setTimestamp()
            .setThumbnail("https://thumbs.gfycat.com/GiftedTinyHammerheadshark-size_restricted.gif")
            .setFooter(message.author.username, message.author.displayAvatarURL)
            .addField(":busts_in_silhouette: Nombre d'utilisateurs au total :", "⏣ " + bot.users.size + " utilisateurs")
            .addField(bot.emojis.get("594108441887506442") + " Différents liens :", "⏣ [Invitez Milano sur votre serveur](https://discordapp.com/oauth2/authorize?client_id=581124441191481382&scope=bot&permissions=8)\n⏣ [Rejoignez mon serveur !](https://discord.gg/sjr5HBa)\n⏣ [Notre serveur RP](https://discord.gg/uUs8BJk)")
            message.channel.send(connected_or_not)
      }

    if(message.content.startsWith( prefix + "top")) {
      var serv_list = bot.guilds.sort(gu => gu.name + " | " + gu.memberCount + " membres")
      message.channel.send(serv_list)
    }

    if(message.content.startsWith(prefix + "inv")) {
      var bot_invite = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/avatars/581124441191481382/c951f6caca9a2c2d6d6439f55388cb67.png?size=2048")
        .setColor("#1cd800")
        .addField("Clique ci-dessous pour m'inviter sur ton serveur !" , "[Invite moi !](https://discordapp.com/oauth2/authorize?client_id=581124441191481382&scope=bot&permissions=2146958839)")
      message.channel.send(bot_invite)
    }
    if(message.content.startsWith(prefix + "bot")) {
      message.channel.send(bot_info)
    }

    if(message.content.startsWith(prefix + "duo")) {
      const partenaire = message.mentions.users.first()
      if(partenaire) {
        const member = message.guild.member(partenaire)
        if(member) {
          var list = [message.author, member]
        message.channel.send("**" + list.join("** et **") + "**, vous avez bien été inscrit(e)s au tournoi 2vs2 !")
        bot.channels.get("590576142709424147").send("**Nouveaux inscrit(e)s :** " + list.join(" et "))
        }
      } else {
        message.reply("entrer le nom de la personne avec qui vous souhaitez vous inscrire !")
      }
      
    }

    if(message.content.startsWith(prefix + "solo")) {
      message.reply(" tu as bien été inscrit(e) pour le tournoi 1vs1 !")
      bot.channels.get("590577660233515009").send("**Nouvel inscrit : **" + message.author)
    }

    if(message.content.startsWith(prefix + "top-invi")) {
      let invites = await message.guild.fetchInvites();
      invites = invites.array();

      arraySort(invites, "uses", {reverse: true})


      let possibleInvites = [['Membre','Utilisation']]
      invites.forEach(function (invite) {
        possibleInvites.push([invite.inviter.username, invite.uses]);
      })
      var leaderboard_invite = new Discord.RichEmbed()
        .setTitle("Tableau des invitations")
        .addField("Leaderboard ", `\`\`${table.table(possibleInvites)}\`\``)
      message.channel.send("Leaderboard\n" + table.table(possibleInvites))  
    }

    if(message.content.startsWith(prefix + "bow")){
      console.log("Commande exécuté : bowling")
      var nbquilles = Math.floor(Math.random() * 12)
      var FBowling = new Discord.RichEmbed()
          .setColor('0xDF013A')
          .setTitle(':bowling:  Dommage  :bowling:')
          .addField("Tu n'as pas fait de strike, dommage !" , "Tu n'as renversé que " + nbquilles + " quille(s)" , true)
          .setFooter("Tu auras peut-être plus de chance la prochaine fois ;)")
      var SBowling = new Discord.RichEmbed()
          .setColor('0x01DF01')
          .setTitle(':bowling:  **S T R I K E**  :bowling:')
          .addField("Tu as fait un strike !", "Tu as renversé 10 quilles !", true)
      if(nbquilles >= 10){
          message.channel.send(SBowling)
          console.log('Résultat : STRIKE')
      }else{
          message.channel.send(FBowling)
          console.log('Résultat : PERDU avec ' + nbquilles + ' quille(s)')
      }

    }

    if(message.content.startsWith(prefix + "pileouface")) {
      
      var pile_ou_face = Math.floor(Math.random() * 2)
      if(!args[1]) return message.reply("Merci d'entrer le côté de la pièce que vous voulez choisir (`pile` ou `face)`")
      console.log("Choix :" + args[1])
      console.log("0 = Pile || 1 = Face")
      console.log(pile_ou_face)
      if(pile_ou_face === 0 && args[1] === "pile") {
        var pile_victory = new Canvas(500,500)
          
          .setColor("#000000")
          .addCircle(250,250,250)

          .setColor("#e1ff00")
          .addCircle(250,250,235)
          
          .setColor('#000000')
          .setTextFont('150px Cooper Black')
          .addText("PILE", 70, 300, 450)

          .addBeveledRect(60,315,380,40,25)

          .toBuffer();
        message.channel.send(new Discord.Attachment(pile_victory))
        message.channel.send("Bravo ! Tu as gagné !")
      }
      if(pile_ou_face === 1 && args[1] === "face") {
        var face_victory = new Canvas(500,500)
          
          .setColor("#000000")
          .addCircle(250,250,250)

          .setColor("#e1ff00")
          .addCircle(250,250,235)
          
          .setColor('#000000')
          .setTextFont('150px Cooper Black')
          .addText("FACE", 40, 300, 450)

          .addBeveledRect(60,315,380,40,25)

          .toBuffer();
        message.channel.send(new Discord.Attachment(face_victory))
        message.channel.send("Bravo ! Tu as gagné !")
      }
      if(pile_ou_face === 0 && args[1] === "face") {
        var pile_victory = new Canvas(500,500)
          
          .setColor("#000000")
          .addCircle(250,250,250)

          .setColor("#e1ff00")
          .addCircle(250,250,235)
          
          .setColor('#000000')
          .setTextFont('150px Cooper Black')
          .addText("PILE", 70, 300, 450)

          .addBeveledRect(60,315,380,40,25)

          .toBuffer();
        message.channel.send(new Discord.Attachment(pile_victory))
        message.channel.send("Dommage, tu as perdu ! Tu aurais dû choisir pile !")
      }
      if(pile_ou_face === 1 && args[1] === "pile") {
        var pile_victory = new Canvas(500,500)
          
          .setColor("#000000")
          .addCircle(250,250,250)

          .setColor("#e1ff00")
          .addCircle(250,250,235)
          
          .setColor('#000000')
          .setTextFont('150px Cooper Black')
          .addText("FACE", 60, 300, 450)

          .addBeveledRect(60,315,380,40,25)

          .toBuffer();
        message.channel.send(new Discord.Attachment(pile_victory))
        message.channel.send("Dommage, tu as perdu ! Tu aurais dû choisir face !")
      }
    }  
    
    if(message.content.startsWith(prefix + "av")) {
      var av_perso = new Discord.RichEmbed()
        .setTitle("Voici ton avatar")
        .setImage(message.author.avatarURL)
      if(!args[1]) return message.channel.send(av_perso)
        const member = message.guild.member(message.mentions.users.first())
        if(member) {
          var av = member.user.avatarURL
          var av_embed = new Discord.RichEmbed()
            .setTitle("Voici l'avatar de " + member.user.username)
            .setImage(av)
          message.channel.send(av_embed)
        }
    }
    async function canvasBienvenueDelTTaria() {
      const imageUrlRegex = /\?size=2048$/g;
    
      var link = "https://cdn.discordapp.com/attachments/511579258641186837/592401363204440064/B370E29B-C272-427E-B332-87D1CC89AF96.jpeg"
      const result = await fetch(link.replace(imageUrlRegex, "?size=128"))
      const result1 = await fetch(message.author.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
      if (!result.ok) throw new Error("Failed to get the avatar.");
      const name = message.author.username.length > 16 ? message.author.username.substring(0, 16) + "..." : message.author.username;
      const image = await result.buffer();
      const avatar = await result1.buffer();
    
      return new Canvas(2048,1536)
      .addBeveledImage(image, 0, 0, 2048, 1536, 25)
      .addCircularImage(avatar, 623, 770, 253)
      .setTextFont("100px Forte")
      .addText(name, 910 , 650, 780)
      .addText(message.guild.memberCount + "ème membre !", 920, 760, 780)
    
      
      .toBufferAsync()
      
    }

    if(message.content.startsWith(prefix + "canv")) {
      message.channel.send(new Discord.Attachment( await canvasBienvenueDelTTaria(), "bienvenue-delttaria.jpg"))
      
    }

    if (message.content.startsWith(prefix + 'play')) {
        let args = message.content.split(" ")
        if (message.member.voiceChannel) {
          if(!args[1]) return message.channel.send("Erreur ! Merci d'ajouter à lien YT")
          message.member.voiceChannel.join()
            .then(connection => {
              message.reply('Je suis bien connecté !');
              let stream = YoutubeStream(args[1])
              connection.playStream(stream)
            })
            .catch(console.log);
        } else {
          message.reply("Connecte toi d'abord dans un salon vocal !");
        }
    }
})

bot.on("guildMemberAdd", async (member) => {
  async function canvasBienvenueDelTTaria() {
    const imageUrlRegex = /\?size=2048$/g;
  
    var link = "https://cdn.discordapp.com/attachments/511579258641186837/592401363204440064/B370E29B-C272-427E-B332-87D1CC89AF96.jpeg"
    const result = await fetch(link.replace(imageUrlRegex, "?size=128"))
    const result1 = await fetch(member.user.avatarURL.replace(imageUrlRegex, "?size=128"));
    if (!result.ok) throw new Error("Failed to get the avatar.");
    const name = member.user.username.length > 20 ? member.user.username.substring(0, 16) + "..." : member.user.username;
    const image = await result.buffer();
    const avatar = await result1.buffer();
  
    return new Canvas(2048,1536)
    .addBeveledImage(image, 0, 0, 2048, 1536, 25)
    .addCircularImage(avatar, 623, 770, 253)
    .setTextFont("100px Forte")
    .addText(name, 910 , 650, 780)
    .addText(member.guild.memberCount + "ème membre !", 920, 760, 780)
  
    
    .toBufferAsync()
    
  }

  async function canvasBienvenue() {
    const imageUrlRegex = /\?size=2048$/g;

    const result = await fetch(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
    if (!result.ok) throw new Error("Failed to get the avatar.");
    const name1 = member.user.username.length > 16 ? member.user.username.substring(0, 16) + "..." : member.user.username;
    const avatar = await result.buffer();

    return new Canvas(1000,150)
    .setColor("#FFFFFF")
    .addBeveledRect(50,12,948,126 ,25)
    .setColor("#000000")
    .addBeveledRect(50,15,945,120 ,25)
    .setColor("#d60606")
    .addCircle(75, 75, 70)
    .addCircularImage(avatar, 75, 75, 65)

    .setColor("#FFFFFF")
    .setTextFont("bold 50px Arial Rounded MT Bold")
    .addText(name1,150,65)
    .setTextFont(POLICE_DECRITURE)
    .addText("Tu es le " + member.guild.memberCount + "ème membre de " + member.guild.name + " !",150, 120)

    
    .toBufferAsync();
}


  if(member.guild.name === "Surviv.io Fr") {
  const join_leave_channel = member.guild.channels.find(ch => ch.id=== '555430904592334848');
  var POLICE_DECRITURE = "bold 30px Forte"
  if (!join_leave_channel) return console.log('Pas de channel trouvé sur Surviv.io Fr');

    join_leave_channel.send(new Discord.Attachment(await canvasBienvenue(), "test.jpg"))
    
  }
  if(member.guild.name === "Le prince de nul part") {
    const join_leave_channel = member.guild.channels.find(ch => ch.name === '👳marhabaan-bikum👳');
    var POLICE_DECRITURE = "bold 30px Forte"
    if (!join_leave_channel) return console.log('Pas de channel trouvé sur Le prince de nul part');
  
      join_leave_channel.send(new Discord.Attachment(await canvasBienvenue(), "test.jpg"))
      
    }
  if(member.guild.name === "DelTTΔriΔ") {
    const join_leave_channel = member.guild.channels.find(ch => ch.id=== '592457535588401202');
    var POLICE_DECRITURE = "bold 30px Forte"
    if (!join_leave_channel) return console.log('Pas de channel trouvé sur TestServer');
  
      join_leave_channel.send(new Discord.Attachment(await canvasBienvenueDelTTaria(), "bienvenue-" + member.guild.name +".jpg"))
      
    }
  if(member.guild.name === "TestServer") {
    const join_leave_channel = member.guild.channels.find(ch => ch.id === '585522454739550208');
    var POLICE_DECRITURE = "bold 30px Forte"
    if (!join_leave_channel) return console.log('Pas de channel trouvé sur TestServer');
    
    join_leave_channel.send(new Discord.Attachment(await canvasBienvenue(), "test.jpg"))

  }

  if(member.guild.name === "team samoth") {
    const join_leave_channel = member.guild.channels.find(ch => ch.id === '548526866588500009');
    var POLICE_DECRITURE = "bold 30px Forte"
    if (!join_leave_channel) return console.log('Pas de channel trouvé sur team samoth');
    
    join_leave_channel.send(new Discord.Attachment(await canvasBienvenue(), "test.jpg"))

  }

  if(member.guild.name === "𝐋𝐄 𝐑𝐄𝐍𝐃𝐄𝐙-𝐕𝐎𝐔𝐒 𝐃𝐄𝐒 𝐓𝐄𝐀𝐌𝐒") {
    const join_leave_channel = member.guild.channels.find(ch => ch.id === '549531136896794624');
    var POLICE_DECRITURE = "bold 30px Cambria Math"
    if (!join_leave_channel) return console.log('Pas de channel trouvé sur 𝐋𝐄 𝐑𝐄𝐍𝐃𝐄𝐙-𝐕𝐎𝐔𝐒 𝐃𝐄𝐒 𝐓𝐄𝐀𝐌𝐒');
  
      join_leave_channel.send(new Discord.Attachment(await canvasBienvenue(), "test.jpg"))

  }
  if(member.guild.name === "𝐓𝐨𝐮𝐫𝐧𝐨𝐢𝐬 𝐅𝐑") {
    const join_leave_channel = member.guild.channels.find(ch => ch.id === '562027779466723339');
    var POLICE_DECRITURE = "bold 30px Cambria Math"
    if (!join_leave_channel) return console.log('Pas de channel trouvé sur 𝐓𝐨𝐮𝐫𝐧𝐨𝐢𝐬 𝐅𝐑"');
  
      join_leave_channel.send(new Discord.Attachment(await canvasBienvenue(), "test.jpg"))
  }
  if(member.guild.name === "⭐Ł¡πk ĢลπĢ⭐") {
      const join_leave_channel = member.guild.channels.find(ch => ch.id === '537552210997936128');
      var POLICE_DECRITURE = "bold 30px Cambria Math"
      if (!join_leave_channel) return console.log('Pas de channel trouvé sur ⭐Ł¡πk ĢลπĢ⭐');
    
      join_leave_channel.send(new Discord.Attachment(await canvasBienvenue(), "test.jpg"))
  } else {
    const join_leave_channel = member.guild.channels.find(ch => ch.name === 'bienvenue');
    var POLICE_DECRITURE = "bold 30px Forte"
    if (!join_leave_channel) return console.log('Pas de channel trouvé au nom de "bienvenue" sur ' + member.guild);
  
      join_leave_channel.send(new Discord.Attachment(await canvasBienvenue(), "test.jpg"))

  }

})
