var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
    res.render("form", { title: "Submit New Message" });
});

module.exports = router;
