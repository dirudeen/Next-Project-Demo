// our-domain.com/new-meetup is our api endpoint
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const url = process.env.MONGODB_URL;

    const client = await MongoClient.connect(url);

    const db = client.db();

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "meetup inserted!" });
  }
}
