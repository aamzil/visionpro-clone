const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
require("dotenv").config();

const app = express();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = Stripe(stripeSecretKey);

app.use(express.json());

export default async (req, res) => {
  // Allow CORS for the frontend domain
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://applestoreclone.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Preflight request (browser checks if it’s allowed to proceed)
    return res.status(200).end();
  }

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
};
