import { useContext } from 'react'
import { StatsContext } from '../contexts/StatsContext'
import styles from '../styles/components/InfoHours.module.css'

export function InfoHours() {

  const { hoursPerDay, hoursTotal } = useContext(StatsContext);

  const formatHourDay = hoursPerDay / 60;
  const formatHourTotal = hoursTotal / 60;

  let hourPerDay, minutePerDay,
    hourTotal, minuteTotal;

  if (formatHourDay >= 60) {
    hourPerDay = String(Math.floor(formatHourDay / 60)).padStart(2, '0').concat('h');
    minutePerDay = String(formatHourDay % 60).padStart(2, '0');

  } else {
    minutePerDay = String(formatHourDay);
  }

  if (formatHourTotal >= 60) {
    hourTotal = String(Math.floor(formatHourTotal / 60)).padStart(2, '0').concat('h');
    minuteTotal = String(formatHourTotal % 60).padStart(2, '0');

  } else {
    minuteTotal = String(formatHourTotal);
  }

  return (
    <>
      <div className={styles.infoHoursContainer}>
        <span>Horas Totais</span>

        <span>{hourTotal} {minuteTotal}min</span>
      </div>
      <div className={styles.infoHoursContainer}>
        <span>Horas Diárias</span>
        <span>{hourPerDay} {minutePerDay}min</span>
      </div>
    </>
  )
}