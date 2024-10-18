import { User } from "../userModel/user.model.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const compareVerificationCode = async(req,res,next)=>{
    try{
        const {code}= req.body
        const email = await jwt.decode(req.cookies.emailToken).email
        const user = await User.findOne({email}).lean()
        if(bcrypt.compare(code.toString(), user.verificationCode)){
            next()
        }else{
            res.json({status:'Wrong Verificationcode'})
        }
        }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
    
}
