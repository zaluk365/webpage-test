const {Router} = require("express");
const router = Router()
router.post("/register", function(req, res){
    const user = req.body
    console.log(user)
})

module.exports = router;