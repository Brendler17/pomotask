import Image from 'next/image'
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown, isRest } = useContext(CountdownContext);

  function handleChallengSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} XP</header>
          <main>
            <Image 
              src={`/icons/${activeChallenge.type}.svg`} 
              alt={'icon_activeChallenge'}
              width={100}
              height={100}
            />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          {isRest ? (
            <footer className={styles.footerRest}>
              <span>Fique tranquilo! <br /></span>
              <span>Primeiro termine seu tempo de descanso, depois marque se terminou o desafio ou não.</span>
            </footer>
          ) : (
            <footer className={styles.footerNoRest}>
              <button
                onClick={handleChallengSucceeded}
                className={styles.challengeSucceededButton}
                type='button'
              >Completei</button>

              <button
                onClick={handleChallengeFailed}
                className={styles.challengeFailedButton}
                type='button'
              >Falhei</button>
            </footer>
          )}
        </div>
      ) : (
        <div className={styles.challengeNotActive}> 
          <strong>Finalize um ciclo para receber um desafio!</strong>
          <p>
            <Image src={'/icons/level-up.svg'} alt="Level-Up" width={100} height={100}/>
            Avance de level completando desafios.
          </p>
        </div>
      )
      }
    </div >
  )
}