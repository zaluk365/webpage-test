const {Router} = require("express");
const router = Router()
const path = require('path');
router.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

module.exports = router;