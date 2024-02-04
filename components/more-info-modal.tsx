"use client";

interface MoreInfoModalProps {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export const MoreInfoModal = ({
  children,
  title,
  isOpen,
  onClose,
}: MoreInfoModalProps) => {
  return (
    <div className={isOpen ? "block" : "hidden"}>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-[60]"
        onClick={onClose}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[768px] h-fit p-5 bg-neutral-900 rounded-lg z-[60]">
        <h3 className="text-highlight text-xl mt-2 mb-4">{title}</h3>
        <>{children}</>
      </div>
    </div>
  );
};
