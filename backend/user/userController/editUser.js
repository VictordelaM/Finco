import jwt from "jsonwebtoken";
import { User } from "../userModel/user.model.js";

export const editUser = async(req,res)=>{
    try{
        const {username, email} = req.body
        const cookieUsername = await jwt.decode(req.cookies.token).username
        console.log(username,email)
        if(username){
            const user = await User.findOneAndUpdate(
                {username: cookieUsername},
                {username: username},
            )
        res.clearCookie("token");

        const token = jwt.sign({ id: user._id, username: username }, process.env.JWT_SECRET);
        res.cookie("token", token, { httpOnly: true, secure: true, sameSite: 'none' });
        res.json({ status: "ok", token: token });
            
        }else if (email){
            const user = await User.findOneAndUpdate(
                {username: cookieUsername},
                {email: email}
            )
        res.json(user);
        }else{console.log('error: kein "username" oder "email" übergeben')}
    } catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}