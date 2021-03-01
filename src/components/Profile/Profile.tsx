import { useContext } from 'react'
import { ChallengesContext } from 'contexts/ChallengesContext'

import * as S from './Profile.styles'

export const Profile = () => {
  const { level } = useContext(ChallengesContext)

  return (
    <S.Wrapper>
      <img
        src="https://avatars.githubusercontent.com/u/10183881?s=460&u=657709fe67fd8d720e3e893d9f6f185d976ac96f&v=4"
        alt=" Anderson Rodrigues"
      />
      <div>
        <S.NameInfo>Anderson Rodrigues</S.NameInfo>
        <S.LevelInfo>
          <img src="img/icons/level.svg" alt="Level" />
          Level {level}
        </S.LevelInfo>
      </div>
    </S.Wrapper>
  )
}
