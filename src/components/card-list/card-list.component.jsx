import { CardComponent } from "../card-component/card-component";
import "./card-list.styles.css";

const CardList = ({monsters}) => {
    return (
      <div className="card-list" key={monsters.id}>
        {monsters.map((monster)=> (
          <CardComponent name={monster.name} email={monster.email} id={monster.id}/>
    ))}
      </div>
    );
  }

export {CardList};
