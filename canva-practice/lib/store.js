import { create } from "zustand";

const useStore = create((set) => ({
  sideBarMenu: null,
  updateSideBarMenu: (newSideBarMenu) => set({ sideBarMenu: newSideBarMenu }),
}));

export default useStore;
