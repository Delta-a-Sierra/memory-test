import React from 'react';
import './style.scss'
import GithubHeader from '../githubHeader/GithubHeader'


export default function Header(props){
    return(
        <div className="Header">
            <GithubHeader />
        </div>
    )
}