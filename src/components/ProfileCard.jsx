function ProfileCard(props) {

    console.log(props);

    return (
        <article className="profile-card">
            <h1>{props.name}</h1>
            <p>{props.designation}</p>
        </article>
    )
}

export default ProfileCard;