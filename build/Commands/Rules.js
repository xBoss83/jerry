"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Command");
const config = require("../../config.json");
class Rules extends Command_1.command {
    constructor() {
        super({});
        this.name = "info";
        this.aliases = ["jerry-info"];
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
                    text: "Rules",
                    icon_url: jerry.user.avatarURL
                },
                description: "1. Don't be a dick.\n2. No NSFW.\n3. Follow the Discord Terms of Service and Community Guidelines."
            },
            color: jerry.defaultColor
        };
        //@ts-ignore
        jerry.createMessage("722659905542291487", data);
    }
}
module.exports.cmd = Rules;
