import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";
const config = require("../../config.json");

class JerryCmd extends command {
    constructor() {
        super({})
        this.name = "jerry"
        this.aliases = ["goodboy"]
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "Send some Jerry in your life."

    }

    async execute(jerry: Jerry, ctx: ICommandContext): Promise<any> {
       
    ctx.channel.createMessage("https://cdn.discordapp.com/attachments/448682951258144799/715698613430255687/video0_5.mp4")
        
        
    }
}
module.exports.cmd = JerryCmd; 