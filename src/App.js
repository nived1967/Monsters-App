import { useState,useEffect } from "react";
import "./App.css";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBar} from "./components/search-bar/search-bar.component"


const App = () =>
{
  const [searchString,setSearchString]=useState('');
  const [monsters,setMonsters]=useState([]);
  const [filteredMonsters,setFilteredMonsters]=useState(monsters);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>  setMonsters(users))
  },[])

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchString);
          });
          setFilteredMonsters(newFilteredMonsters);
  },[monsters,searchString])

  const onSearch = (event) => {
        const searchStringChange=event.target.value.toLocaleLowerCase();
        setSearchString(searchStringChange);
      }
  return(
    <div className="App">
      <h1 className="app-title">Monster-Search App</h1>
        <SearchBar onSearchChange={onSearch} placeholder="search monsters" className="search-box-monsters"/>
        <CardList monsters={filteredMonsters} />
      </div>
  )
}





//   render() {
//     const {monsters,searchString}=this.state;
//     const {onSearch}=this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchString);
//     });

//     return (
//       <div className="App">
//       <h1 className="app-title">Monster-Search App</h1>
//         <SearchBar onSearchChange={onSearch} placeholder="search monsters" className="search-box-monsters"/>
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }


export default App;
