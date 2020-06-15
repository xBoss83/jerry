import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";
import {exec} from "child_process"; 
const config = require("../../config.json");

class Restart extends command {
    constructor() {
        super({})
        this.name = "post"
        this.aliases = ["p"]
        this.alwaysEnabled = true;
        this.id = this.name;
        this.requiredUsers = ["253233185800847361", "344954369285947392", "489989456175300618"]
        this.helpInfo = "Posts DBL stats for Jerry."
        this.commandType = "developer"
    }

    async execute(jerry: Jerry, ctx: ICommandContext): Promise<any> {
        if (!config.owners.includes(ctx.user.id)) return;
        await jerry.postDBL()

       return ctx.channel.createMessage("Stats posted!")
    }
}

module.exports.cmd = Restart; 