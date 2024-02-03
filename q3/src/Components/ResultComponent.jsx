import React from 'react'
import { Link } from 'react-router-dom'

function ResultComponent(props) {
    return (
        <>
        <h1 id="resultHead" style={{color: "green"}}>Result</h1>
        <div className ="">
        <div className = "box">
            <h2 className='status'>You need more practice!</h2>
            <h1 style={{color: 'blue'}}><b>Your score is {props.score*10}%</b></h1>

            <div className = "endCont">
                <div>Total number of questions</div>
                <div>15</div>
            </div>

            <div className = "endCont">
                <div>Number of questions attempted</div>
                <div>{props.attempt}</div>
            </div>

            <div className = "endCont">
                <div>Number of correct answers</div>
                <div>3</div>
            </div>

            <div className = "endCont">
                <div>Number of wrong answers</div>
                <div>{props.attempt  - props.score}</div>
            </div>
        </div>
        <div className="forBtns">
                <Link to={"/quiz"}><button id = "color-blue">Play Again</button></Link>
                <Link to={"/"}><button id = "color-green">Back to Home</button></Link>
            </div>
      </div>
      </>
    )   
}

export default ResultComponent