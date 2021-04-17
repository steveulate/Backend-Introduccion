var express = require('express');
var router = express.Router();
const productController = require('../controllers/product');
var HttpStatus = require('http-status-codes');

router.post('/', (req, res) => {
    productController.addProduct(req.body)
        .then(result => {
            if (result.output.success)
                res.sendStatus(HttpStatus.StatusCodes.CREATED);
            else
                res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ error: "El nombre o el id del producto ya existen!" });
        })
        .catch(err => {
            res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
        })
});

router.get('/', (req, res) => {
    productController.getProducts(req.query)
        .then(result => {
            res.status(HttpStatus.StatusCodes.OK).json(result.recordset);
        })
        .catch(err => {
            res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
        })
});

router.put('/', (req, res) => {
    productController.updateProduct(req.body)
        .then(result => {
            if (result.output.success){ 
                res.sendStatus(HttpStatus.StatusCodes.NO_CONTENT);
            }
            else{
                res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ error: "El nombre o el id del producto ya existen!" });
            }
        })
        .catch(err => {
            res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
        })
});

router.delete('/', (req, res) => {
    productController.deleteProduct(req.query)
        .then(result => {
            if (result.output.success){ 
                res.sendStatus(HttpStatus.StatusCodes.NO_CONTENT);
            }
            else{
                res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ error: "El id del producto no existe" });
            }
        })
        .catch(err => {
            res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
        })
});

module.exports = router;