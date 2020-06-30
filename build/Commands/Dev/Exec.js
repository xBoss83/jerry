"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../Command");
const child_process_1 = require("child_process");
const util_1 = require("util");
const config = require("../../config.json");
class Exec extends Command_1.command {
    constructor() {
        super({});
        this.name = "exec";
        this.aliases = ["ex"];
        this.alwaysEnabled = true;
        this.id = this.name;
        this.requiredUsers = ["489989456175300618", "253233185800847361", "344954369285947392", "325087287539138560"];
        this.helpInfo = "Executes console code.";
        this.commandType = "developer";
    }
    async execute(jerry, ctx) {
        if (!config.owners.includes(ctx.user.id))
            return;
        await child_process_1.exec(ctx.args.join(" "), (error, stdout) => {
            const outputType = error || stdout;
            let output = outputType;
            if (typeof outputType === "object") {
                output = util_1.inspect(outputType);
            }
            let stringoutput = output;
            if (stringoutput.length > 1990)
                console.log(output), output = 'The result of this eval is over 2000 characters long and cannot be sent, check the console for the output.';
            output = output = "```" + output + "```";
            return ctx.channel.createMessage(output);
        });
    }
}
module.exports.cmd = Exec;
