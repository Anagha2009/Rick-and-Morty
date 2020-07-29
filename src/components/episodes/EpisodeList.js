import React,{useState,useEffect} from 'react'
import axios from 'axios';
const EpisodeList=()=> {
    const [episode,setEpisode]=useState([])
    const [page,setPage]=useState(1)
   useEffect(()=>{
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
    } else {
      setPage(page - 1);
    }
  };
    return (
        <div className="container">
            <div className="row">
            {episode.map(epi=>{
                return(
                    <div className="col-4" key={epi.id}>
                       <div className="card">
                            <div className="card-body">
                                <h5 className="card-title" ><strong>{epi.name}</strong></h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{epi.episode}</h6>
                                    <a href="#" className="card-link">{epi.air_date}</a>
                            </div>
                            </div>
                         </div>
                )
            })}
            </div>
            <div id="style-button">
            <button id="button"onClick={()=>previousPage(page)}>Previous</button>

            <button id="button"onClick={()=>nextPage(page)}>Next</button>
            </div>
            
        </div>
    )
}
export default EpisodeList;
