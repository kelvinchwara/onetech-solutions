const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3000;

// Twilio credentials - replace with your own
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const client = twilio(accountSid, authToken);

// Your Twilio WhatsApp number (in the format 'whatsapp:+1234567890')
const twilioWhatsAppNumber = 'whatsapp:+YOUR_TWILIO_WHATSAPP_NUMBER';

// The recipient WhatsApp number (in the format 'whatsapp:+1234567890')
const recipientWhatsAppNumber = 'whatsapp:+254762132827';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-whatsapp', async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const whatsappMessage = 
    `New contact form submission:\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Service: ${service}\n` +
    `Message: ${message}`;

  try {
    await client.messages.create({
      from: twilioWhatsAppNumber,
      to: recipientWhatsAppNumber,
      body: whatsappMessage,
    });
    res.json({ success: true, message: 'WhatsApp message sent successfully.' });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    res.status(500).json({ success: false, error: 'Failed to send WhatsApp message.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
