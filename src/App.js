import './styles/main.scss'
import Users from "./components/Users";
import Board from "./components/Board";
import Cameras from "./components/Cameras";

function App() {
  return (
    <div className="container">
        <div className="content">
            <Users/>
            <Board/>
            <Cameras/>
        </div>
        <div className="links">
            <a>Zoom link copy</a>
            <a>Instruction</a>
            <a>Leave the game</a>
        </div>

    </div>
  );
}

export default App;
