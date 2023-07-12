import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from 'js-cookie'

interface GlobalContextData {
  userName: string;
  hasUser: boolean;
  initialTime: number;
  initialRestTime: number;
  setPomodoroTime: (value: number) => void;
  setRestTime: (value: number) => void;
  setUsernameValue: (value: string) => void;
  setHasUsernameValue: (value: boolean) => void;
}

interface GlobalProviderProps {
  children: ReactNode;
  userName: string;
}

export const GlobalContext = createContext({} as GlobalContextData)

export function GlobalProvider({ children, ...rest }: GlobalProviderProps) {

  const [initialTime, setInitialTime] = useState(0);
  const [initialRestTime, setInitialRestTime] = useState(0);
  const [userName, setUserName] = useState(rest.userName === 'undefined' ? '' : rest.userName);
  const [hasUser, setHasUser] = useState(rest.userName !== 'undefined' ? true : false);

  function setPomodoroTime(value: number) {
    setInitialTime(value * 60);
  }

  function setRestTime(value: number) {
    setInitialRestTime(value * 60)
  }

  function setUsernameValue(value: string) {
    setUserName(value);
    Cookies.set('userName', String(value), { expires: 60 });
  }

  function setHasUsernameValue(value: boolean) {
    setHasUser(value);
  }

  return (
    <GlobalContext.Provider value={{
      userName,
      hasUser,
      initialTime,
      initialRestTime,
      setPomodoroTime,
      setRestTime,
      setUsernameValue,
      setHasUsernameValue
    }}>
      {children}
    </GlobalContext.Provider>
  )
}