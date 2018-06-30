const snekfetch = require('snekfetch');
const Discord = require("discord.js");
const encode = require('strict-uri-encode');

exports.run = (client, message, Discord, prefix) => {

  const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

  let [title, contents] = args.join(" ").split("|");
  if(!contents) {
    [title, contents] = ["Achievement Get :", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if(title.length > 22 || contents.length > 22) return message.edit("Max Length: 22 Characters. Soz.").then(message.delete.bind(message), 2000);
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));
  message.delete(5000);
  message.react("445426199892590602");





}
