import React from 'react'
import './style.scss'
import githubIcon from '../../util/icons/github.svg'

export default function GithubHeader(props){

    return(
        <div className="GithubHeader">
            <a href="https://github.com/Delta-a-Sierra/" target="_blank">
                <img className="github-logo" src={githubIcon} alt="github logo" />
                <h2>Delta-a-Sierra</h2>
            </a>

        </div>
    )

}