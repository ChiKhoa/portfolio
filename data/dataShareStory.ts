import { MyImage, Project, Todo } from "@/types";

export const projectData: Project = {
  title: "Share Story",
  type: "Personal project",
  deployment: "https://share-story.vercel.app/",
  source: "https://github.com/SunnyBiolie/share-story",
  status: "This project is being updated...",
  updated_at: "Friday, March 2, 2024.",
};

export const applicationImages: MyImage[] = [
  {
    title: "Home page",
    path: "https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fshare_story%2FHome%20page.png?alt=media&token=aa0e9568-f561-4b77-b0b3-cb083f293587",
  },
  {
    title: "Readme page",
    path: "https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fshare_story%2FReadme%20page.png?alt=media&token=3769f203-d346-4c2e-a0b9-ed8c74ccfe9d",
  },
  {
    title: "Write page",
    path: "https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fshare_story%2FWrite%20page.png?alt=media&token=7ea96d7e-5e63-44ab-a189-30deb7580974",
  },
  {
    title: "Published page",
    path: "https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fshare_story%2FPublished%20page.png?alt=media&token=8841c778-0aca-44a9-b770-7eaa0d2db13c",
  },
  {
    title: "Edit page",
    path: "https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fshare_story%2FEdit%20page.png?alt=media&token=5c4332f6-db41-43c1-983b-c01931db1024",
  },
];

export const todos: Todo[] = [
  {
    title: "Basic finishing.",
    status: "Completed",
    completed_at: "Jan 31, 2024",
  },
  {
    title: "Add function to report post.",
    status: "Not Started",
  },
  {
    title: "Add more item and format for item, adjust for better UI.",
    status: "Not Started",
  },
];

export const packageJSON = {
  dependencies: {
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-icons": "^1.3.0",
    "@radix-ui/react-scroll-area": "^1.0.5",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-slot": "^1.0.2",
    "@remix-run/css-bundle": "^2.7.2",
    "@remix-run/node": "^2.7.2",
    "@remix-run/react": "^2.7.2",
    "@remix-run/serve": "^2.7.2",
    "class-variance-authority": "^0.7.0",
    clsx: "^2.1.0",
    isbot: "^4.1.0",
    "lucide-react": "^0.336.0",
    react: "^18.2.0",
    "react-dom": "^18.2.0",
    "remix-themes": "^1.3.1",
    "tailwind-merge": "^2.2.1",
    "tailwindcss-animate": "^1.0.7",
    "thin-backend": "^0.12.1",
    "thin-backend-react": "^0.10.1",
    zustand: "^4.5.1",
  },
  devDependencies: {
    "@remix-run/dev": "^2.7.2",
    "@types/react": "^18.2.20",
    "@types/react-dom": "^18.2.7",
    "@types/thin-backend": "https://thin.dev/types/...",
    "@typescript-eslint/eslint-plugin": "^6.7.4",
    autoprefixer: "^10.4.17",
    eslint: "^8.38.0",
    "eslint-import-resolver-typescript": "^3.6.1",
    "eslint-plugin-import": "^2.28.1",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    tailwindcss: "^3.4.1",
    typescript: "^5.1.6",
  },
  engines: {
    node: ">=19.0.0",
  },
};
