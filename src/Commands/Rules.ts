import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";
import {exec} from "child_process"; 
const config = require("../../config.json");

class Rules extends command {
    constructor() {
        super({})
        this.name = "rules"
        this.aliases = ["jerry-rules"]
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
                    text: "Rules", 
                    icon_url: jerry.user.avatarURL
                }, 
                description: "**1.** Don't be a dick.\n\n**2.** No NSFW.\n\n**3.** Follow the Discord Terms of Service and Community Guidelines."
            }, 
            color: 14460415, 
            timestamp: new Date
        }
        //@ts-ignore
        jerry.createMessage("722659905542291487", data)
    }
}

module.exports.cmd = Rules; 