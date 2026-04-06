const axios = require("axios");

axios.post(
    "https://graph.facebook.com/v18.0/YOUR_PHONE_ID/messages",
    {
        messaging_product: "whatsapp",
        to: "2507XXXXXXXX",
        type: "text",
        text: { body: "🛒 Kaboss Shop: New product added!" }
    },
    {
        headers: {
            Authorization: "Bearer YOUR_API_TOKEN",
            "Content-Type": "application/json"
        }
    }
);