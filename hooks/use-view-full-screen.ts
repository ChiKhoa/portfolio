import { Image } from "@/types";
import { create } from "zustand";

interface ViewFullScreenStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  currentImage: Image | null;
  setCurrentImage: (image: Image) => void;
  imageQueue: Image[];
  setImageQueue: (images: Image[]) => void;
}

export const useViewFullScreen = create<ViewFullScreenStore>((set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
    document.body.style.overflow = "hidden";
  },
  onClose: () => {
    set({ isOpen: false });
    document.body.style.overflow = "auto";
  },
  currentImage: null,
  setCurrentImage: (image: Image) => set({ currentImage: image }),
  imageQueue: [],
  setImageQueue: (images: Image[]) => set({ imageQueue: images }),
}));
