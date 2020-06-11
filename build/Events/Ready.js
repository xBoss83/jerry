"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReadyHandler {
    constructor() {
        this.name = "ready";
    }
    async handle() {
        this.editStatus("online", { name: "in the pool!", type: 0 });
        return this.logger.success("Jerry", "Jerry has connected to Discord!");
    }
}
exports.default = new ReadyHandler;
