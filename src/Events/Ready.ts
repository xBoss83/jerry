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
        this.logger.success("Jerry", "Jerry has connected to Discord!")

    }
}
export default new ReadyHandler;