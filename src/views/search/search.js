import axios from "axios";
import { useState, useEffect } from "react";
import CardSearch from "./components/card_search";
import Filters from "./components/filters";

function Search({search}) {
  const [searchData] = useState({
    search: "",
    orderBy: "",
    want: "",
    acc_type: "work",
    occ: "",
    exp: "",
    department: "",
    ngb: "",
    category_users: 0,
    category_jobs: 2
  })

  useEffect(() => {
    searchData.search = search

    doSearch()
  }, [search])

  const handleFilters = (e) => {
    searchData[e.target.name] = e.target.value
    doSearch()
  }

  const [data, setData] = useState([])
  const doSearch = async() => {
    const formData = new FormData()

    Object.entries(searchData).forEach((item) => {
      formData.append(item[0], item[1])
    })

    await axios.post('http://localhost:50/ChangasAPI/search/search', formData)
    .then( answer => {
      console.log(answer)
      // setData(answer.data)
    })
    .catch( error => {
      console.log(error)
    })
  }

  return (
    <div className="w-100 row">
      <aside className="mb-1 col-lg-3">
        <Filters
          onChange={handleFilters}
          onChangeDpt={() => searchData.ngb = ""}
        />
      </aside>

      <section className="col-lg-9">
        <div className="row">
          {
            data.map((item, idx) =>
              <CardSearch 
                key={idx}
                data={item}
                className={"col-sm-6 col-lg-12"}
              />
            )
          }
        </div>
      </section>
    </div>
  );
}

export default Search;
