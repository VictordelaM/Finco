import bcrypt from "bcrypt";
import { User } from "../userModel/user.model.js";

export const register = async (req,res,next)=>{
    try {
        const checkNameStatus = res.locals.checkNameStatus
        const checkEmailStatus = res.locals.checkEmailStatus
        console.log(checkNameStatus, checkEmailStatus)
        if(checkNameStatus == "ok" && checkEmailStatus == "ok"){
            const { firstName, lastName, username, password, email } = req.body;
            if (!firstName || !lastName || !username || !password || !email) {
                res.sendStatus(403);
                return;
            }  
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(password, salt);
            const user = await User.create({ username, passwordHash: hash, email, firstName, lastName });
            next()
        }else{
            res.json({checkNameStatus:checkNameStatus,checkMailStatus:checkEmailStatus})
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}