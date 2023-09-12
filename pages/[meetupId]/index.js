import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage(props) {
  const {title, image, address, description} = props.meetupData
  
  return (
    <MeetupDetails
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { meetupId: 'm1'}
      },


      {
        params: { meetupId: 'm2'}
      },

      
    ],
    fallback: true
  }
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  console.log(meetupId)
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://1.bp.blogspot.com/-_QDouVq0-98/X0JlrcU7zmI/AAAAAAAAkQw/SuYveVPa44Ib4ANn5MXjmMiOjyxsuQcywCLcBGAsYHQ/s1600/catlayana-kadar-anayurt-talas-kayseri-menu-fiyat-%2B%25284%2529.jpg",
        title: "The first meetup",
        address: "some street 3, Talas Kayseri",
        description: "this is our first meetup so come out in numbers!!!",
      },
    },
  };
}

export default MeetupDetailsPage;
