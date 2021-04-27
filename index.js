const discord = require("discord.js");
const botConfig = require("./botConfig.json");

const client = new discord.Client();
client.login(botConfig.token);

client.on("ready", async () => {
    
console.log(`${client.user.username} is online.`);
client.user.setActivity("!help", {type: "Playing"});

});

client.on("message", async message =>{}

   if(message.author.bot) return;

   if(message.channel.type == "dm") return;

   var prefix = botConfig.prefix;

   var messageAray = message.content.split(" ");

   var command = messageAray[0];

   if(command === `${prefix}support`){
       return message.channel.send("Heb je support nodig? Maak dan een ticket aan!");
    }

    if(command === `${prefix}info`){
        
        var botEmbed = new discord.MessageEmbed()
            .setTitle("Wat voor bot is dit?")
            .setDescription("Dit is een alegmene bot genaamd: Piep Piep. Dit is een bot waarmee je kan Solliciteren, tickets aanmaken en nog veel meer!")
            .setColor("#353ddb")
            .addFields(
                {name:"We hopen dat je een leuke tijd gaat hebben met deze bot!", value:"Een moderatie bot en soon nog meer functies!"},
                {name:"Support server soon!", value:"https://discord.gg/EubCakq"},
                {name:"Heb je klachten en of vragen meld dan in de DM van DJ_Yigittaha99#9292", value:"DJ_Yigittaha99#9292"},
                {name:"Eigenaar bot", value:"DJ_Yigittaha99#9292"}
    )
            .addField("Bot naam", client.user.username)
            .setThumbnail("https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png")
            .setImage("https://th.bing.com/th/id/OIP.K4ibJlGOwPYeQBO8Ewv1hQHaE8?pid=ImgDet&rs=1")
            .setFooter("Medemogelijk gemaakt door Tahatjuh", "https://informaticalessen.be/wp-content/uploads/2015/08/copyright.jpg")
            .setTimestamp();
        
            return message.channel.send(botEmbed);
     }
     if(command === `${prefix}serverinfo`){
        
        var botEmbed = new discord.MessageEmbed()
            .setTitle("Wat voor bot is dit?")
            .setDescription("Dit is een alegmene bot genaamd: Piep Piep. Dit is een moderatie bot een sollicitatie bot (soon) en nog veel meer!")
            .setColor("#00d5ff")
            .addFields(
                {name:"Bot naam", value: client.user.username},
                {name:"Je bent de server gejoined op:", value: message.member.joinedAt},
                {name:"Totaal Members", value:message.guild.memberCount},
                    );
        
            return message.channel.send(botEmbed);
            }
     
            if(command === `${prefix}kick`)         
     
               // !kick @spelerNaam reden hier

             var args = message.content.slice(prefix.length).split(/ +/);

             if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Helaas kan jij dit command niet gebruiken omdat u niet de KICK_MEMBERS permissie hebt");

             if(!message.guild.me.hasPermission("KICK_MEMBERS"))return message.reply("Geen perms");

             if(!args[1]) return message.reply("Geen gebruiker opgegeven!");

             if(!args[2]) return message.reply("Geen reden opgegeven!");

             var kickUser = message.mentions.users.first() || message.guild.members.get(args[1]);

             var reason = args.slice(2).join(" ");

             if(!kickUser) return message.reply("Gebruiker niet gevonden");

             var embedPromt = new discord.MessageEmbed()
                .setColor("GREEN")
                .setTitle("Gelieve binnen 30 sec. te reageren")
                .setDescription(`Wil je ${kickUser} kicken?`);

                var embed = new discord.MessageEmbed()
                    .setColor("#ff0000")
                    .setFooter(message.member.displayName)
                    .setTimestamp()
                    .setDescription(`**Gekicked: ** ${kickUser} (${kickUser.id})
                    **Gekicked door:** ${message.author}
                    **Reden:** ${reason}`)

                message.channel.send(embedPromt).then(async msg => {

                    // var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

                    // if(emoji === "✅"){

                    //     msg.delete();

                    //     kickUser.kick(reason).catch(err =>{
                    //         if(err) return message.reply("Er is iets fout gegaan");
                    //     });

                    //     message.channel.send(embed);
                        
                    // }else if(emoji === "❌"){

                    //     msg.delete();

                    //     message.reply("Kick geannuleerd").then(m => m.delete(5000));
                    
                    // }  

                    message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 30000}).then(collected => {

                     if(collected.first().content.toLowerCase() === 'Ja'){

                        kickUser.kick(reason).catch(err => {
                            if(err) return message.reply("Er is iets fout gegaan");
                        });

                    }else {
                        message.reply("Geanuleerd");
                              
                            
                
                }

        }

                    );


async function promptMessage(message, author, time, reaction){

    time *= 1000;

    for(const reaction of reactions)  {
        await message.react(reaction);
    }

    var filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    return message.awaitReactions(filter, {max:1, time: time}).then(collected => collected.first() && collected.first.emoji.name);

});
