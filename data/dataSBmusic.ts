import { Image, Project, Todo } from "@/types";

export const projectData: Project = {
  title: "SBmusic",
  type: "Personal project",
  deployment: "https://sbmusic.vercel.app/",
  source: "https://github.com/SunnyBiolie/SunnyBiolieMusic",
  status: "This project is being updated...",
  updated_at: "Friday, February 2, 2024",
};

export const images: Image[] = [
  {
    title: "Home page - Logged",
    path: "https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fsunnybiolie_music%2Fhome.png?alt=media&token=fa09a610-ce06-4336-b668-30ba6fb43d36",
  },
  {
    title: "Home page with Player and Queue",
    path: "https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fsunnybiolie_music%2FHome%20with%20Player%20and%20Queue.png?alt=media&token=dbb6d447-10c9-4a14-b1cf-528f590e4a78",
  },
  {
    title: "Search page",
    path: "https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fsunnybiolie_music%2FSearch.png?alt=media&token=a2fd3139-68d6-4d5b-8025-1e5eeb305334",
  },
  {
    title: "Upload page",
    path: "https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fsunnybiolie_music%2FUpload.png?alt=media&token=0557e98c-8eb6-4435-a3df-528af018b920",
  },
];

export const todos: Todo[] = [
  {
    title: "Basic finishing.",
    status: "Completed",
    completed_at: "Jan 31, 2024",
  },
  {
    title: "Add function to edit collection information.",
    status: "Not Started",
  },
  {
    title: "Handled when deleting sounds on the server or by admin.",
    status: "Not Started",
  },
  {
    title: "Responsive on mobile devices.",
    status: "Not Started",
  },
];

export const packageJSON = {
  dependencies: {
    "@heroicons/react": "^2.1.1",
    "@radix-ui/react-icons": "^1.3.0",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-scroll-area": "^1.0.5",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@supabase/auth-helpers-react": "^0.4.2",
    "@supabase/auth-ui-react": "^0.4.6",
    "@supabase/auth-ui-shared": "^0.1.8",
    "@supabase/ssr": "^0.0.10",
    "@supabase/supabase-js": "^2.39.2",
    "@types/uniqid": "^5.3.4",
    "@vercel/speed-insights": "^1.0.8",
    "class-variance-authority": "^0.7.0",
    clsx: "^2.1.0",
    next: "14.0.4",
    react: "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.49.2",
    "react-tooltip": "^5.25.2",
    sonner: "^1.3.1",
    "tailwind-merge": "^2.2.0",
    "tailwindcss-animate": "^1.0.7",
    uniqid: "^5.4.0",
    zod: "^3.22.4",
    zustand: "^4.4.7",
  },
  devDependencies: {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    autoprefixer: "^10.0.1",
    eslint: "^8",
    "eslint-config-next": "14.0.4",
    postcss: "^8",
    supabase: "^1.127.4",
    tailwindcss: "^3.3.0",
    typescript: "^5",
  },
};
