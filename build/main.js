"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jerry = void 0;
const eris_1 = require("eris");
const fs_1 = __importDefault(require("fs"));
const logger_1 = require("./logger");
const Command_1 = require("./Command");
const axios_1 = __importDefault(require("axios"));
const mongoose_1 = __importDefault(require("mongoose"));
const config = require("../config.json");
class Jerry extends eris_1.Client {
    constructor(token, options) {
        super(token, options);
        this.canSwimInRain = false;
        this.defaultColor = 14460415;
        this.logger = new logger_1.Logger();
        //DO NOT TOUCH
        //this makes events work
        this.bevents = {};
        this.commands = new eris_1.Collection(Command_1.command);
    }
    init() {
        fs_1.default.readFile(`${__dirname}/jerry.txt`, "utf8", function (err, data) {
            console.log(data);
            jerry.logger.success('Jerry', 'Commands loaded');
            jerry.logger.success('Jerry', 'Events loaded');
        });
        this.loadEvents();
        this.loadCommands();
        this.connect();
    }
    peck(target, times) {
        return `Jerry pecked ${target} ${times} times!`;
    }
    feedJerry(count, goodboy) {
        if (!goodboy) {
            return console.log(`You fed jerry ${count} Allys!`);
        }
        return "Jerry is a good boy!";
    }
    async postDBL() {
        await axios_1.default.post(`https://top.gg/api/bots/${jerry.user.id}/stats`, {
            // eslint-disable-next-line @typescript-eslint/camelcase
            server_count: this.guilds.size,
            // eslint-disable-next-line @typescript-eslint/camelcase
            shard_count: this.shards.size
        }, {
            headers: {
                Authorization: config.dblToken
            }
        });
    }
    get weiner() {
        return "Jerry has a tiny weiner!";
    }
    set swimInRain(state) {
        this.canSwimInRain = state;
    }
    loadEvents() {
        const eventfiles = fs_1.default.readdirSync(__dirname + "/Events");
        eventfiles.forEach(file => {
            this.loadEvent(file);
        });
    }
    db(mongodbLogin) {
        mongoose_1.default.connect(`${config.mongodbLogin}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
        mongoose_1.default.connection.on("error", () => {
            this.logger.error("MongoDB", "Failed to connect to MongoDB");
        });
        mongoose_1.default.connection.on("open", () => {
            this.logger.success("MongoDB", "Connected to MongoDB");
        });
    }
    loadEvent(eventfile) {
        try {
            let Event = require(`./Events/${eventfile}`).default;
            if (!Event) {
                Event = require(`./Events/${eventfile}`).event;
            }
            this.bevents[Event.name] = Event.handle.bind(this);
            this.on(Event.name, this.bevents[Event.name]);
        }
        catch (err) {
            console.log(err);
        }
    }
    reloadEvent(eventname) {
        if (!this.bevents[eventname]) {
            throw new Error("Can not reload an event that doesnt exist!");
        }
        delete require.cache[require.resolve(`${__dirname}/Events/${eventname.charAt(0).toUpperCase() + eventname.slice(1)}.js`)];
        this.removeAllListeners(eventname);
        this.loadEvent(eventname.charAt(0).toUpperCase() + eventname.slice(1));
    }
    loadCommands() {
        fs_1.default.readdir(`${__dirname}/Commands/`, (err, files) => {
            files.forEach((file, index) => {
                const filepath = `${__dirname}/Commands/` + file;
                console.log(filepath);
                const cmd = require(filepath);
                const newCmd = new cmd.cmd();
                jerry.commands.add(newCmd);
            });
        });
    }
}
exports.Jerry = Jerry;
const jerry = new Jerry(config.token, {
    autoreconnect: true,
    messageLimit: 100000000000000,
    restMode: true,
    getAllUsers: true
});
jerry.init();
// hi
