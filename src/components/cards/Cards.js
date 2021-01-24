import React from 'react'
import './style.scss'


export default function Card (props){
    return(
        <div className="Card" onClick={props.onClick}>
            <img src={props.image} alt={props.alt}/>
            <p>{props.name}</p>
        </div>
    )
}