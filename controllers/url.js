const URL = require("../models/url");
const short__id = require("shortid");

async function genreateShortId(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).send("URL is required...");
    const short_id = short__id();
    await URL.create({
        shortId: short_id,
        redirectURL: body.url,
        visitHistory: []

    })
    res.render("home", { id: short_id });
}

async function handleLogIn(req,res){
    const {email,password} = req.body;
    if(!email,!password) return res.render("login");
    URL.findOne({
        email,
        password
    });
    return res.render("home");
}


module.exports = {
    genreateShortId,handleLogIn
}