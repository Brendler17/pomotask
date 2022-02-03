import { useContext } from 'react'
import { CompletedChallenges } from './CompletedChallenges'
import { InfoHours } from './InfoHours'
import { InfoPomodoros } from './InfoPomodoros'
import { StatsContext } from '../contexts/StatsContext'

import styles from '../styles/components/UserInformation.module.css'

export function UserInformation() {

  const { resetDailyValues } = useContext(StatsContext)

  return (
    <div className={styles.userInformationContainer}>
      <header>Estatísticas</header>
      <main>
        <CompletedChallenges />
        <InfoHours />
        <InfoPomodoros />
      </main>
      <footer>
        <button onClick={resetDailyValues} type="button" className={styles.resetButton}>Resetar Valores Diários</button>
      </footer>
    </div>
  )
}