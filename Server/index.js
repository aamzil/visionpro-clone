const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
require("dotenv").config();

const app = express();
const stripe = Stripe("sk_test_51QF5lBF0xgJVFx6Ke3hb9RuyUL4HHZuiRuU5pNHTc0ltVoRapz84sdW8hv3Sd64Tb29ufmKTxudQ8ha0B42DHeYH00QTN5hXf7");

app.use(
  cors({
    origin: ["https://applestoreclone.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true,
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
