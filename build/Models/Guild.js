"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const GuildModel = new mongoose_1.default.Schema({
    guildID: String,
    prefix: {
        type: String,
        default: "jerry pls "
    }
});
module.exports = mongoose_1.default.model("Guild DB | Jerry", GuildModel);
