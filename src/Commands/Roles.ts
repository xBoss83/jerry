import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";
import {exec} from "child_process"; 
const config = require("../../config.json");

class Info extends command {
    constructor() {
        super({})
        this.name = "info"
        this.aliases = ["jerry-info"]
        this.alwaysEnabled = true;
        this.id = this.name;
        this.requiredUsers = ["253233185800847361", "344954369285947392", "489989456175300618"]
        this.helpInfo = "Posts my dick in Jerry"
        this.commandType = "developer"
    }

    async execute(jerry: Jerry, ctx: ICommandContext): Promise<any> {
        if (!config.owners.includes(ctx.user.id)) return;
        
        let data = { 
            embed: { 
                author: { 
                    text: "Server Roles", 
                    icon_url: jerry.user.avatarURL
                }, 
                description: "Jerry is a TikTok superstar! He is a duck that can swim in the rain, and kill Ally!! He is constantly being a toxic troll and a nuisance, but we love him. He is a goodboy.\n\n**[Add Jerry]**(https://discord.com/oauth2/authorize?client_id=599447466370138163&scope=bot&permissions=515296)\n\n[Top.gg Page](https://top.gg/bot/599447466370138163)\n[Vote for Jerry](https://top.gg/bot/599447466370138163)\n\n**Server Invite:** https://discord.gg/UPKZK8R"
            }, 
            color: jerry.defaultColor
        }
        //@ts-ignore
        jerry.createMessage("722659905542291487", data)
    }
}

module.exports.cmd = Info; 