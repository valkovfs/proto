import User from '../User'
import '../../styles/users.scss'
import Will from '../../assets/img/will.jpeg'
import Jackie from '../../assets/img/jackie.jpg'
import Gendalf from '../../assets/img/gendalf.jpeg'
import Angelina from '../../assets/img/angelina.jpg'
import Kiany from '../../assets/img/kiany.jpg'
import Bruce from '../../assets/img/bruce.jpg'
function Users() {
    let speaker = [
        {name: 'Gendalf', img: Gendalf}
    ]
    let players = [
        {name: 'Angelina', img: Angelina},
        {name: 'Will', img: Will},
        {name: 'Bruce', img: Bruce},
        {name: 'Jackie', img: Jackie},
        {name: 'Kiany', img: Kiany},
    ]
    return (
        <div className="users">
            <div className="speaker">
                <h2>Speaker</h2>
                {speaker.map((el) => (
                    <User name={el.name}
                    img={el.img}/>
                ))}
            </div>
            <div className="players">
                <h2>Players</h2>
                {players.map((el) => (
                    <User
                        name={el.name}
                        img={el.img}
                    />
                ))}
            </div>
        </div>
    );
}

export default Users;
