import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { WordsContext } from './Context'

const ContextProvider = ({ children }) => {
  const [solution, setSolution] = useState('')
  const [guesses, setGuesses] = useState(Array(6).fill(null))
  const [currentLetterGuess, setCurrentLetterGuess] = useState('')

  const setSolutionCallback = useCallback((value) => {
    setSolution(value)
  }, [])

  const setGuessesCallback = useCallback((value) => {
    setGuesses(value)
  }, [])

  const setCurrentLetterGuessCallback = useCallback((value) => {
    setCurrentLetterGuess(value)
  }, [])

  const fetchWords = async () => {
    const response = await axios.get('/api/fetch-words')
    const wordsArray = response.data
    const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
    setSolutionCallback(randomWord)
  }

  useEffect(() => {
    fetchWords()
    if (solution) {
      return
    }
    return
  }, [])

  const values = {
    solution,
    setSolutionCallback,
    guesses,
    setGuessesCallback,
    currentLetterGuess,
    setCurrentLetterGuessCallback,
  }
  return (
    <WordsContext.Provider value={values}>{children}</WordsContext.Provider>
  )
}

export default ContextProvider
