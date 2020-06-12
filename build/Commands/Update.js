"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Command");
const config = require("../../config.json");
class JerryCmd extends Command_1.command {
    constructor() {
        super({});
        this.name = "update";
        this.aliases = ["build"];
        this.alwaysEnabled = true;
        this.id = this.name;
        this.requiredUsers = ["253233185800847361", "344954369285947392", "489989456175300618"];
        this.helpInfo = "Updates Jerry.";
        this.commandType = "developer";
    }
    async execute(jerry, ctx) {
        /* let commitm = ctx.args.join(' ')
         const m = await ctx.channel.createMessage('Commiting and pushing')
        exec(`git add . && git commit -m "${commitm.toString()}" && git push`), (error: any, stdout: any) => {
             const outputType = error || stdout;
             let output = outputType;
             if (typeof outputType === 'object') {
                 output = inspect(outputType);
             }
             output = (output.length > 1980 ? output.substr(0, 1977) + '...' : output);
             return m.edit('Done!')
             
         };*/
        ctx.channel.createMessage("WIP");
    }
}
module.exports.cmd = JerryCmd;
