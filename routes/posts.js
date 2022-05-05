const router = require('express').Router();

router.get('/', (req,res) => {
    console.log('Hello from posts route');
})
module.exports = router;