"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../Command");
const config = require("../../config.json");
class Lyss extends Command_1.command {
    constructor() {
        super({});
        this.name = "lyss";
        this.aliases = ["cutie"];
        this.alwaysEnabled = true;
        this.id = this.name;
        this.requiredUsers = ["489989456175300618", "253233185800847361", "344954369285947392", "325087287539138560"];
        this.helpInfo = "Lyss is cute.";
        this.commandType = "developer";
    }
    async execute(jerry, ctx) {
        if (!config.owners.includes(ctx.user.id))
            return;
        ctx.channel.createMessage("<@325087287539138560> I love you! <3");
    }
}
module.exports.cmd = Lyss;
