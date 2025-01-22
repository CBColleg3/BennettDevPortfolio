import { create } from 'zustand'

export const useZoomStore = create((set) => ({
  zoom: false,
  focus: {},

  setZoom: (zoomValue) => set({
    zoom: zoomValue
  }),

  setFocus: (focusRef) => set({
    focus: focusRef,
  }),

}))