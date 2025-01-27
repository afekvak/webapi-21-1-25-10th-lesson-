const router = require('express').Router(); // יצירת אובייקט ראוטר
const userModel = require('../modules/user');
const bcrypt = require('bcrypt');
router.post('/login', (req, res) => { 
    
    const { userName, pass, fullName } = req.body;
    userModel.find({userName}).then((data) => {
        if (data.length==0)
        {
            return res.status(200).json({ msg: "user / pass not found" });
        }
        const hashPass = data[0].pass;
        bcrypt.compare(pass,hashPass).then((ans)=>{
            return res.status(200).json({msg:"login succeful"});
        })
    });
}); // נקודת קצה עבור התחברות
router.post('/signup', (req, res) => { // נקודת קצה עבור הרשמה
    //נקבל את פרטי המשתמש לרישות
    //נצפין את הסיסמה
    //נשמור את פרטי המשתמש בבסיס הנתונים


    // const xxBody = {
    //     userName:"afek2003@gmail.com",
    //     pass:"123",
    //     fullName:"afek vaknin",
    // };
    // const x = xxBody.userName;
    // const y = xxBody.pass;
    // const z = xxBody.fullName;
    // const{userName,pass,fullName} = xxBody
    const saltRounds = 10;
    const { userName, pass, fullName } = req.body;
    userModel.findOne({ userName }).then((valid) => {
        if (valid = true) {
            return res.status(500).json({ msg: "user already exists please login instead" });
        }
        else 
        {
            bcrypt.hash(pass, saltRounds, (err, hashString) => {
                if (err) // במקרה של שגיאה נחזיר הודעה בהתאם
                {
                    return res.status(500).json({ msg: err.message });
                }
                else 
                {
                    userModel.insertMany([{ userName, pass: hashString, fullName }]).then((data) => {
                        return res.status(200).json(data)
                    });
                }
            })
        }
    });
});

module.exports = router;