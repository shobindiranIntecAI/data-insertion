import { Product } from "../models/mongo";

export async function seedMongo() {
  const seeds = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 600 }
  ];

  for (const product of seeds) {
    await Product.updateOne(
      { name: product.name },
      { $setOnInsert: product },
      { upsert: true }
    );
  }

  console.log("✅ MongoDB seeded");
}
