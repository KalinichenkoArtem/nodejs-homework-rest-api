const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "kalinichenko.as@ukr.net" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;

// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const { META_PASSWORD } = process.env;

// const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "always.tired@meta.ua",
//     pass: META_PASSWORD,
//   },
// };

// const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   to: "kalinichenko.as@ukr.net",
//   from: "always.tired@meta.ua",
//   subject: "Test",
//   html: "Test",
// };

// transport
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));

// module.exports = sendEmail;
