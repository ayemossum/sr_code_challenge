let router = require("express").Router();
let data = require("./fruits_backend.json");
let _ = require("lodash");

router.get("/", (req, res) => {
    let limit = req.query.limit || -1;
    let offset = req.query.offset || 0;
    let color = req.query.color || null;
    let in_season = req.query.in_season === "true";

    let current = _.cloneDeep(data);
    console.log(color);
    if (color) {
        current = _.filter(current, fruit => fruit.colors.indexOf(color.toLowerCase()) !== -1);
    }
    if (in_season) {
        current = _.filter(current, fruit => fruit.in_season);
    }
    res.set("Content-type", "application/json");
    res.send(JSON.stringify(current));
});

module.exports = router;
