import React,{useState} from 'react'
import axios from 'axios';
const EpisodeSearch=()=> {
   const [query,setQuery]=useState('')
   const [result,setResult]=useState([])
   const handleChange=(e)=>{
     setQuery(e.target.value)
    //  console.log(query)
    }
    const handleSubmit=(e)=>{
     e.preventDefault();
     axios.get(`https://rickandmortyapi.com/api/episode/?name=${query}`)
      .then(res=>{
          setResult(res.data.results);
        //   console.log(result)
      })
      .catch(err=>{
          console.log(err)
      })
    }
    return (
        <div> 
            <form   onSubmit={handleSubmit}>
            <label htmlFor="query"/>
            <input type="text" id="query" placeholder="Find your episodes.." onChange={handleChange} /> 
            <button id="btn"><span>Search</span></button>
            </form>

            {result.map(epi=>{
            return(
                <div className="search" key={epi.id}>
                     <span>Searched Results!</span>
                     <hr/> 
                     <div className="card">
                        <div className="card-body">
                            <h5 className="card-title" ><strong>{epi.name}</strong></h5>
                                <h6 className="card-subtitle mb-2 text-muted">{epi.episode}</h6>
                                <a href="#" className="card-link">{epi.air_date}</a>
                        </div>
                        </div>
                    <hr/>

                     </div>
            )
        })}
        </div>
    )
    }
export default EpisodeSearch;
