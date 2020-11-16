import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import path from "path";
import history from "connect-history-api-fallback";

const app = express();
app.use(bodyParser.json());

app.use("/images", express.static(path.join(__dirname, "../assets")));

app.use(
  express.static(path.resolve(__dirname, "../dist"), {
    maxAge: "1y",
    etag: false,
  })
);

app.use(history());

const dbUrl =
  process.env.MONGO_USER && process.env.MONGO_PASS
    ? `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@freecluster.tpabx.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
    : "mongodb://localhost:27017";

const dbName = process.env.MONGO_DBNAME || "footwear-db";

// GET: Get all products
app.get("/api/products", async (req, res) => {
  const client = await MongoClient.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(dbName);
  const products = await db.collection("products").find({}).toArray();

  res.status(200).json(products);
  client.close();
});

// GET: Get all cart items
app.get("/api/users/:userId/cart", async (req, res) => {
  const client = await MongoClient.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(dbName);
  const { userId } = req.params;
  const user = await db.collection("users").findOne({
    id: userId,
  });

  if (!user) return res.status(404).json("Could not find user");
  const products = await db.collection("products").find({}).toArray();
  const cartItemIds = user.cartItems;

  const cartItems = cartItemIds.map((id) =>
    products.find((product) => product.id === id)
  );

  res.status(200).json(cartItems);
  client.close();
});

// GET: Get specific product details
app.get("/api/products/:productId", async (req, res) => {
  const { productId } = req.params;
  const client = await MongoClient.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(dbName);

  const product = await db.collection("products").findOne({
    id: productId,
  });

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json("Could not find the product!");
  }
  client.close();
});

// POST: Add a cart item for a user
app.post("/api/users/:userId/cart", async (req, res) => {
  const { productId } = req.body;
  const { userId } = req.params;

  const client = await MongoClient.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(dbName);

  await db.collection("users").updateOne(
    {
      id: userId,
    },
    {
      $addToSet: {
        cartItems: productId,
      },
    }
  );

  const user = await db.collection("users").findOne({
    id: userId,
  });
  const cartItemIds = user.cartItems;
  const products = await db.collection("products").find({}).toArray();
  const cartItems = cartItemIds.map((id) =>
    products.find((product) => product.id === id)
  );

  res.status(200).json(cartItems);
  client.close();
});

// DELETE: Delete a cart item for a user
app.delete("/api/users/:userId/cart/:productId", async (req, res) => {
  const client = await MongoClient.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(dbName);

  const { userId, productId } = req.params;

  await db.collection("users").updateOne(
    { id: userId },
    {
      $pull: {
        cartItems: productId,
      },
    }
  );

  const user = await db.collection("users").findOne({ id: userId });
  const products = await db.collection("products").find({}).toArray();
  const cartItemIds = user.cartItems;

  const cartItems = cartItemIds.map((id) =>
    products.find((product) => product.id === id)
  );

  res.status(200).json(cartItems);
  client.close();
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is listening to port 8000");
});
