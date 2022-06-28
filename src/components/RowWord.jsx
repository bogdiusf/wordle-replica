import React, { useContext } from 'react'
import { WordsContext } from '../context/Context'
import { GlobalStyles } from './GlobalStyles.styles'

const RowWord = () => {
  const { solution, currentLetterGuess } = useContext(WordsContext)

  const classes = GlobalStyles()

  const square = []

  for (let i = 0; i < solution.length; i++) {
    square.push(
      <div key={i} className={classes.rowSquare}>
        {currentLetterGuess}
      </div>
    )
  }
  return <div className={classes.rowContainer}>{square}</div>
}

export default RowWord
