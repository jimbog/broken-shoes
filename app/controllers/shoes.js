var Shoe = require('../models/Shoe');

// GET
function getAll(request, response) {
  Shoe.find(function(error, shoes) {
    if(error) response.json({message: 'Could not find any shoe'});

    // response.json({message: shoes});
    response.json( {shoes: shoes});
  });
}

// POST
function createShoe(request, response) {
  console.log('in POST');
  console.log('body:',request.body);
  var shoe = new Shoe();

  shoe.name = request.body.name;
  shoe.color = request.body.color;

  shoe.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate shoe b/c:' + error});

    response.redirect('/shoes');
  });
}

// GET
function getShoe(request, response) {
  var id = request.params.id;

  Shoe.findById({_id: id}, function(error, shoe) {
    if(error) response.json({message: 'Could not find shoe b/c:' + error});

    response.json({shoe: shoe});
  });
}

function updateShoe(request, response) {
  var id = request.params.id;

  Shoe.findById({_id: id}, function(error, shoe) {
    if(error) response.json({message: 'Could not find shoe b/c:' + error});

    if(request.body.name) shoe.name = request.body.name;
    if(request.body.color) shoe.color = request.body.color;

    shoe.save(function(error) {
      if(error) response.json({messsage: 'Could not update shoe b/c:' + error});

      response.json({message: 'Shoe successfully updated'});
    });
  });
}

function removeShoe(request, response) {
  var id = request.params.id;

  Shoe.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete shoe b/c:' + error});

    response.json({message: 'Shoe successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  createShoe: createShoe,
  getShoe: getShoe,
  updateShoe: updateShoe,
  removeShoe: removeShoe
}
