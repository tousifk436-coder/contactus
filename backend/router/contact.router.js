const express = require("express");
const router = express.Router();
const ContactModel = require("../schema/contact.model");
const sendMail = require("../utils/sendmail");


router.post("/message", async (req, res) => {

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(404).send({
      success: false,
      msg: "All fields are required!",
    });
  }

  if (subject.length < 5) {
    return res.status(400).send({
      success: false,
      msg: "subject must be atleast 5 character!",
    });
  }
  if (message.length < 10) {
    return res.status(400).send({
      success: false,
      msg: "message must be atleast 10 character!",
    });
  }

  try {
    await ContactModel.create(req.body);
    sendMail(name, email)
    res.status(201).send({
      success: true,
      msg: "Send message successfully!",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Internal server error!",
    });
  }

});

module.exports = router;
