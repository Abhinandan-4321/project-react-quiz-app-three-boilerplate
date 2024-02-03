import React from 'react'
import { Link } from 'react-router-dom' 
import data from '../resources/Questions.json'


function QuizComponent(props) {
    return (
        <div className ="container">
          <div  id = "hhhh">
              <h1 id='ques'>Questions</h1>
              <p id="noq">{props.index + 1} of 15</p>
              <p id="ques-txt">{data[props.index].question}</p>
              
              <div id = "chooseOne">
                  <div className = "animals" onClick={(e)=>props.calc(e)}>{data[props.index].optionA}</div>
                  <div className = "animals" onClick={(e)=>props.calc(e)}>{data[props.index].optionB}</div>
                  <div className = "animals" onClick={(e)=>props.calc(e)}>{data[props.index].optionC}</div>
                  <div className = "animals" onClick={(e)=>props.calc(e)}>{data[props.index].optionD}</div>
              </div>
  
              <div className = "options">
                  <button onClick = {props.prev} className="click-btns" id = "prev" >Previous</button>
                  <button onClick = {props.next} className="click-btns" id = "next" >Next</button>
                  <button className="click-btns" id = "quit" onClick={props.quit}>Quit</button>
                  <Link to={"/result"}><button className="click-btns" id = "finish">Finish</button></Link>
              </div>
          </div>
        </div>
      )
}

export default QuizComponent