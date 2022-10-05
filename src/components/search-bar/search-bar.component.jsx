const SearchBar = (props) =>
{ 
        return(
            <div>
            <input
            className={`search-box ${props.className}`}
            type={"search"}
            placeholder={props.placeholder}
            onChange={props.onSearchChange}
          />
            </div>
        )
    }

export {SearchBar};