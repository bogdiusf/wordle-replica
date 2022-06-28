import React, { useState, useEffect, useContext } from 'react'
import { WordsContext } from './context/Context'

const Dashboard = () => {
  const { solution, setSolutionCallback } = useContext(WordsContext)

  console.log('solution', solution)

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{solution}</p>
    </div>
  )
}

export default Dashboard
