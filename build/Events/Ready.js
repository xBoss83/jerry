"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("../../config.json");
let logTime = new Date().toLocaleTimeString();
let logDate = new Date().toLocaleDateString();
class ReadyHandler {
    constructor() {
        this.name = "ready";
    }
    async handle() {
        this.editStatus("online", { name: "in the pool!", type: 0 });
        this.logger.success("Jerry", "Jerry has connected to Discord!");
    }
}
exports.default = new ReadyHandler;
