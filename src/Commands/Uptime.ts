import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";
import {exec} from "child_process"; 
const config = require("../../config.json");

class Uptime extends command {
    constructor() {
        super({})
        this.name = "uptime"
        this.aliases = ["up"]
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "Shows Jerry's uptime."
    }

    async execute(jerry: Jerry, ctx: ICommandContext): Promise<any> {
        const rawUptime = jerry.uptime; 
        let sseconds = (Math.round(rawUptime / 1000)); 
        let days = Math.floor(Math.round(sseconds) / 86400); 
        let hours = Math.floor(Math.round(sseconds) / 3600); 
        sseconds %= 3600;
        let minutes = Math.floor(Math.round(sseconds) / 60); 
        let seconds = sseconds % 60

        const data = { 
            embed: { 
                title: 'Uptime', 
                color: jerry.defaultColor, 
                description: `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`, 
                footer: { 
                    text: `Jerry | prod | PPID: ${process.ppid} | Cluster 0 | Shard ${ctx.channel.guild.shard.id}`
                }
            }
        }
        ctx.channel.createMessage(data)
    }
}
module.exports.cmd = Uptime;