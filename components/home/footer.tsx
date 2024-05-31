import { LuCopyright } from "react-icons/lu";

export const Footer = () => {
  return (
    <div className="border-t-[2px] border-foreground pt-4 pb-16">
      <div className="flex items-center gap-x-2 text-highlight text-sm">
        <LuCopyright className="size-4" />
        <span>2024</span>
        <span>SunnyBiolie - Khoa Phạm</span>
      </div>
    </div>
  );
};
