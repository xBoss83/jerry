import {Jerry} from "../main";
import { ICommandContext } from "../types";
import { Guild } from "eris";
//@ts-ignore
import model from "../Models/Guild"; 
const config = require("../../config.json"); 

class GuildCreateHandler {
    name: string;
    constructor(){
        this.name = "guildDelete";
    }

    async handle(this: Jerry, guild: Guild): Promise<void> {
        let owner = this.users.get(guild.ownerID)
        const guildThing = model.findOne({guildID: guild.id})

        await guildThing.deleteOne()
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




    })

    }
}
export default new GuildCreateHandler; 