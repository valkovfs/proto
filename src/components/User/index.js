import '../../styles/user.scss'

function User({img, name}) {
    return (
        <div className="user">
            <img className="user_image" src={img} alt={name}/>
        </div>
    );
}

export default User;
