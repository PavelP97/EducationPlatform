function Card(props){
    const handleClick = () => {
        console.log(`${props.name} card clicked`)
    }
    return(
        <div className="card" onClick={handleClick}>
            <img src={props.icon} alt={props.name}/>
            <h2>{props.name}</h2>
        </div>
    )
}

export default Card