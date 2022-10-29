import Cards from "./components/cards";
import Filters from "./components/filters";


function Search() {

  return (
    <div className="d-flex">
      <Filters />

      <Cards />
    </div>
  );
}

export default Search;
