const router = require("express").Router()

router.get('/', (req, res) => {
    res.send("User home page")
})
module.exports = router