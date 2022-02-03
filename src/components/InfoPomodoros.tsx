import { useContext } from 'react'
import { StatsContext } from '../contexts/StatsContext'
import styles from '../styles/components/InfoPomodoros.module.css'

export function InfoPomodoros() {

  const { pomodorosPerDay, pomodorosTotal } = useContext(StatsContext)

  return (
    <>
      <div className={styles.infoPomodorsContainer}>
        <span>Pomodoros Totais</span>
        <span>{pomodorosTotal}</span>
      </div>
      <div className={styles.infoPomodorsContainer}>
        <span>Pomodoros Diários</span>
        <span>{pomodorosPerDay}</span>
      </div>
    </>
  )
}