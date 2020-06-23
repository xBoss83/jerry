import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";
const config = require("../../config.json");

export const putins = [
    "https://cdn.discordapp.com/attachments/448682951258144799/723729802951000104/pov_u_cute.mp4",    
    "https://cdn.discordapp.com/attachments/511737830637174795/719624365171540039/video0-111-1.mp4", 
    "https://cdn.discordapp.com/attachments/448682951258144799/718950669167362078/video0.mp4", 
    "https://tenor.com/view/wide-putin-walking-vladimir-putin-sped-up-gif-17500561"
]; 

class Putin extends command {
    constructor() {
        super({})
        this.name = "putin"
        this.aliases = ["wide-putin"]
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "Sends putin"
    }

    async execute(jerry: Jerry, ctx: ICommandContext): Promise<any> {
        const randomPutin = Math.floor(Math.random() * putins.length); 

            ctx.channel.createMessage(putins[randomPutin])
    
    }
}

module.exports.cmd = Putin; 

