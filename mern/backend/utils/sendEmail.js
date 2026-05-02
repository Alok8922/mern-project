const { Resend } = require("resend");

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send email using Resend
 * @param {string} to - recipient email
 * @param {string} subject - email subject
 * @param {string} html - HTML content
 */
const sendEmail = async (to, subject, html) => {
  try {
    const response = await resend.emails.send({
      from: "Placement Portal <onboarding@resend.dev>", // default test sender
      to: to,
      subject: subject,
      html: html,
    });

    console.log("📧 Email sent successfully:", response);
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};

module.exports = sendEmail;