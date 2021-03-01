import { useContext } from 'react'

import { ChallengesContext } from 'contexts/ChallengesContext'

import * as S from './CompletedChallenges.styles'

export const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <S.Wrapper>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </S.Wrapper>
  )
}
