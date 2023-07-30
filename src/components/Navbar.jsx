import '../styles/Navbar.css'
import {logo} from '../../public/pokeball.png'
function Navbar(props){
    return(
        <>
        <div className="nav">
            <div className="heading">
                <img className='logo' src={logo} alt="pokeball" />
            <h1> Pika-Pika-Poo Game</h1>
                </div> 
            <p className='score'>score: {props.score}</p>
        </div>
        </>
    )
}

export default Navbar
