import { MyImage } from "@/types";
import { create } from "zustand";

interface ViewFullScreenStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  currentImage: MyImage | null;
  setCurrentImage: (image: MyImage) => void;
  imageQueue: MyImage[];
  setImageQueue: (images: MyImage[]) => void;
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
  setCurrentImage: (image: MyImage) => set({ currentImage: image }),
  imageQueue: [],
  setImageQueue: (images: MyImage[]) => set({ imageQueue: images }),
}));
