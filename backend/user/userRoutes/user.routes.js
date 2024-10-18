import express from "express";
import multer from "multer";
import {checkAuth} from '../../middleware/checkAuth.js'
import { register } from "../userController/userRegister.js";
import { login } from "../userController/userLogin.js";
import { getUserData } from "../userController/getUserData.js";
import { logout } from "../userController/userLogout.js";
import { addExpense } from "../userController/addExpense.js";
import { addIncome } from "../userController/addIncome.js";
import { addExpenseCategory } from "../userController/addExpenseCategory.js";
import { addIncomeCategory } from "../userController/addIncomeCategory.js";
import { checkRepeatEmail, checkRepeatName } from "../../middleware/checkRepeat.js";
import { editUser } from "../userController/editUser.js";
import { changePassword } from "../userController/changePassword.js";
import { imageUpload } from "../userController/uploadImage.js";
import { removeUser } from "../userController/removeUser.js";
import { sendVerificationMail } from "../userController/sendMail.js";
import { compareVerificationCode } from "../userController/compareVerificationCode.js";
import { editTransaction } from "../userController/editTransaction.js";
import { deleteTransaction } from "../userController/deleteExpense.js";
import { resetPassword } from "../userController/resetPassword.js";

const userRouter = express.Router()
const mult = multer({ storage: multer.memoryStorage() })

//!CHECKAUTH
//? user
//*basic
userRouter.post("/register",mult.none(),checkRepeatName, checkRepeatEmail, register, login)
userRouter.post('/login', mult.none(), login)
userRouter.get('/getUser', checkAuth, getUserData)
userRouter.get('/logout', logout)

//*edit
userRouter.patch('/editUser', mult.none(),checkRepeatName, checkRepeatEmail, editUser)
userRouter.patch('/changePassword', mult.none(), checkAuth, changePassword)
userRouter.patch('/uploadImage', mult.single("image"),  imageUpload) //sowohl für initialen upload als auch als änderung
userRouter.delete('/removeUser', mult.none(), removeUser)

//*other
userRouter.post('/sendMail', mult.none(), sendVerificationMail )
userRouter.post('/compareVerificationCode', mult.none(), compareVerificationCode, resetPassword)

//?transaction
userRouter.post('/addExpense', mult.none(), checkAuth, addExpense)
userRouter.post('/addIncome', mult.none(), checkAuth, addIncome)
userRouter.post('/addExpenseCategory', mult.none(), checkAuth, addExpenseCategory)
userRouter.post('/addIncomeCategory', mult.none(), checkAuth, addIncomeCategory)
userRouter.patch('/editTransaction/:id', mult.none(), editTransaction)
userRouter.delete('/deleteTransaction/:id', mult.none(), deleteTransaction)


export default userRouter