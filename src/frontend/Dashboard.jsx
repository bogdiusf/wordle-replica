import React, { useState, useEffect, useContext } from 'react'
import { WordsContext } from './context/ContextProvider'

const Dashboard = () => {
  const { solution, setSolutionCallback } = useContext(WordsContext)

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{solution}</p>
    </div>
  )
}

export default Dashboard
