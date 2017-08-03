const settings = require('../settings.json');
exports.run = function (client, message) {

    if(message.content.startsWith(settings.prefix))
message.channel.send(`pong`)



}

exports.conf = {
  aliases: [],
  enabled: true,
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'ping',
  usage: 'ping',
};
