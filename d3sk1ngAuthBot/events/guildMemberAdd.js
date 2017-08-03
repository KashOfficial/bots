const Discord = require('discord.js');
module.exports = async(member) => {

let role = member.guild.roles.find("name", "New User");
let user = member
    const sql = require('sqlite');
    const settings = require('../settings.json');

var key = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
//member.guild.channels.get('342002833996120064').send(`Hello there ${user}\nWelcome to ${member.guild.name}\n\nPlease enter the key to gain access to the server you will be given one chance. If not you will have to rejoin. You have 5 minutes to enter ;\n\n\`${key}\``).then(() => sql.run(`INSERT INTO settings (name, auth) VALUES (?, ?)`, [user, key]))


const embed = new Discord.RichEmbed()
.setTitle('Authentication')
.setColor(0xff0000)
.setDescription(`Hello there ${user}\nWelcome to ${member.guild.name}\n\nPlease enter the key to gain access to the server you will be given one chance. If not you will have to rejoin. You have 5 minutes to enter ;\n\n\`${key}\``)


member.guild.channels.get('342002833996120064').send({embed}).then(() => sql.run(`INSERT INTO settings (name, auth) VALUES (?, ?)`, [user, key]))



let resp = await member.guild.channels.get('342002833996120064').awaitMessages(m => m.author.id == member.id, {
    'errors': ['time'],
    'max': 1,
    time: 3000000
})
resp = resp.first();
if(!resp) return;

sql.get(`SELECT auth FROM settings WHERE auth= '${key}'`).then(row => {
    if(resp.content === row.auth) {
     member.guild.channels.get('342002833996120064').send('Done')
     member.guild.members.get(member.id).addRoles(role)
} else member.guild.channels.get('342002833996120064').send('Rejoin')
})

}