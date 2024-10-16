const express = require("express");
const router = require("./router/post.route");

const app = express();
app.use(router)

app.listen(4000, () => {
    console.log("server started");
})

module.exports = router;