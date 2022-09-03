const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.on("ready", () => {
    console.log("bot opérationel");
});

client.on("messageCreate", message => {
    if(message.author.bot) return;

    console.log(message); 
    if(message.content === "salut"){
        message.reply("Hey comment tu vas ?");
    }
    else if(message.content === "hey"){
        message.reply("salut comment tu vas ?");
    }
    else if(message.content === "coucou"){
        message.reply("salut comment tu vas ?");
    }
    else if(message.content === "ça va"){
        message.reply("je vais bien aussi !!");
    }
    else if(message.content === "ça va et toi ?"){
        message.reply("je pète toujours la forme ! :)");
    }
    else if(message.content === "oui et toi ?"){
        message.reply("je pète toujours la forme ! :)");
    }
    else if(message.content === "bye"){
        message.reply("à la prochaine ! :)");
    }
    else if(message.content === "bonne soirée"){
        message.reply("merci à toi aussi ! ");
    }
    else if(message.content === "c'est qui ton maitre ?"){
        message.reply("mon maitre c'est Naobu le meilleur dresseur pokémon");
    }
    else if (message.content === "help"){
        message.reply("les commandes du bot sont : \n ...");
    }
    else if(message.content === "mention"){
        message.reply("Mention d'un utilisateur : <@" +message.author.id + "> \n Mention d'un salon : <#" + message.channel.id + ">");
    } 
})









client.login("MTAxNTU3MDU4MDU1ODMyMzc5Mg.GXCKN0.kBGZh0Fv1V0PL9Ykok17c5mTezOB-AKvwo9c9M");





