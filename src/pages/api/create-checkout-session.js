const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;
  const reformattedItems = items.map((item) => ({
    price_data: {
      currency: "inr",
      unit_amount: Math.round(item.price * 1000),
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
    quantity: 1, // update here in case you add quantity in future
  }));
  const session = await stripe.checkout.sessions.create({
    line_items: reformattedItems,
    mode: "payment",
    success_url: `${process.env.HOST}success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      titles: JSON.stringify(items.map((item) => item.title)),
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  res.status(200).json({ id: session.id });
};