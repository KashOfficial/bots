
exports.run = async(client, message) => {
   const sql = require('sqlite');
const rows = await sql.all(`SELECT auth, name FROM settings`)
        await message.channel.send(rows < 1 ? 'NONE' : '**-> available Keys: **' + rows.map(r => r.name).join('\n') + rows.map(r => r.auth).join('\n'));
        //await message.channel.send(rows.name, rows.auth)

}

exports.conf = {
  aliases: [],
  enabled: true,
  permLevel: 0
};

exports.help = {
  name: 'fetch',
  description: 'ping',
  usage: 'fetch',
};
//+ rows.map(r => r.auth).join('\n')