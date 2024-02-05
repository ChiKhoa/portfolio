import { Image } from "@/types";
import { useViewFullScreen } from "./use-view-full-screen";

export const useOpenVFS = (images: Image[]) => {
  const viewFullScreen = useViewFullScreen();

  return () => {
    viewFullScreen.setImageQueue(images);
    viewFullScreen.setCurrentImage(images[0]);
    viewFullScreen.onOpen();
  };
};
