import {Jerry} from "../main";
import { ICommandContext } from "../types";
import { Guild } from "eris";
const config = require("../../config.json"); 

class GuildCreateHandler {
    name: string;
    constructor(){
        this.name = "guildCreate";
    }

    async handle(this: Jerry, ctx: ICommandContext): Promise<void> {
    
        this.executeWebhook('722188833986314312', config.guildWebhook, { 
    
            embeds: [
             {
                author: { 
                    name: 'Guild Create', 
                    icon_url: this.user.avatarURL
                }, 
                color: this.defaultColor,
                //@ts-ignore
                description: `Added to a new guild!\n**Guild:** ${ctx.guild.name} (\`${ctx.guild.id})\`\n**Members:** ${ctx.guild.members.size}\n**Guilds:** ${this.guilds.size}`,
                timestamp: new Date 
    
              }
            ]
        
    
    
        
    })

    }
}
export default new GuildCreateHandler;