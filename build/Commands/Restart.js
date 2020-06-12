"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Command");
const config = require("../../config.json");
class JerryCmd extends Command_1.command {
    constructor() {
        super({});
        this.name = "restart";
        this.aliases = ["r"];
        this.alwaysEnabled = true;
        this.id = this.name;
        this.requiredUsers = ["253233185800847361", "344954369285947392", "489989456175300618"];
        this.helpInfo = "Restarts Jerry.";
        this.commandType = "developer";
    }
    async execute(jerry, ctx) {
        /*if (!config.owners.includes(ctx.user.id)) return

        exec('pm2 restart 0', (error, stdout) => {
           const outputType = error || stdout;
           let output = outputType;
           if (typeof outputType === "object") {
               output = inspect(outputType);
           }
           let stringoutput = output as string;
           if (stringoutput.length > 1990) console.log(output), output = 'The result of this eval is over 2000 characters long and cannot be sent, check the console for the output.'
           output = output = "```" + output + "```";
           return ctx.channel.createMessage(output);
       })*/
        ctx.channel.createMessage("WIP");
    }
}
module.exports.cmd = JerryCmd;
