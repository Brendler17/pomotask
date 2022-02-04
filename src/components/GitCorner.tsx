import { useWindowDimensions } from '../hooks/useWindowDimensions'
import styles from '../styles/components/GitCorner.module.css'

export default function GitCorner() {

  const width = useWindowDimensions()

  return (
    <>
      {width >= 1080 && (
        <div className={styles.gitCornerContainer}>
          <a
            href="https://github.com/Brendler17/pomotask"
            title="Código do Projeto"
            target="_blank"
            rel="noreferrer"
          >
            <b>GitHub</b>
          </a>
        </div>
      )}
    </>
  )
}