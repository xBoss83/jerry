"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../Command");
const config = require("../../config.json");
class Post extends Command_1.command {
    constructor() {
        super({});
        this.name = "post";
        this.aliases = ["p"];
        this.alwaysEnabled = true;
        this.id = this.name;
        this.requiredUsers = ["489989456175300618", "253233185800847361", "344954369285947392", "325087287539138560"];
        this.helpInfo = "Posts DBL stats for Jerry.";
        this.commandType = "developer";
    }
    async execute(jerry, ctx) {
        if (!config.owners.includes(ctx.user.id))
            return;
        await jerry.postDBL();
        return ctx.channel.createMessage("Stats posted!");
    }
}
module.exports.cmd = Post;
