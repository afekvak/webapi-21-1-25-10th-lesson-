const express = require('express');
const router = express.Router();
const {getAll,getByID,updateById,deleteById,postNew} = require('../controllers/orders');

router.get('/' , getAll);
router.get('/:id' , getByID);
router.post('/' , postNew);
router.put('/:id' , updateById);
router.delete('/:id' , deleteById);



module.exports = router;

