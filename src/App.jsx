import { useState } from 'react'
import './index.css'
import Characters from './asssets/images.jsx'
import Card from './components/card.jsx'
import Modal from './components/modal.jsx'
import Score from './components/score.jsx'
import logo from './asssets/img/logo.png'

function getRandomCards() {
  let seen = new Set()
  let cardsToDisplay = []
  let maxCards = 5
  while (maxCards > 0) {
    const index = Math.floor(Math.random() * Characters.length)
    const card = Characters[index]
    if (!seen.has(card)) {
      cardsToDisplay.push(card)
      seen.add(card)
      maxCards--
    }
  }
  return cardsToDisplay
}

function max(arr) {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

function App() {
  const header = document.querySelector('header')
  const main = document.querySelector('.cards')
  const [scores, setScores] = useState([])
  const maxScore = max(scores)
  const cardsToDisplay = getRandomCards()
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [cards, setCards] = useState(cardsToDisplay)
  const [modal, setModal] = useState(false)
  const [result, setResult] = useState('')
  
  function reset() {
    Characters.forEach(char => char.isClicked = false)
    setModal(false)
    header.classList.remove('blur')
    main.classList.remove('blur')
    const cardsToDisplay = getRandomCards()
    setCards(cardsToDisplay)
    setScore(0)
    setBestScore(maxScore)
  }

  function playerWins() {
    return Characters.every(char => char.isClicked === true)
  }

  function handleCardClick(e) {
    e.preventDefault()
    if (!modal) {
      const id = e.target.closest('div').id
      const clickedCard = Characters[id]
      if (playerWins() === true) {
        setModal(true)
        header.classList.add('blur')
        main.classList.add('blur')
        setScores([...scores, score])
        setResult('You Win!')
      } 
      if (!clickedCard.isClicked) {
        clickedCard.isClicked = true
        const cardsToDisplay = getRandomCards()
        setCards(cardsToDisplay)
        setScore(score + 1)
      } else if (clickedCard.isClicked) {
        //the current card has been already clicked and the game is over
        setModal(true)
        header.classList.add('blur')
        main.classList.add('blur')
        setScores([...scores, score])
        setResult('You Lose')
      }
    } else return
  }

  return (
    <>
      <header>
        <img src={logo}/>
        <Score 
        curScore={score} 
        bestScore={bestScore}/>
      </header>
      <div className="cards">
        {cards.map(item => {
          return <Card 
          src={item.img} 
          name={item.name} 
          id={item.id} 
          handleCardClick={(e) => handleCardClick(e)} 
          key={item.id}/>
        })}
      </div>
      {modal && <Modal 
      restart={() => reset()} 
      result={result}/>}
    </>
  )
}

export default App;