import React, { useState, useCallback, useEffect } from 'react'
import { createContext } from 'react'
import axios from 'axios'

export const WordsContext = createContext()

const ContextProvider = ({ children }) => {
  const [solution, setSolution] = useState('')
  const [guesses, setGuesses] = useState([Array(6).fill(null)])
  const [currentLetterGuess, setCurrentLetterGuess] = useState('')

  const setSolutionCallback = useCallback((value) => {
    setSolution(value)
  }, [])

  const fetchWords = async () => {
    const response = await axios.get('/api/fetch-words')
    const wordsArray = response.data
    const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
    setSolutionCallback(randomWord)
  }
  useEffect(() => {
    fetchWords()
    return () => {
      // cleanup
    }
  }, [])

  const values = {
    solution,
    setSolutionCallback,
  }
  return (
    <WordsContext.Provider value={values}>{children}</WordsContext.Provider>
  )
}

export default ContextProvider
