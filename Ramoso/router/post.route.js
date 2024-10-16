const express = require("express");

const router = express.Router();

router.get("/reservation", (req, res) => {
    res.send("Ramoso");
});

module.exports = router;