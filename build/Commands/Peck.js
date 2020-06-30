"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Command");
//@ts-ignore
const Global_1 = __importDefault(require("../Models/Global"));
class Peck extends Command_1.command {
    constructor() {
        super({});
        this.name = "peck";
        this.aliases = ["config"];
        this.alwaysEnabled = true;
        this.id = this.name;
        this.helpInfo = "This command will disable/enable Jerry pecks for the whole server.\n\n`jerry pls peck disable` - Disables peck for the entire server\n`jerry pls peck enable` - Enables peck for the entire server\n**THIS REQUIRE** `MANAGE_SERVER` or `ADMINISTRATOR` **PERMISSION TO USE!**\n\n`jerry pls togglepeck` - This toggles whether or not you want Jerry to peck you.";
    }
    async execute(jerry, ctx) {
        var _a, _b;
        if (ctx.args[0] === "disable") {
            if (!((_a = ctx.msg.member) === null || _a === void 0 ? void 0 : _a.permission.has("manageGuild")) || !ctx.msg.member.permission.has("administrator"))
                return;
            const thing = await Global_1.default.findOne({}).exec();
            const array1 = thing.blacklistedPeckGuilds;
            if (!array1.includes(ctx.guild.id)) {
                await Global_1.default.updateOne({ $push: { blacklistedPeckGuilds: ctx.guild.id } });
                return ctx.channel.createMessage("Successfully disabled pecking for this server!");
            }
            else {
                return ctx.channel.createMessage("Pecking is not enabled on this server!");
            }
        }
        if (ctx.args[0] === "enable") {
            if (!((_b = ctx.msg.member) === null || _b === void 0 ? void 0 : _b.permission.has("manageGuild")) || !ctx.msg.member.permission.has("administrator"))
                return;
            const thing = await Global_1.default.findOne({}).exec();
            const array1 = thing.blacklistedPeckGuilds;
            if (array1.includes(ctx.guild.id)) {
                await Global_1.default.updateOne({ $pull: { blacklistedPeckGuilds: ctx.guild.id } });
                return ctx.channel.createMessage("Successfully enabled pecking for this server!");
            }
            else {
                return ctx.channel.createMessage("Pecking is not disabled on this server!");
            }
        }
    }
}
module.exports.cmd = Peck;
