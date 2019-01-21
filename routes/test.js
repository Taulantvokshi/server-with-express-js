const express = require('express')
const router = express.Router()

router.get('/b',(req,res)=>{
   
    res.send('<h1>Hello From testing</h1>')
})

router.get('/b/:id',(req,res)=>{
    console.log(req.params.id)
    res.send('<h1>I am in </h1>')
})

module.exports = router