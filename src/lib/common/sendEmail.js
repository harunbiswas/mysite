const nodemailer = require("nodemailer");

const sendMail = async (email, otp) => {
  if (email && otp) {
    const transporter = nodemailer.createTransport({
      host: "imap.gmail.com",
      port: 993,
      secure: true,
    });

    const mailOptions = {
      from: "harunbiswasrubel@gmail.com",
      to: email,
      subject: "Email varification",
      text: `This is your otp ${otp}. Thanks for joining HBR`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return false;
      } else {
        return true;
      }
    });
  } else {
    return false;
  }
};

module.exports = sendMail;
