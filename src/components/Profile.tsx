import Image from 'next/image'
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {

  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <Image
        src='/avatar.jpg'
        alt="Imagem de Brendler17"
        width={100}
        height={100}
      />
      <div>
        <strong>Gustavo Brendler</strong>
        <div>
        <Image
          src='/icons/level.svg'
          alt="level_icon"
          width={12}
          height={12}
        />
        <p>
          Level {level}
        </p>
        </div>
      </div>
    </div>
  )
}