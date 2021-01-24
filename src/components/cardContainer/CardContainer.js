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

const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

const getCard = (card, handleCardClick) => <Card {...card} alt={`${card.name} logo`} selected={card.selected}
                                                 onClick={() => handleCardClick(card.key)}/>;

const cards = [
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
];

function hasSelected(card, isSelected = true) {
    const tempCard = {...card}
    tempCard.selected = isSelected
    return tempCard
}

export default function CardContainer({resetScore, increaseScore}) {
    const [cardList, setCardList] = useState(cards)

    const deselectAllCards = () => {
        const tempList = cardList.map((card) => {
            return hasSelected(card, false);
        })
        setCardList(tempList)
    }

    const updateCard = (key) => {
        const tempList = cardList.map((card) => {
            if (card.key === key) {
                return hasSelected(card)
            }
            return card
        })
        setCardList(tempList)
    }

    const handleCardClick = (key) => {
        deselectAllCards()
        updateCard(key)

        const clickedCard = cardList.find((card) => card.key === key)

        if (clickedCard.selected) {
            resetScore()
            deselectAllCards()
            return null
        }

        increaseScore()
        updateCard(key)
    }

    return (
        <div className="CardContainer">
            <div className="cards">
                {shuffle(cardList.map((card) => getCard(card, handleCardClick)))}
            </div>
        </div>
    )
}