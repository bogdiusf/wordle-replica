import React from 'react'
import RowWord from './RowWord'
import { GlobalStyles } from './GlobalStyles.styles'

const AVAILABLE_TRIES = 5

const TableWord = () => {
  const table = []

  const classes = GlobalStyles()

  for (let i = 0; i < AVAILABLE_TRIES; i++) {
    table.push(<RowWord key={i} />)
  }

  return <div className={classes.tableContainer}>{table}</div>
}

export default TableWord
