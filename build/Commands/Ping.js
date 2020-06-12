"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Command");
const config = require("../../config.json");
class Ping extends Command_1.command {
    constructor() {
        super({});
        this.name = "ping";
        this.aliases = ["pong"];
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "Pings Jerry.";
    }
    async execute(jerry, ctx) {
        let time = Date.now();
        let m = await ctx.channel.createMessage("Pong!");
        let now = Date.now();
        m.edit(`Pong! \`${now - time}ms\``);
    }
}
module.exports.cmd = Ping;
