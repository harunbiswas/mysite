// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const accountSid = "AC0fcebc88c19025ba4fecb12b501e4081";
const authToken = "28338fdb4b4f528ca79fea4ed3eb13d0";

export default function handler(req, res) {
  console.log(req.body);
  if (req.method === "POST") {
    console.log(req.body);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
}
