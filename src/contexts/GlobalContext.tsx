import { createContext, ReactNode, useState } from "react";

interface GlobalContextData {
  initialTime: number;
  initialRestTime: number;
  setPomodoroTime: (value) => void;
  setRestTime: (value) => void;
}

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalContext = createContext({} as GlobalContextData)

export function GlobalProvider({ children }: GlobalProviderProps) {

  const [initialTime, setInitialTime] = useState(0)
  const [initialRestTime, setInitialRestTime] = useState(0)

  function setPomodoroTime(value) {
    setInitialTime(value * 60);
  }

  function setRestTime(value) {
    setInitialRestTime(value * 60)
  }

  return (
    <GlobalContext.Provider value={{
      initialTime,
      initialRestTime,
      setPomodoroTime,
      setRestTime,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}