import React from 'react'

const SearchResults=({result}) =>{
    return (
        <div>
             {result.map(epi=>{
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
    )
}
export default SearchResults
