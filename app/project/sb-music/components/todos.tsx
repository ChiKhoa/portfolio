import Link from "next/link";
import { TodosItem } from "./todos-item";
import { todos } from "@/data/dataSBmusic";

export const Todos = () => {
  return (
    <section className="flex flex-col gap-y-4 mb-10">
      <h3 className="text-highlight underline text-xl font-medium">Todos</h3>
      <div className="flex flex-col gap-y-1">
        <p className="text-highlight mb-1">Main things to do</p>
        {todos.map((todo, index) => (
          <TodosItem
            key={index}
            title={todo.title}
            isDone={todo.status === "Completed"}
            dateDone={`(${todo.status})`}
          />
        ))}
      </div>
      <div>
        Visit{" "}
        <Link
          href="https://sun-collar-962.notion.site/Todos-with-projects-4ec3cad6cd0c460fbc1d71f5906826bb"
          target="_blank"
          className="text-highlight underline"
        >
          this
        </Link>{" "}
        to view all.
      </div>
    </section>
  );
};
