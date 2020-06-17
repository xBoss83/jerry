"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("../../config.json");
class GuildCreateHandler {
    constructor() {
        this.name = "guildCreate";
    }
    async handle(guild) {
        let owner = this.users.get(guild.ownerID);
        this.executeWebhook('722663743271469067', config.guildWebhook, {
            embeds: [
                {
                    author: {
                        name: 'Guild Create',
                        icon_url: this.user.avatarURL
                    },
                    color: this.defaultColor,
                    //@ts-ignore
                    description: `Added to a new guild!\n**Guild:** ${guild.name} (\`${guild.id})\`\n**Owner:** ${owner.username}#${owner.discriminator}\n**Members:** ${guild.members.size}\n**Guilds:** ${this.guilds.size}`,
                    timestamp: new Date
                }
            ]
        });
    }
}
exports.default = new GuildCreateHandler;
