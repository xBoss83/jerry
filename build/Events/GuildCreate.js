"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("../../config.json");
class GuildCreateHandler {
    constructor() {
        this.name = "guildCreate";
    }
    async handle(ctx) {
        let owner = this.users.get(ctx.guild.ownerID);
        this.executeWebhook('722188833986314312', config.guildWebhook, {
            embeds: [
                {
                    author: {
                        name: 'Guild Create',
                        icon_url: this.user.avatarURL
                    },
                    color: this.defaultColor,
                    //@ts-ignore
                    description: `Added to a new guild!\n**Guild:** ${ctx.guild.name} (\`${ctx.guild.id})\`\n**Owner:** ${owner.username}#${owner.discriminator}\n**Members:** ${ctx.guild.members.size}\n**Guilds:** ${this.guilds.size}`,
                    timestamp: new Date
                }
            ]
        });
    }
}
exports.default = new GuildCreateHandler;
