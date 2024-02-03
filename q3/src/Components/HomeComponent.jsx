import React from 'react'
import { Link } from 'react-router-dom'

function HomeComponent() {
    return (
        <div className = "HomeContainer">
          <h1 id="heading">Quiz App</h1>
          <Link to = {"/quiz"}><button id="pl-btn">Play</button></Link>
        </div>
      )
}

export default HomeComponent