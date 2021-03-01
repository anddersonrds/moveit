import { useContext } from 'react'

import { ChallengesContext } from 'contexts/ChallengesContext'

import * as S from './LevelUpModal.styles'

export const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <S.Wrapper>
      <S.Container>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <S.Button onClick={closeLevelUpModal}>
          <img src="/img/icons/close.svg" alt="Fechar Modal" />
        </S.Button>
      </S.Container>
    </S.Wrapper>
  )
}
