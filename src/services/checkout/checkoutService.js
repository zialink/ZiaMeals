import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_519E5FrIKjzwjY2x7KAAy1FNVN7gOpLw7gGtih6pOPGTqpNlpj95cPeMp75ZKnJA2Z21ZUvUaZB4NZSg1NYjJWweT00jW8pOlXK"
);

export const cardTokenRequest = (card) => stripe.createToken(card);
