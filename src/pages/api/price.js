// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const DB = require("@/lib/mongoDB/db");
const User = require("@/lib/mongoDB/user");

export default async function handler(req, res) {
  const { email } = req.body;
  if (req.method === "POST") {
    await DB();

    try {
      const u = await User.findOne({ email });

      if (u) {
        res.status(200).json(u);
        res.end();
      } else {
        try {
          const result = await User.create({ email });
          res.status(200).json({ result });
          res.end();
        } catch (e) {
          res.status(500).json({ message: "Internal server error!" });
          res.end();
        }
      }
    } catch (e) {
      res.status(500).json({ message: "Internal server error!" });
      res.end();
    }

    res.end();
  } else {
    res.status(404);
    res.end();
  }
}
