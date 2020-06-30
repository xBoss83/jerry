"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../Command");
const config = require("../../config.json");
class JerryCmd extends Command_1.command {
    constructor() {
        super({});
        this.name = "jerry";
        this.aliases = ["goodboy"];
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "Send some Jerry in your life.";
    }
    async execute(jerry, ctx) {
        ctx.channel.createMessage("https://cdn.discordapp.com/attachments/448682951258144799/715698613430255687/video0_5.mp4");
    }
}
module.exports.cmd = JerryCmd;
