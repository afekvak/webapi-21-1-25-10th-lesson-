const ordersModel = require('../modules/orders')

module.exports = {

    getAll:(req,res) => {
        try{
            ordersModel.find().then((products)=>{
                return res.status(200).json(products);
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    getByID:(req,res) => {
        try{
            ordersModel.find({oID:req.params.id}).then((product)=>{
                return res.status(200).json(product);
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    updateById:(req,res) => {
        try{
            ordersModel.updateOne({oID:req.params.id},req.body).then((data) =>{
                return res.status(200).json(data);
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    postNew: (req, res) => {
        try{
            ordersModel.insertMany([req.body]).then((data)=>{
                return res.status(200).json(data)
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    
    deleteById:(req,res) => {
        try{
            ordersModel.deleteOne({oID:req.params.id}).then((data)=>{
                return res.status(200).json(data);
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
}