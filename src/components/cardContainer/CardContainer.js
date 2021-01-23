import React, {useState, useEffect} from 'react'
import './style.scss'
import Card from '../cards/Cards'

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
import uuid from 'react-uuid'

export default function CardContainer(props){
    const [cardList, setCardList] = useState([
        {image: javascriptLogo, name: "JavaScript", key: uuid()},
        {image: cssLogo, name: "CSS", key: uuid()},
        {image: gitLogo, name: "GIT", key: uuid()},
        {image: graphqlLogo, name: "GraphQL", key: uuid()},
        {image: htmlLogo, name: "HTML", key: uuid()},
        {image: nodeJsLogo, name: "Node Js", key: uuid()},
        {image: npmLogo, name: "NPM", key: uuid()},
        {image: reactLogo, name: "React", key: uuid()},
        {image: reduxLogo, name: "Redux", key: uuid()},
        {image: sassLogo, name: "Sass", key: uuid()},
        {image: typeScriptLogo, name: "TypeScript", key: uuid()},
        {image: WebpackLogo, name: "Webpack", key: uuid()}
    ])



    const cards = cardList.map((card) => <Card {...card} alt={`${card.name} logo`}/>)

    return(
        <div className="CardContainer">
            <div className="cards"> 
                {cards}
            </div>

        </div>
    )
}