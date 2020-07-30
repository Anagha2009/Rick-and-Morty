import React,{useState,useEffect} from 'react'
import axios from 'axios';
import EpisodeCard from './episodeCard'

const EpisodeList=()=> {
    
  const [episode,setEpisode]=useState([])
  const [page,setPage]=useState(1)
  
  useEffect(()=>{
      window.scrollTo(0,0);
       axios.get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
        .then((data) =>{
            // console.log(data.data.results)
            setEpisode(data.data.results)
        })
        .catch((err)=>{
            console.log(err)
        })
   },[page]);
   
  const nextPage = (page) => {
    setPage(page + 1);
   };

  const previousPage= (page) => {
    if (page === 1) {
      setPage(page);
    } 
    else {
      setPage(page - 1);
    }
   };
    
   return (
      <div className="container">
          <h4>Wubba Lubba Dub Dub!</h4>
           
            <EpisodeCard result={episode}/>
      
            <div id="style-button">
              <button id="button"onClick={()=>previousPage(page)}>Previous</button>

              <button id="button"onClick={()=>nextPage(page)}>Next</button>
            </div>
            
      </div>
    )
}
export default EpisodeList;
