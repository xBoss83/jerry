import {Jerry} from "../main";

class ReadyHandler {
    name: string;
    constructor(){
        this.name = "ready";
    }

    async handle(this: Jerry): Promise<void> {
        this.editStatus("online", {name: "in the pool!", type: 0})
        
        return this.logger.success("Jerry", "Jerry has connected to Discord!")

    }
}
export default new ReadyHandler;