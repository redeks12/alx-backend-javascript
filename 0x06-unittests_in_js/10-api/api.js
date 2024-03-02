const express = require("express");
const app = express();
const port = 7865;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the payment system");
});
app.get("/cart/:id([0-9]+)", (request, response) => {
  response.send(`Payment methods for cart ${request.params.id}`);
});

app.get("/available_payments", (request, response) => {
  response.set("Content-Type", "application/json");
  response.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post("/login", (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log("API available on localhost port 7865");
});

module.exports = app;
