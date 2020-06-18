import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";
import {exec} from "child_process"; 
import {inspect} from "util"; 
const config = require("../../config.json");

class Restart extends command {
    constructor() {
        super({})
        this.name = "restart"
        this.aliases = ["r"]
        this.alwaysEnabled = true;
        this.id = this.name;
        this.requiredUsers = ["489989456175300618", "253233185800847361", "344954369285947392", "325087287539138560"];
        this.helpInfo = "Restarts Jerry."
        this.commandType = "developer"
    }

    async execute(jerry: Jerry, ctx: ICommandContext): Promise<any> {
         if (!config.owners.includes(ctx.user.id)) return 
        ctx.channel.createMessage("Restarting Jerry!");
         await exec('pm2 restart Jerry', (error, stdout) => {
        })
    }
}

module.exports.cmd = Restart; 