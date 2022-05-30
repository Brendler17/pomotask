import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {

  const { minutes,
    seconds,
    initialTime,
    hasFinished,
    isActive,
    isRest,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {isRest ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Hora de Relaxar
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type='button'
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <>
              {hasFinished ? (
                <button
                  disabled
                  className={styles.countdownButton}
                >
                  Ciclo Encerrado
                </button>
              ) : (
                <>
                  {initialTime == 0 ? (
                    <button
                      disabled
                      className={styles.countdownButton}
                    >
                      Preencha os Minutos
                    </button>
                  ) : (
                    <button
                      type='button'
                      className={styles.countdownButton}
                      onClick={startCountdown}
                    >
                      Iniciar um Ciclo
                    </button>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}

    </div>
  )
}