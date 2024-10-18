import { User } from "../userModel/user.model.js";
import jwt from 'jsonwebtoken'



export const addExpense = async (req,res)=>{
  const username = jwt.decode(req.cookies.token).username
  const {amount, category, description, date} = req.body
  console.log(amount, category, description, date);
  try{
    const user = await User.findOne({username})
    if (!user) {
      throw new Error("User not found");
    }
    user.transactions.push({
      amount: amount,
      category: category,
      description: description,
      date: date,
      type: "expense"
    })
    const writeResult = await user.save();
      res.json(writeResult);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
}
}  


