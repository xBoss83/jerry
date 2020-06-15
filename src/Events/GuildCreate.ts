import {Jerry} from "../main";
import { ICommandContext } from "../types";
import { Guild } from "eris";
const config = require("../../config.json"); 

class GuildCreateHandler {
    name: string;
    constructor(){
        this.name = "guildCreate";
    }

    async handle(this: Jerry, guild: Guild): Promise<void> {
        let owner = this.users.get(guild.ownerID)
        this.executeWebhook('722192224745685113', config.guildWebhook, { 
    
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
        
    
    
        
    })

    }
}
export default new GuildCreateHandler;