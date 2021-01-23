import React, {useState} from 'react'
import './style.scss'
import Card from '../cards/Cards'
import uuid from 'react-uuid'

import javascriptLogo from '../../util/icons/javascript.svg'
import cssLogo from '../../util/icons/css3.svg'
import gitLogo from '../../util/icons/git.svg'
import graphqlLogo from '../../util/icons/graphql.svg'
import htmlLogo from '../../util/icons/html5.svg'
import nodeJsLogo from '../../util/icons/node-js.svg'
import npmLogo from '../../util/icons/npm.svg'
import reactLogo from '../../util/icons/react.svg'
import reduxLogo from '../../util/icons/redux.svg'
import sassLogo from '../../util/icons/sass.svg'
import typeScriptLogo from '../../util/icons/typescript.svg'
import WebpackLogo from '../../util/icons/webpack.svg'


export default function CardContainer(props){
    const [cardList, setCardList] = useState([
        {image: javascriptLogo, name: "JavaScript", key: uuid(), selected: false},
        {image: cssLogo, name: "CSS", key: uuid(), selected: false},
        {image: gitLogo, name: "GIT", key: uuid(), selected: false},
        {image: graphqlLogo, name: "GraphQL", key: uuid(), selected: false},
        {image: htmlLogo, name: "HTML", key: uuid(), selected: false},
        {image: nodeJsLogo, name: "Node Js", key: uuid(), selected: false},
        {image: npmLogo, name: "NPM", key: uuid(), selected: false},
        {image: reactLogo, name: "React", key: uuid(), selected: false},
        {image: reduxLogo, name: "Redux", key: uuid(), selected: false},
        {image: sassLogo, name: "Sass", key: uuid(), selected: false},
        {image: typeScriptLogo, name: "TypeScript", key: uuid(), selected: false},
        {image: WebpackLogo, name: "Webpack", key: uuid(), selected: false}
    ])

    const shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }

    const cardClick = (key) => {
        const resetList = () => {
            const tempList = cardList.map((card) => {
                const tempCard = Object.assign({}, card)
                tempCard.selected = false
                return tempCard
            })
            setCardList(tempList)
        }

        const updateCard = (key) => {
            const tempList = cardList.map((card) => {
                if(card.key === key){
                    const tempCard = Object.assign({}, card)
                    tempCard.selected = true
                    return tempCard
                }
                return card
            })
            setCardList(tempList)
        }


        const clickedCard = cardList.filter((card) => card.key === key)[0]
        if(clickedCard.selected === true){
            props.resetScore()
            resetList()
            return null
        }
        props.increaseScore()
        updateCard(key)
    }

    const cards = shuffle(cardList.map((card) => <Card {...card} alt={`${card.name} logo`} selected={card.selected} onClick={() => cardClick(card.key)}/>))
    
    return(
        <div className="CardContainer">
            <div className="cards"> 
                {cards}
            </div>
        </div>
    )
}