const router = require('express').Router()
const model = require('../models/Customer')

router.route('/')
/**
 * @description get all customers
 */
.get((req, res)=>{
    model.find().exec()
    .then(results =>{
        res.json(results)
    })
    .catch(err=>{
        res.sendStatus(500)
    })
})

/**
 * @description creates new customer
 */
.post((req, res)=>{
    (model(req.body)).save()
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
        res.sendStatus(503)
    })
})


module.exports = router;