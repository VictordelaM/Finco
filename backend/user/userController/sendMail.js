import { mail } from '../../utils/mail.js';
import { User } from '../userModel/user.model.js';
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

export const sendVerificationMail = async (req,res)=>{
    try{
      const code = Math.floor(Math.random() * 900000) + 100000
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(code.toString(), salt);
      const {email} = req.body
      const user = await User.findOneAndUpdate(
          {email: email},
          {verificationCode: hash}
      )
    const emailResult = await mail.sendMail({
        from: '<finko@kunndensupport.de>',
        to: `<${user?.email}>`,
        subject: "Reset Passwort",
        text: `Hier ist dein Code um dein Passwort zurückzusetzten: ${code}`,
        // html: `<p>Danke für deine Registrierung, .</p> <p>Klicke hier um zu bestaetigen. Dies ist dein Verification Code: </p>`,
      });
      const emailToken = jwt.sign({email:email}, process.env.JWT_SECRET)
      res.cookie("emailToken", emailToken, { httpOnly: true, secure: true, sameSite: 'none' })
      res.json(emailResult)
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }

}



