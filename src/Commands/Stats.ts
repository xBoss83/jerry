import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";
import {exec} from "child_process"; 
const config = require("../../config.json");

class Stats extends command {
    constructor() {
        super({})
        this.name = "stats"
        this.aliases = ["info", "bot", "bot-info", "bot-information", "whoisjerry"]
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "Gives information on Jerry."
    }

    async execute(jerry: Jerry, ctx: ICommandContext): Promise<any> {
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
                thumbnail: { 
                    url: "https://www.thebalancesmb.com/thmb/k9ICOwcotxqA2PZtznT2GUDf1CE=/1280x960/smart/filters:no_upscale()/linux-573e3f5f5f9b58723dace939.jpg"
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
                        value: 'boss#0001, bean#8888, wuper#9212', 
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
                        value: `Linux`, 
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
        }
        //@ts-ignore
        ctx.channel.createMessage(data)
    }
}
module.exports.cmd = Stats;

