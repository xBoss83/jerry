"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("../../config.json");
let logTime = new Date().toLocaleTimeString();
let logDate = new Date().toLocaleDateString();
class ReadyHandler {
    constructor() {
        this.name = "ready";
    }
    async handle() {
        this.editStatus("online", { name: "in the pool!", type: 0 });
        this.logger.success("Jerry", "Jerry has connected to Discord!");
        this.executeWebhook('722663407743926303', config.guildWebhook, {
            embeds: [
                {
                    author: {
                        name: 'Ready',
                        icon_url: this.user.avatarURL
                    },
                    color: this.defaultColor,
                    //@ts-ignore
                    description: `Connected to Discord!\n**Guilds:** ${callisto.guilds.size}\n**Users:** ${this.users.size}\n**Time:** ${logDate} (${logTime})`,
                    timestamp: new Date
                }
            ]
        });
        return this.logger.success("Jerry", "Jerry has connected to Discord!");
    }
}
exports.default = new ReadyHandler;
