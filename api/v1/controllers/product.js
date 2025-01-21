const productModel = require('../modules/product')

module.exports = {

    getAll: (req, res) => {
        try {
            productModel.find().then((products) => {
                return res.status(200).json(products);
            });
        }
        catch {
            return res.status(500).json({ msg: "500 server error" });
        }
    },
    getByID: (req, res) => {
        try {
            productModel.find({ pID: req.params.id }).then((product) => {
                return res.status(200).json(product);
            });
        }
        catch {
            return res.status(500).json({ msg: "500 server error" });
        }
    },
    updateById: (req, res) => {
        try {
            productModel.updateOne({ pID: req.params.id }, req.body).then((data) => {
                return res.status(200).json(data);
            });
        }
        catch {
            return res.status(500).json({ msg: "500 server error" });
        }
    },
    postNew: (req, res) => {
        try {
            productModel.insertMany([req.body]).then((data) => {
                return res.status(200).json(data)
            });
        }
        catch {
            return res.status(500).json({ msg: "500 server error" });
        }
    },

    deleteById: (req, res) => {
        try {
            productModel.deleteOne({ pID: req.params.id }).then((data) => {
                return res.status(200).json(data);
            });
        }
        catch {
            return res.status(500).json({ msg: "500 server error" });
        }
    },
}