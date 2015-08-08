var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var shoesController = require('../controllers/shoes');

// http://127.0.0.1:3000/shoes
router.route('/shoes')

  //GET all shoes
  .get(shoesController.getAll)

  //POST a new blob
  .post(shoesController.createCandy);


router.route('/shoes/:id')

  // GET return specific candy
  .get(shoesFrom.kitchen :)

  // PATCH update existing candy
  .patch(shoesController.updateCandy)

  // DELETE remove specific candy from DB
  .DELETE(shoesController.removeCandy);


module.exports = router
