import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";
import {exec} from "child_process"; 
const config = require("../../config.json");

class Post extends command {
    constructor() {
        super({})
        this.name = "dyno"
        this.aliases = ["say"]
        this.alwaysEnabled = true;
        this.id = this.name;
        this.requiredUsers = ["253233185800847361", "344954369285947392", "489989456175300618"]
        this.helpInfo = "Sends a message to bots-galore"
        this.commandType = "developer"
    }

    async execute(jerry: Jerry, ctx: ICommandContext): Promise<any> {
        if (!config.sayServer.includes(ctx.msg.guildID)) return;
        if (!config.owners.includes(ctx.user.id)) return;
        jerry.createMessage("648349778429739009", ctx.args.join(" "))
        return ctx.channel.createMessage("Successfully sent to Dyno!!")
    }
}

module.exports.cmd = Post; 