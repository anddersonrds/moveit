import Head from 'next/head'

import { CountdownProvider } from 'contexts/CountdownContext'
import { ChallengesProvider } from 'contexts/ChallengesContext'

import { ExperienceBar } from 'components/ExperienceBar/ExperienceBar'
import { Profile } from 'components/Profile'
import { Countdown } from 'components/Countdown'
import { CompletedChallenges } from 'components/CompletedChallenges'
import { ChallengeBox } from 'components/ChallengeBox'

import * as S from './Home.styles'

export type HomeProps = {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export const Home = ({
  level,
  currentExperience,
  challengesCompleted
}: HomeProps) => (
  <ChallengesProvider
    level={level}
    currentExperience={currentExperience}
    challengesCompleted={challengesCompleted}
  >
    <S.Wrapper>
      <Head>
        <title>Início | Move.It</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </S.Wrapper>
  </ChallengesProvider>
)
