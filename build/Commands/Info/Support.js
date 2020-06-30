"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../Command");
class Support extends Command_1.command {
    constructor() {
        super({});
        this.name = "support";
        this.aliases = ["sup"];
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "Posts an invite to Jerry support.";
    }
    async execute(jerry, ctx) {
        const data = {
            embed: {
                color: jerry.defaultColor,
                timestamp: new Date,
                title: "Support Server Invite",
                description: "[Click here to join!](https://discord.com/invite/UPKZK8R)"
            }
        };
        if (ctx.args[0] && ctx.args[0].toLowerCase() === "raw") {
            return ctx.channel.createMessage("https://discord.com/invite/UPKZK8R");
        }
        else {
            return ctx.channel.createMessage(data);
        }
    }
}
module.exports.cmd = Support;
