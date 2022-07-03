import React, { useContext } from 'react'
import RowWord from './RowWord'
import { GlobalStyles } from './GlobalStyles.styles'
import { createUseStyles } from 'react-jss'
import { WordsContext } from '../context/Context'

const useStyles = createUseStyles(GlobalStyles)

const TableWord = () => {
  const { guesses, currentLetterGuess } = useContext(WordsContext)

  const classes = useStyles()

  return (
    <div className={classes.tableContainer}>
      {guesses.map((guess, i) => {
        const isCurrentGuess =
          i === guesses.findIndex((value) => value === null)
        return (
          <RowWord
            guess={isCurrentGuess ? currentLetterGuess : guess ?? ''}
            key={'render-row' + i}
          />
        )
      })}
    </div>
  )
}

export default TableWord
