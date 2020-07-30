import React,{useState,useEffect} from 'react'
import axios from 'axios';
import EpisodeCard from './episodeCard'
import Button from './button'

const EpisodeList=()=> {
    
  const [episode,setEpisode]=useState([])
  const [baseUrl,setbaseUrl]=useState('https://rickandmortyapi.com/api/episode/?page=1')
  const [next,setnext]=useState(null)
  const [prev,setprev]=useState(null)

  
  useEffect(()=>{
      window.scrollTo(0,0);
       axios.get(baseUrl)
        .then((data) =>{
            // console.log(data.data.results)
            setEpisode(data.data.results);
            setnext(data.data.info.next)
            setprev(data.data.info.prev)

        })
        .catch((err)=>{
            console.log(err)
        })
   },[baseUrl]);
   
  const updateUrl =(url)=>{
    setbaseUrl(url)
  }
    
   return (
      <div className="container">
          <h4>Wubba Lubba Dub Dub!</h4>
           
            <EpisodeCard result={episode}/>
      
            <Button prev={prev} next={next} updateUrl={updateUrl}/>
            
      </div>
    )
}
export default EpisodeList;
