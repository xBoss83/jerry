"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Command");
const config = require("../../config.json");
class Stats extends Command_1.command {
    constructor() {
        super({});
        this.name = "stats";
        this.aliases = ["info", "bot", "bot-info", "bot-information", "whoisjerry"];
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "Gives information on Jerry.";
    }
    async execute(jerry, ctx) {
        let rawuptime = jerry.uptime;
        let sseconds = (Math.round(rawuptime / 1000));
        let days = Math.floor(Math.round(sseconds / 86400));
        let hours = Math.floor(Math.round(sseconds / 3600));
        sseconds %= 3600;
        let minutes = Math.floor(Math.round(sseconds / 60));
        let seconds = sseconds % 60;
        const data = {
            embed: {
                author: {
                    name: jerry.user.username,
                    icon_url: jerry.user.avatarURL
                },
                color: jerry.defaultColor,
                footer: {
                    text: `Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`,
                    icon_url: jerry.user.avatarURL
                },
                timestamp: new Date,
                fields: [
                    {
                        name: 'Version',
                        value: "v1.0.0",
                        inline: true
                    },
                    {
                        name: 'Modules',
                        value: "3",
                        inline: true
                    },
                    {
                        name: 'Commands',
                        value: jerry.commands.size,
                        inline: true
                    },
                    {
                        name: 'Developer',
                        value: 'boss#0001',
                        inline: true
                    },
                    {
                        name: 'Servers',
                        value: jerry.guilds.size,
                        inline: true
                    },
                    {
                        name: 'Users',
                        value: jerry.users.size,
                        inline: true
                    },
                    {
                        name: 'Operating System',
                        value: `Linux - Debian 4.19.98-1`,
                        inline: true
                    },
                    {
                        name: 'Support Server',
                        value: `Soon`,
                        inline: true
                    },
                    {
                        name: 'Invite Link',
                        value: `[Invite Here](https://discordapp.com/oauth2/authorize?client_id=599447466370138163&scope=bot&permissions=8)`,
                        inline: true
                    }
                ]
            }
        };
        //@ts-ignore
        ctx.channel.createMessage(data);
    }
}
module.exports.cmd = Stats;
