const router = require('express').Router();
const dataLagu = require('../services/lagu');

router.get('/',async function(req,res,next){
    try{
        res.json(await dataLagu.getLaguAll());
    }catch(err){
        console.log(`Error while getting Song List`,err.message);
        next(err);
    }
})

router.get('/:ayas',async function(req,res,next){
    try{
        res.json(await dataLagu.getLaguNegara(req.params.ayas));
    }catch(err){
        console.log(`Error while getting Song List`,err.message);
        next(err);
    }
})

router.post('/',async function(req,res,next){
    try{
        res.json(await dataLagu.getLaguNegara(req.params.ayas));
    }catch(err){
        console.log(`Error while getting Song List`,err.message);
        next(err);
    }
})

module.exports = router;