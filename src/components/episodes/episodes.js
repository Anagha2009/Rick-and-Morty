import React from 'react'
import './episodeList.css'
import EpisodeList from './EpisodeList'
import EpisodeSearch from './episodeSearch'

export default function Episodes() {
    return (
        <div className="container">
                
            <h1><strong>Rick and Morty</strong></h1>
             <EpisodeSearch/>
             <EpisodeList/>
        </div>
    )
}
