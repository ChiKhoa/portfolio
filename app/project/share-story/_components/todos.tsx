import Link from "next/link";
import { TodosItem } from "../../_components/todos-item";
import { todos } from "@/data/dataShareStory";

export const Todos = () => {
  return (
    <section className="flex flex-col gap-y-4 mb-10">
      <h3 className="text-highlight underline text-xl font-medium">Todos</h3>
      <div className="flex flex-col gap-y-1">
        <p className="text-[1.0625rem] text-highlight mb-1">
          Main things to do
        </p>
        {todos.map((todo, index) => (
          <TodosItem
            key={index}
            title={todo.title}
            isDone={todo.status === "Completed"}
            dateDone={`(${todo.status})`}
          />
        ))}
      </div>
    </section>
  );
};
