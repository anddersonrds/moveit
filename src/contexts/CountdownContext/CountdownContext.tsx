import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode
} from 'react'

import { ChallengesContext } from 'contexts/ChallengesContext'

type CountdownContextData = {
  time: number
  isActive: boolean
  hasFinished: boolean
  startCountDown: () => void
  resetCountDown: () => void
}

type CountdownProviderProps = {
  children: ReactNode
}

export const CountdownContex = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(25 * 60)
  const [isActive, setActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const startCountDown = () => {
    setActive(true)
  }

  const resetCountDown = () => {
    clearTimeout(countdownTimeout)
    setActive(false)
    setHasFinished(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setActive(false)
      startNewChallenge()
    }
  }, [isActive, time, startNewChallenge])

  return (
    <CountdownContex.Provider
      value={{
        time,
        isActive,
        hasFinished,
        startCountDown,
        resetCountDown
      }}
    >
      {children}
    </CountdownContex.Provider>
  )
}
