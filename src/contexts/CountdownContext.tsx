import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";
import { GlobalContext } from "./GlobalContext";
import { StatsContext } from "./StatsContext";
import * as workerTimers from 'worker-timers';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  initialTime: number;
  hasFinished: boolean;
  isActive: boolean;
  isRest: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
  selectChallengesContainer: () => void;
}

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ 
  children, 
  selectChallengesContainer 
}: CountdownProviderProps) {

  const { initialTime, initialRestTime } = useContext(GlobalContext);
  const { startNewChallenge } = useContext(ChallengesContext);
  const { updateHours, updatePomodoros } = useContext(StatsContext);

  const [time, setTime] = useState(0);
  const [hasFinished, setHasFinished] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isRest, setIsRest] = useState(false);
  const [countdownTimeout, setCountdownTimeout] = useState(0);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  let timeOutId = 0;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    workerTimers.clearTimeout(countdownTimeout);
    setIsActive(false);
    setIsRest(false);
    setTime(initialTime);
    setHasFinished(false);
  }

  function startRestCountdown() {
    setTime(initialRestTime);
    setIsRest(true);
  }

  useEffect(() => {
    setTime(initialTime);
  }, [initialTime])

  useEffect(() => {
    if ((isActive || isRest) && time > 0) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeOutId = workerTimers.setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      setCountdownTimeout(timeOutId);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      updateHours();
      updatePomodoros();
      startNewChallenge();

      workerTimers.setTimeout(() => {
        startRestCountdown();
      }, 500);
    } else if (isRest && time === 0) {
      setIsRest(false);
      new Audio('/notification.mp3').play()
      selectChallengesContainer();
    }
  }, [isActive, isRest, time])


  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        initialTime,
        hasFinished,
        isActive,
        isRest,
        startCountdown,
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}