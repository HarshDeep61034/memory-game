import '../styles/Navbar.css'
function Navbar(props){
    return(
        <>
        <div className="nav">
            <div className="heading">
                <img className='logo' src="../../public/pokeball.png" alt="pokeball" />
            <h1> Pika-Pika-Poo Game</h1>
                </div> 
            <p className='score'>score: {props.score}</p>
        </div>
        </>
    )
}

export default Navbar