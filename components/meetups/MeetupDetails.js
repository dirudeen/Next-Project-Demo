import classes from './MeetupDetails.module.css';

const MeetupDetails = (props) => {
    return (
        <section className={classes.detail}>
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    );
}

export default MeetupDetails;
