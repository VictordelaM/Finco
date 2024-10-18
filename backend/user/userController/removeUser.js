import { User } from "../userModel/user.model.js"
import jwt from 'jsonwebtoken'


export const removeUser = async(req, res)=>{
    
    try{
    const username = jwt.decode(req.cookies.token).username
    const user = await User.findOneAndDelete({username:username})
    if (!user) {
        return res.status(400).send('Item not found');
    }
    return res.status(200).send("Id " + req.params.id + " has been deleted");//?funtioniert req.params.id?
}
    catch(error){
        return res.status(500).json(err);
    }
}