// message
client.on("messageCreate", function(message){
    console.log(`message is created -> ${message}`);
});

// messageDelete
client.on("messageDelete", function(message){
    console.log(`message is deleted -> ${message}`);
});

// messageDeleteBulk
client.on("messageDeleteBulk", function(messages){
    console.log(`messages are deleted -> ${messages}`);
});

// messageReactionAdd
client.on("messageReactionAdd", function(messageReaction, user){
    console.log(`a reaction is added to a message`);
});

// messageReactionRemove
client.on("messageReactionRemove", function(messageReaction, user){
    console.log(`a reaction is removed from a message`);
});

// messageReactionRemoveAll
client.on("messageReactionRemoveAll", function(message){
    console.error(`all reactions are removed from a message`);
});

// messageUpdate
client.on("messageUpdate", function(oldMessage, newMessage){
    console.log(`a message is updated`);
});

// presenceUpdate
client.on("presenceUpdate", function(oldMember, newMember){
    console.log(`a guild member's presence changes`);
});

// ready
client.on("ready", function(){
  console.log(`the client becomes ready to start`);
});

// channelCreate
client.on("channelCreate", function(channel){
    console.log(`channelCreate: ${channel}`);
});

// channelDelete
client.on("channelDelete", function(channel){
    console.log(`channelDelete: ${channel}`);
});

// channelPinsUpdate
client.on("channelPinsUpdate", function(channel, time){
    console.log(`channelPinsUpdate: ${channel}:${time}`);
});
    
// channelUpdate
client.on("channelUpdate", function(oldChannel, newChannel){
    console.log(`channelUpdate -> a channel is updated - e.g. name change, topic change`);
});

// clientUserGuildSettingsUpdate
client.on("clientUserGuildSettingsUpdate", function(clientUserGuildSettings){
    console.log(`clientUserGuildSettingsUpdate -> client user's settings update`);
});

// clientUserSettingsUpdate
client.on("clientUserSettingsUpdate", function(clientUserSettings){
    console.log(`clientUserSettingsUpdate -> client user's settings update`);
});

// debug
client.on("debug", function(info){
    console.log(`debug -> ${info}`);
});

// disconnect
client.on("disconnect", function(event){
    console.log(`The WebSocket has closed and will no longer attempt to reconnect`);
});

// emojiCreate
client.on("emojiCreate", function(emoji){
    console.log(`a custom emoji is created in a guild`);
});

// emojiDelete
client.on("emojiDelete", function(emoji){
    console.log(`a custom guild emoji is deleted`);
});

// emojiUpdate
client.on("emojiUpdate", function(oldEmoji, newEmoji){
    console.log(`a custom guild emoji is updated`);
});

// error
client.on("error", function(error){
    console.error(`client's WebSocket encountered a connection error: ${error}`);
});

// guildBanAdd
client.on("guildBanAdd", function(guild, user){
    console.log(`a member is banned from a guild`);
});

// guildBanRemove
client.on("guildBanRemove", function(guild, user){
    console.log(`a member is unbanned from a guild`);
});

// guildCreate
client.on("guildCreate", function(guild){
    console.log(`the client joins a guild`);
});

// guildDelete
client.on("guildDelete", function(guild){
    console.log(`the client deleted/left a guild`);
});

// guildMemberAdd
client.on("guildMemberAdd", function(member){
    console.log(`a user joins a guild: ${member.tag}`);
});

// guildMemberAvailable
client.on("guildMemberAvailable", function(member){
    console.log(`member becomes available in a large guild: ${member.tag}`);
});

// guildMemberRemove
client.on("guildMemberRemove", function(member){
    console.log(`a member leaves a guild, or is kicked: ${member.tag}`);
});

// guildMembersChunk
client.on("guildMembersChunk", function(members, guild){
    console.error(`a chunk of guild members is received`);
});

// guildMemberSpeaking
client.on("guildMemberSpeaking", function(member, speaking){
    console.log(`a guild member starts/stops speaking: ${member.tag}`);
});
// guildMemberUpdate
client.on("guildMemberUpdate", function(oldMember, newMember){
    console.error(`a guild member changes - i.e. new role, removed role, nickname.`);
});

// guildUnavailable
client.on("guildUnavailable", function(guild){
    console.error(`a guild becomes unavailable, likely due to a server outage: ${guild}`);
});

// guildUpdate
client.on("guildUpdate", function(oldGuild, newGuild){
    console.error(`a guild is updated`);
});

// reconnecting
client.on("reconnecting", function(){
    console.log(`client tries to reconnect to the WebSocket`);
});

// resume
client.on("resume", function(replayed){
    console.log(`whenever a WebSocket resumes, ${replayed} replays`);
});

// roleCreate
client.on("roleCreate", function(role){
    console.error(`a role is created`);
});

// roleDelete
client.on("roleDelete", function(role){
    console.error(`a guild role is deleted`);
});

// roleUpdate
client.on("roleUpdate", function(oldRole, newRole){
    console.error(`a guild role is updated`);
});

// typingStart
client.on("typingStart", function(channel, user){
    console.log(`${user.tag} has started typing`);
});

// typingStop
client.on("typingStop", function(channel, user){
    console.log(`${user.tag} has stopped typing`);
});

// userNoteUpdate
client.on("userNoteUpdate", function(user, oldNote, newNote){
    console.log(`a member's note is updated`);
});

// userUpdate
client.on("userUpdate", function(oldUser, newUser){
    console.log(`user's details (e.g. username) are changed`);
});

// voiceStateUpdate
client.on("voiceStateUpdate", function(oldMember, newMember){
    console.log(`a user changes voice state`);
});

// warn
client.on("warn", function(info){
    console.log(`warn: ${info}`);
});
