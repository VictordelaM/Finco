
import { User } from "../userModel/user.model.js";
import jwt from 'jsonwebtoken'



export const addIncomeCategory = async (req,res)=>{
    const username = await jwt.decode(req.cookies.token).username
    const {categoryName, color, imgUrl} = req.body
        try{
            const user = await User.findOne({username})
        if (!user) {
            throw new Error("User not found");
        }
    user.incomeCategories.push({
        categoryName: categoryName,
        color: color,
        imgUrl: imgUrl
    })
    const writeResult = await user.save();
        res.json(writeResult);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}