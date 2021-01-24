import React from 'react';
import './style.scss'
import GithubHeader from '../githubHeader/GithubHeader'
import ScoreBoard from '../scoreboard/ScoreBoard'


export default function Header(props){

    return(
        <div className="Header">
            <GithubHeader />
            <h1>Web Tech <br/> Memory Test</h1>
            <ScoreBoard score={props.score}/>

            {/* <div>
                <button onClick={increaseScore}>Increase Score</button>
                <button onClick={resetScore}>Wrong Choice</button>
            </div> */}
        </div>
    )
}