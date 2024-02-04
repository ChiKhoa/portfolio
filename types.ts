export interface Project {
  title: string;
  type: "Personal project" | "Collaboration project";
  deployment?: string;
  video_demo?: string;
  source: string;
  status: string;
  updated_at: string;
}

export interface Image {
  title: string;
  path: string;
}

export interface Todo {
  title: string;
  status: "Not Started" | "In Progress" | "Completed";
  completed_at?: string;
}
