import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import ModalError from "../../components/modal_error";
import { configContext } from "../../context/config_context";
import Filters from "./components/filters";
import CardSearchJob from "./components/card_search_job";
import CardSearchWork from "./components/card_search_work";
import CardSearchPlaceholder from "./components/card_search_placeholder";

function Search() {
  const config = useContext(configContext)
  const style = config.style.value
  const lang = config.lang.value

  const [searchData] = useState({
    search: "",
    order: "",
    want: "",
    occ: "",
    exp: "",
    department: "",
    ngb: ""
  })

  const query = new URLSearchParams(useLocation().search)
  useEffect(() => {
    const x = query.get('search')
    x !== null ? searchData.search = x : searchData.search = ""

    doSearch()
    // eslint-disable-next-line
  }, [query.get('search')])

  const handleFilters = (name, value) => {
    if(name === 'department') searchData.ngb = ''

    searchData[name] = value
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
      setTimeout(() => {
        setData(answer.data)
      }, 1000);
    })
    .catch( error => {
      setError([true, error.message])
      console.log(error)
    })
  }

  /* COMPONENTS */
  const articles = data.map((item, idx) =>
    <article key={idx} className={'mb-2 p-1 col-sm-6 col-md-6 col-lg-6 col-xxl-4'}>
      {item.id_job
        ? <CardSearchJob 
            data={item} 
            bg={style[0]} 
            border={style[1]} 
            style={style} 
          />
        : <CardSearchWork 
            data={item} 
            bg={style[0]} 
            border={style[1]} 
            style={style} 
          />
      }
    </article>
  )

  const articlesPlaceholder = [0,0,0,0,0].map((item,idx) => 
    <article key={idx} className={'mb-2 p-1 col-sm-6 col-md-6 col-lg-6 col-xxl-4'}>
      <CardSearchPlaceholder 
        bg={style[0]} 
        border={style[1]} 
        style={style} 
      />
    </article>
  )
  /* */

  /* ERROR */
  const [error, setError] = useState([false, ''])
  /* */

  return (
    <div className={"mb-3 w-100 row " + style[0]}>
      <aside className={"p-0 col-md-4 col-lg-2 col-xxl-2"}>
        <Filters
          onChange={handleFilters}
          lang={lang}
          style={style}
        />
      </aside>

      <section className="col-md-8 col-lg-10 col-xxl-10 bg-opacity-50">
        <div className="row">
          { data.length === 0 
            ? articlesPlaceholder 
            : articles
          }
        </div>
      </section>

      <ModalError  
        style={style}
        show={error[0]}
        msj={error[1]}
        onHide={() => setError([false, ''])}
      />
    </div>
  );
}

export default Search;
