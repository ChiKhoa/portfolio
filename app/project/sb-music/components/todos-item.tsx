import { FaCircle } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";

interface TodosItenProps {
  title: string;
  isDone: boolean;
  dateDone?: string;
}

export const TodosItem = ({ title, isDone, dateDone }: TodosItenProps) => {
  return (
    <p className="flex items-center gap-4">
      <FaCircle className="w-2 h-2" />
      {isDone ? (
        <span className="flex items-center gap-1">
          <s>
            <abbr title={title} className="no-underline">
              {title}
            </abbr>
          </s>

          <IoCheckmarkDone />
        </span>
      ) : (
        <span>{title}</span>
      )}
      <i className="text-sm font-light">{dateDone}</i>
    </p>
  );
};
