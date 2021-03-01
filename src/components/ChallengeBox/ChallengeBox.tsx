import { useContext } from 'react'

import { ChallengesContext } from 'contexts/ChallengesContext'
import { CountdownContex } from 'contexts/CountdownContext'

import * as S from './ChallengeBox.styles'

export const ChallengeBox = () => {
  const { resetCountDown } = useContext(CountdownContex)
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  )

  const handleChallengeSucceeded = () => {
    completeChallenge()
    resetCountDown()
  }

  const handleChallengeFailed = () => {
    resetChallenge()
    resetCountDown()
  }

  return (
    <S.Wrapper>
      {activeChallenge ? (
        <S.ChallegeActive>
          <header>Ganhe {activeChallenge.amount}</header>
          <main>
            <img src={`img/icons/${activeChallenge.type}.svg`} alt="desafio" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <S.ChallegeButton status="failed" onClick={handleChallengeFailed}>
              Falhei
            </S.ChallegeButton>
            <S.ChallegeButton
              status="success"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </S.ChallegeButton>
          </footer>
        </S.ChallegeActive>
      ) : (
        <S.ChallegeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="img/icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </S.ChallegeNotActive>
      )}
    </S.Wrapper>
  )
}
