const settings = require('../settings.json');

module.exports = async message => {
    const sql = require('sqlite');
    sql.open('./auth.sqlite');
    let client = message.client;
    if (message.author.bot || message.author.id == client.user.id) return;
    let command = message.content.split(' ')[0].slice(settings.prefix.length);
    //params dec
    let params = message.content.split(' ').slice(1);    
    let cmd;
    if (client.commands.has(command)) {
        cmd = await client.commands.get(command);
        await cmd.run(client, message, params)
    } else if (client.aliases.has(command)) {
        cmd = await client.commands.get(client.aliases.get(command));
        await cmd.run(client, message, params)
    }

    
}