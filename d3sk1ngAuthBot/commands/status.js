exports.run = function (client, message) {
const sql = require('sqlite');

sql.get(`SELECT * FROM settings`).then(row => {
 // message.channel.send(row < 1 ? 'none' : 'Maps' + row.map(r => r.name).join('\n') )
})

}

exports.conf = {
  aliases: [],
  enabled: true,
  permLevel: 0
};

exports.help = {
  name: 'status',
  description: 'ping',
  usage: 'status',
};
