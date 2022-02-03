import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import Cookies from 'js-cookie'

interface StatsContextData {
  hoursPerDay: number;
  hoursTotal: number;
  pomodorosPerDay: number;
  pomodorosTotal: number;
  updateHours: () => void;
  updatePomodoros: () => void;
  resetDailyValues: () => void;
}

interface StatsProviderProps {
  children: ReactNode;
  hoursPerDay: number;
  hoursTotal: number;
  pomodorosPerDay: number;
  pomodorosTotal: number;
}

export const StatsContext = createContext({} as StatsContextData);

export function StatsProvider({ children, ...rest }: StatsProviderProps) {

  const { initialTime } = useContext(GlobalContext)

  const [hoursPerDay, setHoursPerDay] = useState(rest.hoursPerDay ?? 0)
  const [hoursTotal, setHoursTotal] = useState(rest.hoursTotal ?? 0)
  const [pomodorosPerDay, setPomodorosPerDay] = useState(rest.pomodorosPerDay ?? 0)
  const [pomodorosTotal, setPomodorosTotal] = useState(rest.pomodorosTotal ?? 0)

  useEffect(() => {
    Cookies.set('hoursPerDay', String(hoursPerDay), {expires: 60}),
      Cookies.set('hoursTotal', String(hoursTotal), {expires: 60}),
      Cookies.set('pomodorosPerDay', String(pomodorosPerDay), {expires: 60}),
      Cookies.set('pomodorosTotal', String(pomodorosTotal), {expires: 60})
  }, [hoursPerDay, hoursTotal, pomodorosPerDay, pomodorosTotal])

  function updateHours() {
    setHoursPerDay(hoursPerDay + initialTime)
    setHoursTotal(hoursTotal + initialTime)
  }

  function updatePomodoros() {
    setPomodorosPerDay(pomodorosPerDay + 1)
    setPomodorosTotal(pomodorosTotal + 1)
  }

  function resetDailyValues() {
    Cookies.set('hoursPerDay', String(0))
    Cookies.set('pomodorosPerDay', String(0))
    setHoursPerDay(0)
    setPomodorosPerDay(0)
  }

  return (
    <StatsContext.Provider value={{
      hoursPerDay,
      hoursTotal,
      pomodorosPerDay,
      pomodorosTotal,
      updateHours,
      updatePomodoros,
      resetDailyValues
    }}
    >
      {children}
    </StatsContext.Provider>
  )
}