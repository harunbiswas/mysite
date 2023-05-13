// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const tailio = require("twilio");

export default function handler(req, res) {
  if (req.method === "POST") {
    res.end();
  }

  res.status(404);
  res.end();
}
