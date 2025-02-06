import { create } from 'zustand'

export const useRevealStore = create((set) => ({
  isRevealed: false,
  isAnimationFinished: false,

  setIsRevealed: (revealValue) => set({
    isRevealed: revealValue
  }),

  setIsAnimationFinished: (animationValue) => set({
    isAnimationFinished: animationValue
  }),

}))