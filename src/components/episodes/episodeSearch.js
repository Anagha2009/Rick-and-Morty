import React,{useState} from 'react'
import axios from 'axios';
import EpisodeCard from './episodeCard'

const EpisodeSearch=()=> {
   
   const [query,setQuery]=useState('')
   const [result,setResult]=useState([])
   const [loading,setLoading]=useState(false)
    
   const handleChange=(e)=>{
     setQuery(e.target.value)
    //  console.log(query)
    }
    
    const handleSubmit=(e)=>{
     e.preventDefault();
     axios.get(`https://rickandmortyapi.com/api/episode/?name=${query}`)
      .then(res=>{
          setResult(res.data.results);
          setLoading(true)
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
                {loading ? 
                <div className="search">
                <span>Search Results!</span>
                <hr/> 

                <EpisodeCard result={result}/>
                <hr/> 
                </div>
                :''}
        </div>
    )
 }
export default EpisodeSearch;
