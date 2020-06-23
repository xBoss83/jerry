import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";

class Invite extends command {
    constructor() {
        super({})
        this.name = "invite"
        this.aliases = ["inv"]
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "Posts an invite to Jerry."
    }

    async execute(jerry: Jerry, ctx: ICommandContext): Promise<any> {
        
        const data = { 
            embed: { 
                color: jerry.defaultColor, 
                timestamp: new Date,
                title: "Jerry Invite", 
                description: "[Click here to invite Jerry!](https://discord.com/oauth2/authorize?client_id=599447466370138163&scope=bot&permissions=515296)"
            }

        }
        if(ctx.args[0] && ctx.args[0].toLowerCase() === "raw") { 
           return ctx.channel.createMessage("https://discord.com/oauth2/authorize?client_id=599447466370138163&scope=bot&permissions=515296")
        } else { 
            return ctx.channel.createMessage(data)
        }
    }
}

module.exports.cmd = Invite; 