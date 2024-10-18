import { User } from "../userModel/user.model.js";
import jwt from 'jsonwebtoken'

export const deleteTransaction = async (req, res) => {
    try {
        const username = await jwt.decode(req.cookies.token).username
        const transactionId = req.params.id
        const user = await User.findOneAndUpdate(
            { 
                username: username
            },
            { 
                $pull: { 
                    transactions: { _id: transactionId } 
                }
            },
            { new: true }
        );
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
