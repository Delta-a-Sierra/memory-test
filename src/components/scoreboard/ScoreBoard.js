import React, {useState, useEffect} from 'react'
import './style.scss'

export default function ScoreBoard(props){

    const [topScore, setTopScore] = useState(0)

    useEffect(() => {
        const changeTopScore = (score) => {
            if(score > topScore){
                setTopScore(score)
            }
        }

        changeTopScore(props.score)

    },[props.score]) 


    return(
        <div className="ScoreBoard">
            <div className="current-score">
                <h3>Score: {props.score}</h3>
            </div>
            <div className="best-score">
                <h3> Top Score: {topScore}</h3>
            </div>
        </div>    
    )
}