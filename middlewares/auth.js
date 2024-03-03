const { getuser } = require("../services/auth");

async function restrictedToLoggedIn(req, res, next) {
    const userUid = req.cookies?.uid;

    if (!userUid) return res.redirect("/login");
    const user = getuser(userUid);

    if (!user) return res.redirect("/login");

    req.user = user;
    next();
}

module.exports = {
    restrictedToLoggedIn
}