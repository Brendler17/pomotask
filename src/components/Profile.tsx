import Image from 'next/image'
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {

  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <Image
        src="https://i.ibb.co/Lg7Xd8J/perfil-de-avatar-de-homem-no-icone-redondo-24640-14044.webp"
        alt="Imagem de Brendler17"
        width={100}
        height={100}
      />
      <div>
        <strong>Gustavo Brendler</strong>
        <p>
          <Image 
            src="icons/level.svg" 
            alt="level_icon" 
            width={100}
            height={100}
          />
          Level {level}
        </p>
      </div>
    </div>
  )
}