"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const eris_1 = require("eris");
const fs_1 = __importDefault(require("fs"));
const logger_1 = require("./logger");
const Command_1 = require("./Command");
const config = require('../config.json');
class Jerry extends eris_1.Client {
    constructor(token, options) {
        super(token, options);
        this.canSwimInRain = false;
        this.load = () => {
            fs_1.default.readdir("./commands/", (err, files) => {
                files.forEach((file, index) => {
                    const filepath = "./commands/" + file;
                    console.log(filepath);
                    const cmd = require(filepath);
                    const newCmd = new cmd.cmd();
                    jerry.commands.add(newCmd);
                });
                return jerry.logger.success('Jerry', 'Commands Loaded!');
            });
        };
        this.logger = new logger_1.Logger();
        //DO NOT TOUCH
        //this makes events work
        this.bevents = {};
        this.commands = new eris_1.Collection(Command_1.command);
    }
    init() {
        fs_1.default.readFile(`${__dirname}/jerry.txt`, "utf8", function (err, data) {
            console.log(data);
        });
        this.loadEvents();
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
}
exports.Jerry = Jerry;
const jerry = new Jerry(config.token, {});
jerry.init();
