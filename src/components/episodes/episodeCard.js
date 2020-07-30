import React from 'react'

const EpisodeCard=({result})=> {
    return (
        <div className="row">
              {result.map(epi=>{
                return(
                    <div className="col-sm-12 col-md-6 col-lg-4" key={epi.id}>
                       <div className="card">
                            <div className="card-body">
                                 <h5 className="card-title" ><strong>{epi.name}</strong></h5>
                                 <h6 className="card-subtitle mb-2 text-muted">{epi.episode}</h6>
                                 <p href="#" className="card-link">{epi.air_date}</p>
                            </div>
                        </div>
                    </div>
                )
              })}
        </div>
    )
}
export default EpisodeCard
