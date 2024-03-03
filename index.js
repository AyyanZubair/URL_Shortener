const express = require("express");
const app = express();
const urlRouter = require("./routes/url");
const staticRouter = require("./routes/staticRoute");
const userRouter = require("./routes/users");
const { restrictedToLoggedIn } = require("./middlewares/auth");
const URL = require("./models/url");
PORT = 8002;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.use("/url", restrictedToLoggedIn, urlRouter);

app.use("/", staticRouter);

app.use("/signup", userRouter);

app.get("/:shortid", async (req, res) => {
    const shortId = req.params.shortid;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );
    res.redirect(entry?.redirectURL);
});
app.listen(PORT, () => console.log(`server started on port:${PORT}`));