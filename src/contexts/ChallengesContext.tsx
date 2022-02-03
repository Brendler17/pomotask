import { createContext, ReactNode, useEffect, useState } from 'react';
import { LevelUpModal } from '../components/LevelUpModal';
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  completedChallenges: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  completedChallenges: number;
  selectBox: () => void;
}

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, selectBox,...rest }: ChallengesProviderProps) {

  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [completedChallenges, setCompletedChallenges] = useState(rest.completedChallenges ?? 0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 6, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level), {expires: 60});
    Cookies.set('currentExperience', String(currentExperience), {expires: 60});
    Cookies.set('completedChallenges', String(completedChallenges), {expires: 60});
  }, [level, currentExperience, completedChallenges])

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    selectBox();

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      const notification = new Notification('Pomodoro Finalizado 🔥', {
        body: `Você liberou um novo desafio valendo ${challenge.amount} XP!`,
        icon: 'https://assets.materialup.com/uploads/05f16ab7-ae58-4afa-952a-efe8564f0350/preview.png'
      });

      setTimeout(() => {
        notification.close()
      }, 8000)
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setCompletedChallenges(completedChallenges + 1);

    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }


  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        completedChallenges,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal
      }}
    >
      {children}


      {isLevelUpModalOpen && (
        <LevelUpModal />
      )}

    </ChallengesContext.Provider>
  )
}