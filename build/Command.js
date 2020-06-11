"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class command {
    constructor(data) {
        this.name = data.name || "unnamed";
        this.aliases = data.aliases || [];
        this.id = this.name;
        this.requiredGuilds = data.requiredGuilds || [];
        this.requiredRoles = data.requiredRoles || [];
        this.requiredUsers = data.requiredUsers || [];
        if (data.alwaysEnabled !== undefined) {
            this.alwaysEnabled = data.alwaysEnabled;
        }
        else {
            this.alwaysEnabled = false;
        }
        this.helpInfo = data.helpInfo || "someone waz lazy";
        this.commandType = data.commandType || "default";
    }
    async execute(msg, args, jerry, dev) {
    }
}
exports.command = command;
