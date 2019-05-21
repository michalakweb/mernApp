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

module.exports = router;
