import { User } from "../userModel/user.model.js";
import jwt from 'jsonwebtoken'



export const addExpenseCategory = async (req,res)=>{
  const username = await jwt.decode(req.cookies.token).username
  const {categoryName, color, imgUrl} = req.body
  console.log('bitte')
  try{
    const user = await User.findOne({username})
    if (!user) {
      throw new Error("User not found");
    }
    user.expenseCategories.push({
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