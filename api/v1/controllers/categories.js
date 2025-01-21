const categoiresModel = require('../modules/categories')

module.exports = {

    getAll:(req,res) => {
        try{
            categoiresModel.find().then((products)=>{
                return res.status(200).json(products);
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    getByID:(req,res) => {
        try{
            categoiresModel.find({cID:req.params.id}).then((product)=>{
                return res.status(200).json(product);
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    updateById:(req,res) => {
        try{
            categoiresModel.updateOne({cID:req.params.id},req.body).then((data) =>{
                return res.status(200).json(data);
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    postNew: (req, res) => {
        try{
            categoiresModel.insertMany([req.body]).then((data)=>{
                return res.status(200).json(data)
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    
    deleteById:(req,res) => {
        try{
            categoiresModel.deleteOne({cID:req.params.id}).then((data)=>{
                return res.status(200).json(data);
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
}