import Head from "next/head";
import dynamic from "next/dynamic";
import { GetServerSideProps } from 'next'
import { useState } from "react";
import { Profile } from "../components/Profile";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from '../components/ChallengeBox'
import { UserInformation } from "../components/UserInformation";
import { PomodoroTimer } from "../components/PomodoroTimer";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { StatsProvider } from "../contexts/StatsContext";
import styles from '../styles/pages/Home.module.css';

const ExperienceBarDynamic = dynamic(
  () => import("../components/ExperienceBar"),
  { ssr: false }
)

const GitCornerDynamic = dynamic(
  () => import("../components/GitCorner"),
  { ssr: false }
)

interface HomeProps {
  level: number;
  currentExperience: number;
  completedChallenges: number;
  hoursPerDay: number;
  hoursTotal: number;
  pomodorosPerDay: number;
  pomodorosTotal: number;
}

export default function Home(props: HomeProps) {

  const [isActiveInfo, setIsActiveInfo] = useState(false)
  const [isActiveBox, setIsActiveBox] = useState(true)

  function selectInfo() {
    setIsActiveInfo(true)
    setIsActiveBox(false)
  }

  function selectBox() {
    setIsActiveBox(true)
    setIsActiveInfo(false)
  }

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      completedChallenges={props.completedChallenges}
      selectBox={selectBox}
    >
      <ExperienceBarDynamic />
      <GitCornerDynamic />
      <div className={styles.container}>
        <Head>
          <title>Início | PomoTask </title>
        </Head>

        <StatsProvider
          hoursPerDay={props.hoursPerDay}
          hoursTotal={props.hoursTotal}
          pomodorosPerDay={props.pomodorosPerDay}
          pomodorosTotal={props.pomodorosTotal}
        >
          <CountdownProvider selectBox={selectBox}>
            <section>

              <div>
                <Profile />
                <PomodoroTimer />
                <Countdown />
              </div>

              <div>
                {isActiveBox ? (
                  <>
                    <div className={styles.changeLayoutContainer}>
                      <button onClick={selectBox} className={styles.buttonActive}></button>
                      <button onClick={selectInfo}></button>
                    </div>
                    <ChallengeBox />
                  </>
                ) : (
                  <>
                    <div className={styles.changeLayoutContainer}>
                      <button onClick={selectBox}></button>
                      <button onClick={selectInfo} className={styles.buttonActive}></button>
                    </div>
                    <UserInformation />
                  </>
                )}
              </div>

            </section >

            <footer className={styles.homeFooter}>
              <span>Desenvolvido por&nbsp;</span>
              <a href="http://github.com/Brendler17">Gustavo Brendler ⚡️</a>
              <span>&nbsp;&</span>
              <a href="https://www.rocketseat.com.br">&nbsp;Rocketseat 🚀</a>
            </footer>

          </CountdownProvider>
        </StatsProvider>
      </div >
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level,
    currentExperience,
    completedChallenges,
    hoursPerDay,
    hoursTotal,
    pomodorosPerDay,
    pomodorosTotal
  } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      completedChallenges: Number(completedChallenges),
      hoursPerDay: Number(hoursPerDay),
      hoursTotal: Number(hoursTotal),
      pomodorosPerDay: Number(pomodorosPerDay),
      pomodorosTotal: Number(pomodorosTotal),
    }
  }
}
