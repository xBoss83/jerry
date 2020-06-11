"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
const Command_1 = require("../Command");
const config = require("../../config.json");
const boss = "Bad Coder | Jerry lover";
const wuper = "Plane dude | Jerry lover";
const bean = "Lima bean | Sally owner | Jerry lover";
const jerry = "Good boy | Pecks everyone | KILL ALLLLLLLLLLLLLLLYYYYYYYYYYYY";
class Eval extends Command_1.command {
    constructor() {
        super({});
        this.name = "eval";
        this.aliases = ["e", "evaluate"];
        this.alwaysEnabled = true;
        this.requiredUsers = ["489989456175300618", "253233185800847361", "344954369285947392"];
        this.id = this.name;
        this.commandType = "developer";
        this.helpInfo = "Jerry will eval code for you!";
    }
    async execute(jerry, ctx) {
        const wuper = 'Super duper wuper | Likes planes';
        const bean = 'Sally owner | Lima bean';
        const lyss = 'Hottie';
        const twodog = 'qt';
        if (!config.owners.includes(ctx.msg.author.id))
            return jerry.logger.error('Jerry Eval', `Some idiot is trying to use my eval command, their tag is ${ctx.msg.author.username}#${ctx.msg.author.discriminator}!`);
        const content = ctx.args[0];
        if (!content)
            return jerry.createMessage(ctx.msg.channel.id, `Silly, ${ctx.msg.author.mention}, I cannot eval the air!`);
        const result = new Promise((resolve, reject) => resolve(eval(content)));
        return result.then(output => {
            if (typeof output !== 'string')
                output = require('util').inspect(output, {
                    depth: 0
                });
            let stringoutput = output;
            if (stringoutput.includes(jerry.token))
                output = stringoutput.replace(jerry.token, "NoUQ4Nzk4NoUM3NTY5NjA1NjUy.DxNoYOU3w.B9F3nQm6xJJ4NoUfK60ZWduRbNoU");
            if (stringoutput.length > 1990)
                console.log(output), output = 'The result of this eval is over 2000 characters long and cannot be sent, check the console for the output.';
            const data = {
                embed: {
                    author: {
                        name: "Eval Results",
                        icon_url: ctx.msg.author.avatarURL
                    },
                    description: "```js\n" + output + "```",
                    color: jerry.defaultColor,
                    timestamp: new Date
                }
            };
            return jerry.createMessage(ctx.msg.channel.id, `\`\`\`js\n${stringoutput}\`\`\``);
        }).catch(err => {
            console.error(err);
            err = err.toString();
            if (err.includes(jerry.token))
                err = err.replace(jerry.token, "NoUQ4Nzk4NoUM3NTY5NjA1NjUy.DxNoYOU3w.B9F3nQm6xJJ4NoUfK60ZWduRbNoU");
            return jerry.createMessage(ctx.msg.channel.id, `\`\`\`js\n${err}\`\`\``);
        });
    }
}
exports.cmd = Eval;
