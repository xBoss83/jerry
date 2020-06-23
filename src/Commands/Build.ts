import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";
import {exec} from "child_process"; 
import {inspect} from "util"; 
const config = require("../../config.json");

class Build extends command {
    constructor() {
        super({})
        this.name = "build"
        this.aliases = ["pull"]
        this.alwaysEnabled = true;
        this.id = this.name;
        this.requiredUsers = ["489989456175300618", "253233185800847361", "344954369285947392", "325087287539138560"];
        this.helpInfo = "Builds Jerry."
        this.commandType = "developer"
    }

    async execute(jerry: Jerry, ctx: ICommandContext): Promise<any> {
        if (!config.owners.includes(ctx.user.id)) return; 
         
        const data = { 
            embed: { 
                color: jerry.defaultColor, 
                description: `<a:endlessgears:609046319155380231> Pulling and Restarting `
            }
        }
         ctx.channel.createMessage(data);
         await exec('git pull && pm2 restart Jerry', (error, stdout) => {
        })
    }
}

module.exports.cmd = Build; 