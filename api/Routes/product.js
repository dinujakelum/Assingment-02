const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'complete get command'
    });
    
});
router.post('/',(req, res, next)=>{
    res.status(200).json({
        message: 'complete post command'
    });
});
router.put('/',(req, res, next)=>{
    res.status(200).json({
        message: 'complete put commande'
    });
});
router.patch('/',(req, res, next)=>{
    res.status(200).json({
        message: 'complete patch command'
    });
});
router.delete('/',(req, res, next)=>{
    res.status(200).json({
        message: 'complete delete command'
    });
});

module.exports = router;