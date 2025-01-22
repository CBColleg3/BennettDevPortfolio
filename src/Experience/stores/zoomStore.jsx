import { create } from 'zustand'

export const useZoomStore = create((set) => ({
  zoom: false,
  focus: {},

  setZoom: (zoomValue) => set({
    zoom: zoomValue
  }),

  setFocus: (zoomValue) => set({
    focus: (focusRef) => (setZoom(!zoomValue), setFocus(focusRef), console.log("zv:" + zoomValue))
  }),

}))