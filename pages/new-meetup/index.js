import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage () {
    const router = useRouter()

    const addMeetupHandler = async (meetupData) => {
        try {
            const res = await fetch('api/new-meetup', {
                method: 'POST',
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify(meetupData)
            });
            if(!res.ok) {
                throw new Error('something went wrong')
            }
            const data = await res.json();
            console.log(data)
        } catch (error) {
            console.log(error.message)
        }

        router.push('/')
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage