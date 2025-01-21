module.exports = (req,res,next)=>{
    let arrIps=['192.168.1.6'];
    for (let i=0;i<arrIps.length;i++)
    {
        console.log(req.ip);
        if(req.ip==arrIps[i])
        {
           return next();
        }
    }
    return res.status(401).json({msg: `not authorized`});
};