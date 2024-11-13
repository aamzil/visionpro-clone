const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
require("dotenv").config();

const app = express();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = Stripe(stripeSecretKey);

app.use(
  cors({
    origin: ["https://applestoreclone.vercel.app"],
  })
);
app.use(express.json());

app.post("/create-payment", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Total Payment",
            },
            unit_amount: req.body.amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://applestoreclone.vercel.app/success",
      cancel_url: "https://applestoreclone.vercel.app/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating payment intent:", error.message, error.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
