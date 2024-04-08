const {Schema, model} = require("../connection")

const meeting = new Schema({
    title: String,
    timing: Number,
    date: {
        type: Date,
        
    },

});

module.exports = model("create-mmeeting", meeting);