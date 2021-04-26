import Camera from './Camera'
import '../../styles/cameras.scss'
import Angelina from "../../assets/img/angelina.jpg";
import Will from "../../assets/img/will.jpeg";
import Bruce from "../../assets/img/bruce.jpg";
import Jackie from "../../assets/img/jackie.jpg";
import Kiany from "../../assets/img/kiany.jpg";

function Cameras() {
    let players = [
        {name: 'Angelina', img: Angelina},
        {name: 'Will', img: Will},
        {name: 'Bruce', img: Bruce},
        {name: 'Jackie', img: Jackie},
        {name: 'Kiany', img: Kiany},
    ]
    return (
        <div className="cameras">
            {players.map((el) => (
                <Camera value={el.name}/>
            ))}
        </div>
    );
}

export default Cameras;
