import {default as mongoose} from "mongoose"; 

const GuildModel = new mongoose.Schema({
    guildID: String, 
    prefix: { 
        type: String, 
        default: "jerry pls "
    }
})

module.exports = mongoose.model("Guild DB | Jerry", GuildModel)