/*(import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";
//@ts-ignore
import globalModel from "../Models/Global"; 

class Peck extends command {
    constructor() {
        super({})
        this.name = "peck"
        this.aliases = ["config"]
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "This command will disable/enable Jerry pecks for the whole server.\n\n`jerry pls peck disable` - Disables peck for the entire server\n`jerry pls peck enable` - Enables peck for the entire server\n**THIS REQUIRE** `MANAGE_SERVER` or `ADMINISTRATOR` **PERMISSION TO USE!**\n\n`jerry pls togglepeck` - This toggles whether or not you want Jerry to peck you."
    }

    async execute(jerry: Jerry, ctx: ICommandContext): Promise<any> {
        if (ctx.args[0] === "disable") { 
            if (!ctx.msg.member?.permission.has("manageGuild") || !ctx.msg.member.permission.has("administrator")) return;
            const thing = await globalModel.findOne({}).exec()
            const array1 = thing.blacklistedPeckGuilds
            if (!array1.includes(ctx.guild.id)) { 
                await globalModel.updateOne({$push:{blacklistedPeckGuilds: ctx.guild.id}})
                return ctx.channel.createMessage("Successfully disabled pecking for this server!")
            } else { 
                    return ctx.channel.createMessage("Pecking is not enabled on this server!") 
                }
           }

       if (ctx.args[0] === "enable") { 
        if (!ctx.msg.member?.permission.has("manageGuild") || !ctx.msg.member.permission.has("administrator")) return;
        const thing = await globalModel.findOne({}).exec()
        const array1 = thing.blacklistedPeckGuilds
        if (array1.includes(ctx.guild.id)) { 
            await globalModel.updateOne({$pull:{blacklistedPeckGuilds: ctx.guild.id}})
            return ctx.channel.createMessage("Successfully enabled pecking for this server!")
        } else { 
                return ctx.channel.createMessage("Pecking is not disabled on this server!") 
            }
       }

    }
}

module.exports.cmd = Peck; */