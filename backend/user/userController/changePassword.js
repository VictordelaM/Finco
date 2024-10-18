import jwt from "jsonwebtoken";
import { User } from "../userModel/user.model.js";
import bcrypt from "bcrypt";

export const changePassword = async(req,res)=>{
    try{
        const {password} = req.body
        const username = await jwt.decode(req.cookies.token).username
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const user = await User.findOneAndUpdate(
            {username:username},
            {passwordHash:passwordHash}
        )
        console.log(user)
        res.json(user)
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}