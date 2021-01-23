import React,{useState, useEffect} from 'react';
import './style.scss'
import GithubHeader from '../githubHeader/GithubHeader'
import ScoreBoard from '../scoreboard/ScoreBoard'


export default function Header(props){
    const [score, setScore] = useState(0)

    const increaseScore = () => {
        setScore(score + 1)
    }

    const resetScore = () => {
        setScore(0)
    }

    return(
        <div className="Header">
            <GithubHeader />
            <h1>Web Tech <br/> Memory Test</h1>
            <ScoreBoard score={score}/>

            {/* <div>
                <button onClick={increaseScore}>Increase Score</button>
                <button onClick={resetScore}>Wrong Choice</button>
            </div> */}
        </div>
    )
}