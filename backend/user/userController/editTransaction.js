import { User } from "../userModel/user.model.js";
import jwt from 'jsonwebtoken'

export const editTransaction= async(req,res)=>{
    try{
        const {category, amount, description, date} = req.body
        const username = await jwt.decode(req.cookies.token).username
        const transactionId = req.params.id
        const user = await User.findOneAndUpdate(
            { 
                username: username, 
                "transactions._id": transactionId // Überprüft, ob die Transaktion in den Benutzerdaten vorhanden ist
            },
            {
                $set: { 
                    "transactions.$.category": category, 
                    "transactions.$.amount": amount,
                    "transactions.$.description": description,
                    "transactions.$.date": date, 
                }
            },
            { new: true } 
        )
        res.json(user)
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}