import React, { useContext, useId } from 'react'
import { WordsContext } from '../context/Context'
import { GlobalStyles } from './GlobalStyles.styles'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(GlobalStyles)

const RowWord = ({ guess }) => {
  const { solution } = useContext(WordsContext)

  const classes = useStyles()

  const squares = []

  for (let i = 0; i < solution.length; i++) {
    const char = guess[i]
    squares.push(
      <div key={'render-square' + i} className={classes.rowSquare}>
        <span>{char}</span>
      </div>
    )
  }
  return <div className={classes.rowContainer}>{squares}</div>
}

export default RowWord
