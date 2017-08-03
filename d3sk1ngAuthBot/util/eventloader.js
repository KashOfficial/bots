const reqEvent = (event) => require(`../events/${event}`);

module.exports = client => {
    //ready
  client.on('ready', () => reqEvent('ready')(client));
    //message
    client.on('message', reqEvent('message'));
    //guild event
    client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
}

//only the needed events included