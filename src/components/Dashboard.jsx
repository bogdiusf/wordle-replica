import React, { useContext, useState } from 'react'
import { WordsContext } from '../context/Context'
import TableWord from './TableWord'
import { GlobalStyles } from './GlobalStyles.styles'
import { createUseStyles } from 'react-jss'
import Keyboard from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'

const useStyles = createUseStyles(GlobalStyles)

const Dashboard = () => {
  const { solution, currentLetterGuess, setCurrentLetterGuessCallback } =
    useContext(WordsContext)

  const [isSolved, setIsSolved] = useState(true)

  const classes = useStyles()

  const handleInput = (key) => {
    console.log(key)
    if (key === '{enter}') {
      if (currentLetterGuess.length !== 5) return
      if (currentLetterGuess === solution.toLowerCase()) {
        setIsSolved(true)
        return
      }
    }
    if (key === '{bksp}') {
      setCurrentLetterGuessCallback(currentLetterGuess.slice(0, -1))
      return
    }
    setCurrentLetterGuessCallback(currentLetterGuess + key)
  }

  return (
    <div className={classes.dashboardBody}>
      <h1>Wordle Game</h1>
      <marquee>
        <h3>Solution: {solution ? solution : 'Loading ... '}</h3>
      </marquee>
      <TableWord />
      <div className={classes.keyboardContainer}>
        <Keyboard onKeyPress={handleInput} />
      </div>
    </div>
  )
}

export default Dashboard
