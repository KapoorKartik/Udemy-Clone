
const express = require("express")
const router = express.Router()


router.get('/cart', (req, res)=>{
    res.render('cart');
});




router.get('/checkout', (req, res)=>{
    res.render('checkout');
});

module.exports = router