"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Command");
const config = require("../../config.json");
class Roles extends Command_1.command {
    constructor() {
        super({});
        this.name = "roles";
        this.aliases = ["jerry-rules"];
        this.alwaysEnabled = true;
        this.id = this.name;
        this.requiredUsers = ["253233185800847361", "344954369285947392", "489989456175300618"];
        this.helpInfo = "Posts my dick in Jerry";
        this.commandType = "developer";
    }
    async execute(jerry, ctx) {
        if (!config.owners.includes(ctx.user.id))
            return;
        let data = {
            embed: {
                author: {
                    text: "Server Roles",
                    icon_url: jerry.user.avatarURL
                },
                description: "<@&720385882158399498> Me, I am king.\n\n<@&722656917188509696> Jerry's developers\n\n<@&722661381316280321> Jerry Staff\n\n<@&722660901546754129> Other bots",
                color: 14460415,
                timestamp: new Date
            }
        };
        //@ts-ignore
        jerry.createMessage("722659905542291487", data);
    }
}
module.exports.cmd = Roles;
