

const express = require("express")
const router = express.Router()







router.get('/course1', (req, res)=>{
    res.render('course1');
});


router.get('/course2', (req, res)=>{
    res.render('course2');
});

router.get('/course3', (req, res)=>{
    res.render('course3');
});


router.get('/course4', (req, res)=>{
    res.render('course4');
});


router.get('/course5', (req, res)=>{
    res.render('course5');
});




module.exports = router