import React, { useContext } from 'react'
import { WordsContext } from '../context/Context'
import TableWord from './TableWord'
import { GlobalStyles } from './GlobalStyles.styles'
import Keyboard from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'

const Dashboard = () => {
  const { solution } = useContext(WordsContext)

  const classes = GlobalStyles()

  return (
    <div className={classes.dashboardBody}>
      <h1>Wordle Game</h1>
      <h3>Solution: {solution ? solution : 'Loading ... '}</h3>
      <TableWord />
      <div className={classes.keyboardContainer}>
        <Keyboard onChange={() => {}} onKeyPress={() => {}} />
      </div>
    </div>
  )
}

export default Dashboard
