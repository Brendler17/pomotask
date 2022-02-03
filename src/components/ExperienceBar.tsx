import { useContext } from 'react'
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'

export default function ExperienceBar() {

  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  const percentToNextLevel = Math.round(currentExperience * 100 / experienceToNextLevel);

  const width = useWindowDimensions()

  return (
    <div className={styles.experienceBarContainer}>
      <div className={styles.experienceBar}>
        {width >= 1080 ? (
          <>
            <span>{experienceToNextLevel} XP</span>
            <div>
              <div style={{ height: `${percentToNextLevel}%` }} />
              <span
                className={styles.currentExperience}
                style={{ bottom: `${percentToNextLevel}%` }}
              >{currentExperience} XP
              </span>
            </div>
            <span>0 XP</span>
          </>
        ) : (
          <>
            <span>0 XP</span>
            <div>
              <div style={{ width: `${percentToNextLevel}%` }} />
              <span
                className={styles.currentExperience}
                style={{ left: `${percentToNextLevel}%` }}
              >{currentExperience} XP
              </span>
            </div>
            <span>{experienceToNextLevel} XP</span>
          </>
        )}
      </div>
    </div>
  )
}