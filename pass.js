const bcrypt = require('bcrypt'); // link to bcrypt folder
const pass = "afek"; // make a random password
const saltRounds = 10; // make 10 rounds
bcrypt.hash(pass , saltRounds , (err,hashString)=>{
    if(err)
    {
        console.log(err.message);
    }
    else
    {
        console.log(hashString);
    }
})


let hashFromDb = "$2b$10$dlCotOt2v/EGkL/79gzAA.qjglvW5e0hGyVasggbFtt03Ipkzl0c6"
bcrypt.compare(pass,hashFromDb).then((ans) =>{
    if(ans)
    {
        console.log('ok');
    }
    else
    {
        userModel.insertMany([req.body]).then((data) => {
            return res.status(200).json(data)
        });
    }
})
