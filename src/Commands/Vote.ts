import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";

class Vote extends command {
    constructor() {
        super({})
        this.name = "vote"
        this.aliases = ["voting"]
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "Posts a link to vote for Jerry."
    }

    async execute(jerry: Jerry, ctx: ICommandContext): Promise<any> {
        
        const data = { 
            embed: { 
                color: jerry.defaultColor, 
                timestamp: new Date,
                title: "Vote for Jerry", 
                description: "[Top.gg](https://top.gg/bot/599447466370138163/vote)"
            }, 
            footer: { 
                text: "Thanks for supporting Jerry!"
            }
            
        }
        ctx.channel.createMessage(data)
    }
}

module.exports.cmd = Vote; 