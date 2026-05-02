const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, html) => {
  try {
    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // ✅ Verify connection (important for debugging)
    await transporter.verify();
    console.log("✅ Email server is ready");

    // ✅ Email options
    const mailOptions = {
      from: `"Placement Portal 🚀" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: subject,
      html: html,
    };

    // ✅ Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("📧 Email sent:", info.response);
  } catch (error) {
    console.error("❌ Email error:", error.message);
  }
};

module.exports = sendEmail;