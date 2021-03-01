import { useContext } from 'react'

import { ChallengesContext } from 'contexts/ChallengesContext'

import * as S from './ExperienceBar.styles'

export const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  )
  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <S.Wrapper>
      <span>0 xp</span>

      <div>
        <S.ProgressXpBar value={percentToNextLevel} />
        <S.CurrentXp value={percentToNextLevel}>
          {currentExperience} xp
        </S.CurrentXp>
      </div>

      <span>{experienceToNextLevel} xp</span>
    </S.Wrapper>
  )
}
