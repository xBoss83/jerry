"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Command");
class Vote extends Command_1.command {
    constructor() {
        super({});
        this.name = "vote";
        this.aliases = ["voting"];
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "Posts a link to vote for Jerry.";
    }
    async execute(jerry, ctx) {
        const data = {
            embed: {
                color: jerry.defaultColor,
                timestamp: new Date,
                title: "Vote for Jerry",
                description: "[Top.gg](https://top.gg/bot/599447466370138163/vote)"
            },
            footer: {
                text: "Thanks for supporting Jerry!"
            }
        };
        ctx.channel.createMessage(data);
    }
}
module.exports.cmd = Vote;
