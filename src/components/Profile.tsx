import Image from 'next/image'
import { useContext, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { GlobalContext } from '../contexts/GlobalContext';
import { NewUserNameModal } from './NewUserNameModal';
import styles from '../styles/components/Profile.module.css'

export function Profile() {

  const { userName, hasUser } = useContext(GlobalContext);
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      {hasUser ? (
        <>
          <Image
            src='/avatar.jpg'
            alt="Imagem de Brendler17"
            width={100}
            height={100}
          />
          <div>
            <strong>{userName}</strong>
            <div>
              <Image
                src='/icons/level.svg'
                alt="level_icon"
                width={12}
                height={12}
              />
              <p className={styles.level}>
                Level {level}
              </p>
            </div>
          </div>
        </>
      ) : (
        <NewUserNameModal />
      )}
    </div>
  )
}