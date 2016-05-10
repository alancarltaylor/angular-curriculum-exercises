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
    console.log(data)
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


module.exports = router;
