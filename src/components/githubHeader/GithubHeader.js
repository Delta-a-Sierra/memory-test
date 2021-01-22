import React from 'react'
import './style.scss'
import githubIcon from '../../util/icons/git.svg'

export default function GithubHeader(props){

    return(
        <div className="GithubHeader">
            <a href="https://github.com/Delta-a-Sierra/">
                <img className="github-logo" src={githubIcon} alt="github logo" />
            </a>
            <h2>Delta-a-Sierra</h2>
        </div>
    )

}