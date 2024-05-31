export type Slide = {
  imageXS?: string;
  image: string;
  aspectRatio: string;
  rotateDeg: string;
  description?: string;
};

export const slides: Slide[] = [
  {
    imageXS:
      "https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fothers%2Favatar_cv-xs.jpg?alt=media&token=3f890e44-6a42-41e6-b045-f34d1491aecf",
    image:
      "https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fothers%2Favatar_cv.jpg?alt=media&token=b59ab028-e3f1-4b1f-90f1-61e1068da2cd",
    aspectRatio: "4/5",
    rotateDeg: "6deg",
    description: "That's me",
  },
  {
    imageXS:
      "https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fothers%2Fueh-n-xs.jpg?alt=media&token=85d44da5-e710-4793-a46f-e14af99ad81f",
    image:
      "https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fothers%2Fueh-n.jpg?alt=media&token=fb40f80a-aa96-4030-b558-6427644078d2",
    aspectRatio: "4/3",
    rotateDeg: "0deg",
    description: "My university",
  },
  {
    imageXS:
      "https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fothers%2Fpic-in-beach-xs.jpg?alt=media&token=bd7bdd6e-c974-4aa5-908d-baf7c9a473d3",
    image:
      "https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fothers%2Fpic-in-beach.jpg?alt=media&token=ff5e88d4-1fe8-4dcc-ae75-391a7b53d2ad",
    aspectRatio: "6/5",
    rotateDeg: "-6deg",
    description: "I love capturing moments and nature",
  },
];
