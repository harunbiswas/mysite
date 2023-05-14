// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import generateOTP from "@/lib/common/otp";
import sendMail from "@/lib/common/sendEmail";

const DB = require("@/lib/mongoDB/db");
const User = require("@/lib/mongoDB/user");

export default async function handler(req, res) {
  const { email, verifi } = req.body;

  if (req.method === "POST") {
    await DB();

    try {
      const u = await User.findOne({ email });

      if (u) {
        res.status(200).json(u);
        res.end();
      } else {
        if (verifi) {
          try {
            const result = await User.create({ email });
            res.status(200).json({ result });
            res.end();
          } catch (e) {
            res.status(500).json({ message: "Internal server error!" });
            res.end();
          }
        } else {
          const opt = generateOTP();
          const sendmail = sendMail(email, opt);

          if (sendmail === true) {
            res.status(200).json({ email, verifi: true, opt });
          } else {
            res.status(500).json({ message: "Internal server error!" });
            res.end();
          }
        }
      }
    } catch (e) {
      res.status(500).json({ message: "Internal server error!" });
      res.end();
    }
  } else {
    res.status(404);
    res.end();
  }
}
