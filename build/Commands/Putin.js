"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putins = void 0;
const Command_1 = require("../Command");
const config = require("../../config.json");
exports.putins = [
    "https://cdn.discordapp.com/attachments/448682951258144799/723729802951000104/pov_u_cute.mp4",
    "https://cdn.discordapp.com/attachments/511737830637174795/719624365171540039/video0-111-1.mp4",
    "https://cdn.discordapp.com/attachments/448682951258144799/718950669167362078/video0.mp4"
];
class Putin extends Command_1.command {
    constructor() {
        super({});
        this.name = "putin";
        this.aliases = ["wide-putin"];
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "Sends putin";
    }
    async execute(jerry, ctx) {
        const randomPutin = Math.floor(Math.random() * exports.putins.length);
        if (config.owners.includes(ctx.user.id)) {
            ctx.channel.createMessage(`<@344954369285947392> <@489989456175300618> <@253233185800847361> <@325087287539138560>\n${exports.putins[randomPutin]}`);
        }
        else {
            ctx.channel.createMessage(exports.putins[randomPutin]);
        }
    }
}
module.exports.cmd = Putin;
