const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// Environments variable
const port = process.env.PORT || 5000;
const userId = process.env.DB_USERID;
const pass = process.env.DB_PASSWORD;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (reg, res) => {
  res.send("Hello Server is started");
});
app.listen(port, () => {
  console.log(`App in listening in ${port}`);
});

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${userId}:${pass}@cluster0.myyqyo8.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    const database = client.db("electroHubDB");
    const productCollection = database.collection("allproducts");
    const brandCollection = database.collection("brands");
    const campaignCollection = database.collection("campaign");
    const cartCollection = database.collection("mycart");

    app.get("/products", async (req, res) => {
      const productsData = productCollection.find();
      const result = await productsData.toArray();
      res.send(result);
    });

    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const productsData = productCollection.find(query);
      const result = await productsData.toArray();
      res.send(result);
    });

    app.get("/products/brand/:brandname", async (req, res) => {
      const brand = req.params.brandname;
      const query = { brand: brand };
      const productsData = productCollection.find(query);
      const result = await productsData.toArray();
      res.send(result);
    });

    app.get("/brands", async (req, res) => {
      const brandData = brandCollection.find();
      const result = await brandData.toArray();
      res.send(result);
    });

    app.get("/campaigns/:brand", async (req, res) => {
      const campaignBrand = req.params.brand;
      const query = { brand: campaignBrand };
      const campaignData = campaignCollection.find(query);
      const result = await campaignData.toArray();
      res.send(result);
    });

    app.get("/cart", async (req, res) => {
      const myCartData = cartCollection.find();
      const result = await myCartData.toArray();
      res.send(result);
    });

    app.post("/products", async (req, res) => {
      const data = req.body;
      const result = await productCollection.insertOne(data);
      res.send(result);
    });

    app.put("/products/:id", async (req, res) => {
      const id = req.params.id;
      const updatedInfo = req.body;
      const query = { _id: new ObjectId(id) };
      const insertOptional = { upsert: true };
      const updatedProduct = {
        $set: {
          name: updatedInfo.name,
          brand: updatedInfo.brand,
          category: updatedInfo.category,
          price: updatedInfo.price,
          description: updatedInfo.description,
          rating: updatedInfo.rating,
          imageUrl: updatedInfo.imageUrl,
        },
      };

      const result = await productCollection.updateOne(
        query,
        updatedProduct,
        insertOptional
      );
      res.send(result);
    });

    app.post("/cart", async (req, res) => {
      const data = req.body;
      const result = await cartCollection.insertOne(data);
      res.send(result);
    });

    app.delete("/cart/:id", async (req, res) => {
      const itemId = req.params.id;
      const query = { _id: new ObjectId(itemId) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
