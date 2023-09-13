import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "The first meetup",
    address: "ALIBABA apt bahcelieveler mah, talas kayseri",
    image:
      "https://1.bp.blogspot.com/-_QDouVq0-98/X0JlrcU7zmI/AAAAAAAAkQw/SuYveVPa44Ib4ANn5MXjmMiOjyxsuQcywCLcBGAsYHQ/s1600/catlayana-kadar-anayurt-talas-kayseri-menu-fiyat-%2B%25284%2529.jpg",
  },

  {
    id: "m2",
    title: "The second meetup",
    address: "EMNIYET sitesi bahcelieveler mah, talas kayseri",
    image:
      "https://projeskop.com/uploads/gallery/icon-talas-dis/Icon-talas-disgorsel-2.jpg",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
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
