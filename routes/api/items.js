const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Item model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
// @access PUBLIC
 router.get('/', auth, (req, res) => {
    Item.find()
        .sort({date:-1 })
        .then(items => res.json(items)) //the promise
  });

// @route POST api/items
// @desc  CREATE A Post
// @access PUBLIC
 router.post('/', auth,  (req, res) => {
    const newItem = new Item({
      name: req.body.name
    });
  
    newItem.save().then(item =>res.json(item));
});

// @route DELETE api/items
// @desc  DelTE An item 
// @access PUBLIC
router.delete('/:id', auth,  (req, res) => {
  Item.findById(req.params.id)
      .then(item => item
                    .remove()
                    .then( () => res.json({sucess:true}))
      .catch(err => res.status(404).json({success:false}))
      );

})
module.exports = router;