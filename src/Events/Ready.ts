import {Jerry} from "../main";
const config = require("../../config.json"); 
let logTime = new Date().toLocaleTimeString(); 
let logDate = new Date().toLocaleDateString()
class ReadyHandler {
    name: string;
    constructor(){
        this.name = "ready";
    }

    async handle(this: Jerry): Promise<void> {
        this.editStatus("online", {name: "in the pool!", type: 0})
        
        this.executeWebhook('722192224745685113', config.guildWebhook, { 
    
            embeds: [
             {
                author: { 
                    name: 'Ready', 
                    icon_url: this.user.avatarURL
                }, 
                color: this.defaultColor,
                //@ts-ignore
                description: `Connected to Discord!\n**Guilds:** ${callisto.guilds.size}\n**Users:** ${this.users.size}\n**Time:** ${logDate} (${logTime})`,
                timestamp: new Date 
    
              }
            ]
        
    
    
        
    })
        return this.logger.success("Jerry", "Jerry has connected to Discord!")

    }
}
export default new ReadyHandler;