const Discord = require('discord.js');
const settings = require('./settings.json');
const client = new Discord.Client();
const PersistentCollection = require('djs-collection-persistent');
//dependencies 
const fs = require('fs');
const sql = require('sqlite');
const moment = require('moment');

//databse gateway 
sql.open('./auth.sqlite');

//event loader
require('./util/eventloader')(client);

//log
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

//command handler 
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}. OK`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


//sql Creation
/*
client.on('message', (message) => {
  if(message.content.startsWith(settings.prefix + 'conf'))
    {
  sql.get('SELECT * FROM settings').then(row => {
  if (!row) {
  sql.run(`CREATE TABLE IF NOT EXISTS settings (role TEXT, auth TEXT, name TEXT, status TEXT)`).then(message.channel.send('done'))
  } else message.channel.send(row.auth)
 })
    }
})

*/


client.login(settings.token)