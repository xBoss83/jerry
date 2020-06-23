"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Command");
const child_process_1 = require("child_process");
const config = require("../../config.json");
class Restart extends Command_1.command {
    constructor() {
        super({});
        this.name = "restart";
        this.aliases = ["r"];
        this.alwaysEnabled = true;
        this.id = this.name;
        this.requiredUsers = ["489989456175300618", "253233185800847361", "344954369285947392", "325087287539138560"];
        this.helpInfo = "Restarts Jerry.";
        this.commandType = "developer";
    }
    async execute(jerry, ctx) {
        if (!config.owners.includes(ctx.user.id))
            return;
        const data = {
            embed: {
                color: jerry.defaultColor,
                description: `<a:endlessgears:609046319155380231> Restarting`
            }
        };
        ctx.channel.createMessage(data);
        await child_process_1.exec('pm2 restart Jerry', (error, stdout) => {
        });
    }
}
module.exports.cmd = Restart;
