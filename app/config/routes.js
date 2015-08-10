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
  .post(shoesController.createShoe);


router.route('/shoes/:id')

  // GET return specific shoe
  .get(shoesController.getShoe)

  // PATCH update existing shoe
  .patch(shoesController.updateShoe)

  // DELETE remove specific shoe from DB
  .delete(shoesController.removeShoe);

// exports the routes for use anywhere in app
module.exports = router
