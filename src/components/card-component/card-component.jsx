import "./card.styles.css"

const CardComponent=(props)=>
{
        return(
            <div className="card-container" key={props.id}>
                <img src={`https://robohash.org/${props.id}?set=set2`} alt={`${props.name}`}/>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>
        )
    }

export {CardComponent};