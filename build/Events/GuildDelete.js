"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
const Guild_1 = __importDefault(require("../Models/Guild"));
const config = require("../../config.json");
class GuildCreateHandler {
    constructor() {
        this.name = "guildDelete";
    }
    async handle(guild) {
        let owner = this.users.get(guild.ownerID);
        const guildThing = Guild_1.default.findOne({ guildID: guild.id });
        await guildThing.deleteOne();
        this.executeWebhook('722663743271469067', config.guildWebhook, {
            embeds: [
                {
                    author: {
                        name: 'Guild Delete',
                        icon_url: this.user.avatarURL
                    },
                    color: this.defaultColor,
                    //@ts-ignore
                    description: `Removed from a guild!\n**Guild:** ${guild.name} (\`${guild.id})\`\n**Owner:** ${owner.username}#${owner.discriminator}\n**Members:** ${guild.members.size}\n**Guilds:** ${this.guilds.size}`,
                    timestamp: new Date
                }
            ]
        });
    }
}
exports.default = new GuildCreateHandler;
