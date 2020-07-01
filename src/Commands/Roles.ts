import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";
import {exec} from "child_process"; 
const config = require("../../config.json");

class Roles extends command {
    constructor() {
        super({})
        this.name = "roles"
        this.aliases = ["jerry-roles"]
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
                description: "<@&720385882158399498> Me, I am king.\n\n<@&722656917188509696> Jerry's developers\n\n<@&722661381316280321> Jerry Staff\n\n<@&722660901546754129> Other bots"
            }, 
            color: jerry.defaultColor
        }
        //@ts-ignore
        jerry.createMessage("722659905542291487", data)
    }
}

module.exports.cmd = Roles; 