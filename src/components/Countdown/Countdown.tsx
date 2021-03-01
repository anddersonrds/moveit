import { useContext } from 'react'

import { CountdownContex } from 'contexts/CountdownContext'
import { getMinutes, getSeconds } from 'utils/getTimeNumbers'

import * as S from './Countdown.styles'

export const Countdown = () => {
  const {
    time,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown
  } = useContext(CountdownContex)

  const [minuteLeft, minuteRight] = getMinutes(time)
  const [secondLeft, secondRight] = getSeconds(time)

  return (
    <div>
      <S.Wrapper>
        <S.CountTime>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </S.CountTime>
        <span>:</span>
        <S.CountTime>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </S.CountTime>
      </S.Wrapper>

      {hasFinished ? (
        <S.CountdownButton disabled>Ciclo encerrado</S.CountdownButton>
      ) : (
        <>
          {!isActive ? (
            <S.CountdownButton onClick={startCountDown}>
              Iniciar um ciclo
            </S.CountdownButton>
          ) : (
            <S.CountdownButton isActive onClick={resetCountDown}>
              Abandonar ciclo
            </S.CountdownButton>
          )}
        </>
      )}
    </div>
  )
}
