"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
const Command_1 = require("../../Command");
const util_1 = require("util");
const config = require("../../config.json");
const boss = "Bad Coder | Jerry lover";
const wuper = "Plane dude | Jerry lover";
const bean = "Lima bean | Sally owner | Jerry lover";
const jerry = "Good boy | Pecks everyone | KILL ALLLLLLLLLLLLLLLYYYYYYYYYYYY";
class Eval extends Command_1.command {
    constructor() {
        super({});
        this.name = "eval";
        this.aliases = ["e", "evaluate", "runcodefortheboys"];
        this.alwaysEnabled = true;
        this.requiredUsers = ["489989456175300618", "253233185800847361", "344954369285947392", "325087287539138560"];
        this.id = this.name;
        this.commandType = "developer";
        this.helpInfo = "Jerry will eval code for you!";
    }
    async execute(jerry, ctx) {
        try {
            const wuper = 'Super duper wuper | Likes planes';
            const bean = 'Sally owner | Lima bean';
            const lyss = 'Hottie';
            const twodog = 'qt';
            if (!config.owners.includes(ctx.msg.author.id))
                return jerry.logger.error('Jerry Eval', `Some idiot is trying to use my eval command, their tag is ${ctx.msg.author.username}#${ctx.msg.author.discriminator}!`);
            const code = ctx.args.join(" ");
            let evaled = await eval(code);
            if (typeof evaled !== "string")
                evaled = util_1.inspect(evaled, { depth: 0 });
            if (evaled.includes("token") || evaled.includes(config.token)) {
                evaled = evaled.replace("Fuck You");
                evaled = evaled.replace(config.token, "Fuck You");
            }
            if (evaled.length > 1900) {
                console.log(evaled);
                ctx.channel.createMessage("Output is too long. Logged to the console.");
            }
            else {
                const data = {
                    embed: {
                        author: { name: 'Eval Results', icon_url: ctx.user.avatarURL },
                        description: "```js\n" + evaled + "```",
                        color: jerry.defaultColor,
                        timestamp: new Date(),
                    }
                };
                //relay.createMessage(msg.channel.id, clean(evaled));
                ctx.channel.createMessage(data);
            }
        }
        //@ts-ignore
        catch (err) {
            //@ts-ignore
            ctx.channel.createMessage(`\`ERROR\` \`\`\`\n${err}\n\`\`\``);
        }
    }
}
exports.cmd = Eval;
