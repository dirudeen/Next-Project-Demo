// our-domain.com/new-meetup is our api endpoint
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://dirudeen22:Starwas@cluster0.de5y3y9.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    
    const db = client.db();

    const meetupCollection = db.collection('meetups');
   const result = await meetupCollection.insertOne(data)

   console.log(result)

   client.close()

   res.status(201).json({message: 'meetup inserted!'})
  }
}
