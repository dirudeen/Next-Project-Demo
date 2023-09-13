import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";


function HomePage(props) {
  return (
    <>
    <Head>
      <title>React Meetups</title>
      <meta name="description" content="Browse a huge list of highly active React meetups" />
    </Head>
    <MeetupList meetups={props.meetups} />;
    </>
  )
}

export async function getStaticProps() {
  // We can add the backend code here, it will not shipped to the frontend
  const client = await MongoClient.connect(
    "mongodb+srv://dirudeen22:Starwas@cluster0.de5y3y9.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const allMeetups = await meetupCollection.find().toArray();

  return {
    props: {
      meetups: allMeetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      })),
    },
    revalidate: 20,
  };
}

export default HomePage;
