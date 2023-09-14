import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import Head from "next/head";

function MeetupDetailsPage(props) {
  const { title, image, address, description } = props.meetupData;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MeetupDetails
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </>
  );
}
export async function getStaticPaths() {
  const url = process.env.MONGODB_URL;

  const client = await MongoClient.connect(url);
  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: "blocking",
  };
  b;
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;

  const url = process.env.MONGODB_URL;

  const client = await MongoClient.connect(url);

  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const selectedMeetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
    revalidate: 1,
  };
}

export default MeetupDetailsPage;
