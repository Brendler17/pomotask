import { useContext, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import { GlobalContext } from '../contexts/GlobalContext';
import styles from '../styles/components/PomodoroTimer.module.css'

export function PomodoroTimer() {

  const { initialTime, initialRestTime, setPomodoroTime, setRestTime } = useContext(GlobalContext)
  const { activeChallenge } = useContext(ChallengesContext);
  const { isActive, isRest } = useContext(CountdownContext)

  const [currentTime, setCurretTime] = useState(initialTime / 60 ?? 0)
  const [currentRestTime, setCurretRestTime] = useState(initialRestTime / 60 ?? 0)

  function handleSubmit(e) {
    e.preventDefault()

    const pomodoroTime = Number(e.target[0].value)
    const restTime = Number(e.target[1].value)

    if (pomodoroTime === 0 || restTime === 0) {
      alert('Preencha o valor dos minutos.')
    } else {
      setPomodoroTime(pomodoroTime)
      setRestTime(restTime)
    }
  }

  function handleTimeChange(e) {
    setCurretTime(e.target.value)
  }

  function handleRestChange(e) {
    setCurretRestTime(e.target.value)
  }

  return (
    <div className={styles.pomodoroContainer}>

      {isActive ? (
        <span>Você possui um ciclo ativo.</span>

      ) : (
        <>

          {isRest ? (
            <span>Realize seu desafio e descanse um pouco.</span>

          ) : (
            <>

              {activeChallenge ? (
                <span>Você possui um desafio ativo.</span>

              ) : (
                <>
                
                  <form onSubmit={handleSubmit}>
                    <div>
                      <div className={styles.pomodoroTimerContainer}>
                        <span>Pomodoros de</span>
                        <input
                          value={currentTime}
                          onChange={handleTimeChange}
                          className='inputPomodoroTime'
                          type="string"
                          maxLength={2}
                        />
                        <span>minutos</span>
                      </div>
                      <div className={styles.pomodoroRestContainer}>
                        <span>Descansos de</span>
                        <input
                          value={currentRestTime}
                          onChange={handleRestChange}
                          className='inputRestTime'
                          type="string"
                          maxLength={2}
                        />
                        <span>minutos</span>
                      </div>
                    </div>
                    <button type="submit" className={styles.pomodoroButton}>OK</button>
                  </form>
                </>
              )}
            </>
          )
          }
        </>
      )}
    </div >
  )
}