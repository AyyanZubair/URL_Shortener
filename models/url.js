const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/UI_URL_Shortener");

const urlSchema = mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistory: [{ timestamps: { type: Number } }]
}, { timestamps: true });

module.exports = mongoose.model("url", urlSchema);