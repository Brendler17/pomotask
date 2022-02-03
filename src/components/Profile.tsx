import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {

  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://i.ibb.co/Lg7Xd8J/perfil-de-avatar-de-homem-no-icone-redondo-24640-14044.webp" alt="Imagem de Brendler17" />
      <div>
        <strong>Gustavo Brendler</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </div>
  )
}