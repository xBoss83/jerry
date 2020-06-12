import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";
import {exec} from "child_process"; 
import {inspect} from "util"; 
const config = require("../../config.json");

class Ping extends command {
    constructor() {
        super({})
        this.name = "ping"
        this.aliases = ["pong"]
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "Pings Jerry."
    }

    async execute(jerry: Jerry, ctx: ICommandContext): Promise<any> {
        let time = Date.now(); 
        let m = await ctx.channel.createMessage("Pong!"); 
        let now = Date.now()
        m.edit(`Pong! \`${now - time}ms\``)
    }
}

module.exports.cmd = Ping; 