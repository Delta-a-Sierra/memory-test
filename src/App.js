import React, {useState} from 'react'
import './App.scss';
import Header from './components/header/Header'
import CardContainer from './components/cardContainer/CardContainer'

function App() {
  const [score, setScore] = useState(0)

  const increaseScore = () => {
    setScore(prev => prev + 1)
  }

  const resetScore = () => {
    setScore(0)
  }

  return (
    <div className="App">
      <Header score={score}/>
      <CardContainer increaseScore={increaseScore} resetScore={resetScore}/>
    </div>
  );
}

export default App;
