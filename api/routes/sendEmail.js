const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// POST endpoint to send an email
router.post("/api/sendemail", async (req, res) => {
  try {
    // Extract data from the request body
    const { name, email, subject, message } = req.body;

    // Create a Nodemailer transporter using your email service's SMTP settings
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "burakkarhan657@gmail.com",
        pass: "98Karhan98",
      },
    });
    // Define the email options
    const mailOptions = {
      from: `${email}`,
      to: "aburakkarhan@gmail.com", // Replace with the recipient's email address
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with a success message
    res.status(200).json({ message: "Email sent successfully" });
    console.log("Email sent successfully.");
  } catch (error) {
    console.log("fuck");
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
