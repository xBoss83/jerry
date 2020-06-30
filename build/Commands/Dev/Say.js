"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../Command");
const config = require("../../config.json");
class Say extends Command_1.command {
    constructor() {
        super({});
        this.name = "say";
        this.aliases = ["dyno", "s", "echo", "speak"];
        this.alwaysEnabled = true;
        this.id = this.name;
        this.requiredUsers = ["489989456175300618", "253233185800847361", "344954369285947392", "325087287539138560"];
        this.helpInfo = "Sends a message to bots-galore";
        this.commandType = "developer";
    }
    async execute(jerry, ctx) {
        if (!config.owners.includes(ctx.user.id))
            return;
        if (!ctx.args[0])
            return ctx.channel.createMessage("Supply args you dumb dumb!");
        jerry.createMessage("648349778429739009", ctx.args.join(" "));
        return ctx.channel.createMessage("Successfully sent to Dyno!");
    }
}
module.exports.cmd = Say;
