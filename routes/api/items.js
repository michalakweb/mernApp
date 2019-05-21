const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @description GET All Items
// @access Public
router.get('/', (req, res) => {
    Item.find()
    .then(items => res.json(items))
});

// @route POST api/items
// @description POST Items
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        customerID: req.body.customerID,
        name: {
            first: req.body.name.first,
            last: req.body.name.last
        },
        birthday: req.body.birthday,
        gender: req.body.gender,
        lastContact: req.body.lastContact,
        customerLifetimeValue: req.body.customerLifetimeValue || Math.random(),
    });

    newItem.save()
    .then(item => res.json())
});

// @route DELETE api/items
// @description DELETE an Item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
});


module.exports = router;
