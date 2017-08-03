exports.run = function (client, message) {
const sql = require('sqlite');
sql.run(`CREATE TABLE IF NOT EXISTS settings (role TEXT, auth TEXT, name TEXT, status TEXT)`).then(() => {
    sql.run(`INSERT INTO settings (role, auth,  name, status) VALUES (?, ?, ?, ?)`, [, , , 'true'])
}).then(() => {

sql.get(`SELECT * FROM settings`).then(row => {
     message.channel.send(row.status);
   //  message.channel.send(row.status);
})
})
/*
sql.run(`UPDATE settings SET status= 'false'`).then(() => {
    sql.get(`SELECT status FROM guildsettings`).then(row => {
        message.channel.send('Status updated to :', row.status)
    })
})
*/

}

exports.conf = {
  aliases: [],
  enabled: true,
  permLevel: 0
};

exports.help = {
  name: 'config',
  description: 'ping',
  usage: 'config',
};
