var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.get('/pirates', function(req, res, next){
  return knex('pirates')
  .then(function(data){
    // console.log(data)
    res.json(data)
  })
})

router.get('/pirate/:id', function(req, res, next){
  console.log("database call, made it");
  return knex('pirates')
  .where({id: req.params.id})
  .then(function(data){
    console.log("hello" + data);
    res.json(data)

  })
})

router.post('/pirates/add', function (req, res, next) {
  return knex('pirates')
  .insert(req.body)
  .returning('*')
  .then(function (newPirate) {
    res.json(newPirate);
  })
})

router.delete('/pirates/delete/:id',function(req,res,next) {
  return knex('pirates')
    .where({id:req.params.id})
    .del()
    .then(function() {
      res.end()
    })
})

router.put('/pirate/edit/:id', function(req, res, next){
  return knex('pirates')
  .where({id:req.params.id})
  .update({
      name: req.body.name,
      poison: req.body.poison,
      accessory: req.body.accessory,
      image_url: req.body.image_url
    })
  .returning('*')
  .then(function(){
    res.end()
  })
})



module.exports = router;
