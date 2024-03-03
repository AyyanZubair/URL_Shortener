const USER = require("../models/users");
const { v4: uuidv4 } = require("uuid");
const { setuser } = require("../services/auth");

async function handleSignUp(req, res) {
    const { username, email, password } = req.body;
    if (!username, !email, !password) return res.status(400).send("your data is incomplete");
    USER.create({
        username,
        email,
        password
    })
    return res.render("home");
}

async function handleLogIn(req, res) {
    const { email, password } = req.body;
    const user = await USER.findOne({
        email,
        password
    })
    if (!user) return res.render("login");
    const sessionId = uuidv4();
    setuser(sessionId, user);
    res.cookie("uid", sessionId);
    return res.render("home");

}
module.exports = {
    handleSignUp, handleLogIn
}