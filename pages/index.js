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

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
