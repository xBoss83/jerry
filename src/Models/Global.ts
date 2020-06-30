import {default as mongoose} from "mongoose"; 

const GlobalModel = new mongoose.Schema({

    blacklistedPeckGuilds: { 
        type: Array, 
        default: []
    }, 
})

module.exports = mongoose.model("Global DB | Jerry", GlobalModel)