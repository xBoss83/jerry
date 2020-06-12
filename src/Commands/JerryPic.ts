import {command} from "../Command"; 
import {Jerry} from "../main"; 
import {ICommandContext}  from "../types";

export const jerrys = [
    "https://cdn.discordapp.com/attachments/697676542830182431/721053912689410098/maxresdefault.png",    
    "https://cdn.discordapp.com/attachments/697676542830182431/721053928678228058/hqdefault.png", 
    "https://cdn.discordapp.com/attachments/697676542830182431/721053946579255346/Z.png", 
    "https://cdn.discordapp.com/attachments/697676542830182431/721053997678723193/Screen_Shot_2019_08_15_at_10.png", 
    "https://cdn.discordapp.com/attachments/697676542830182431/721054031216115866/na_5c405f4522480.png", 
    "https://cdn.discordapp.com/attachments/697676542830182431/721054177848983582/img.png", 
    "https://cdn.discordapp.com/attachments/697676542830182431/721054197033861220/2Q.png", 
    "https://cdn.discordapp.com/attachments/697676542830182431/721054221859815465/60f0e0b54c224d37bbbcc366441fb94f.png", 
    "https://cdn.discordapp.com/attachments/697676542830182431/721054242588328037/0854e5hi2sljdbf679hb00005844090v0200012305.png", 
    "https://cdn.discordapp.com/attachments/697676542830182431/721054535090569236/greo6qp4porqjqhm7egb00004a44090v0200011905.png", 
    "https://cdn.discordapp.com/attachments/697676542830182431/721054658356838440/maxresdefault.png", 
    "https://cdn.discordapp.com/attachments/697676542830182431/721054736702374048/giphy.png"
]; 

class JerryPic extends command {
    constructor() {
        super({})
        this.name = "jerrypic"
        this.aliases = ["goodboypic"]
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "Send some Jerry in your life."

    }

    async execute(jerry: Jerry, ctx: ICommandContext): Promise<any> {
        const randomJerry = Math.floor(Math.random() * jerrys.length); 
        const data = { 
            embed: { 
                description: "Here is some Jerry!", 
                image: { 
                    url: jerrys[randomJerry]
                }, 
                color: jerry.defaultColor, 
                timestamp: new Date, 
                footer: { 
                    text: "He is a goodboy!"
                }
            }
        }

        return ctx.channel.createMessage(data); 
    }
}
module.exports.cmd = JerryPic; 