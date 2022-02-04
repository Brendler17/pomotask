import Image from 'next/image';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {

  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns!</strong>
        <p>Você alcançou um novo level!</p>
        <button onClick={closeLevelUpModal}>
          <Image 
            src="/icons/close.svg" 
            alt='close' 
            width={100}
            height={100}
          />
        </button>
      </div>
    </div>

  )
}