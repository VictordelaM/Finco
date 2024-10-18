import { User } from "../user/userModel/user.model.js";



//! ES MUSS IMMER ERST NAME DANN EMAIL GECHECKT WERDEN!!!
//eventuell noch ineinander verschachteln


export const checkRepeatName = async (req,res,next)=>{
    const { username } = req.body;
    try {
        const user = await User.findOne({ username }).lean();
        if (user) {
            res.locals.checkNameStatus= "username already exists"
            next()
        } else {
            res.locals.checkNameStatus= "ok"
            next()
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


//Prüft ob die Email schonmal verwendet wurde

export const checkRepeatEmail = async(req,res,next)=>{

    const { email } = req.body;
    try {
        const user = await User.findOne({ email }).lean();
        if (user) {
            // res.locals.checkEmailStatus= "Email already exists"
            // res.send('Email already exists')
            if(res.locals.checkNameStatus=='username already exists'){
                res.status(409).json({error:'username and email already exists'})
            }else{res.status(409).json({error:"Email already exists"})}
            
        } else {
            res.locals.checkEmailStatus= "ok"
            if(res.locals.checkNameStatus=='username already exists'){
                res.status(409).json({error:'username already exists'})
            }else{next()}
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
