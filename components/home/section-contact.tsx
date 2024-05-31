import Link from "next/link";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoLogoFacebook, IoLogoGithub } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { Button } from "../ui/button";

export const SectionContact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col lg:flex-row-reverse gap-8 py-16"
    >
      <div className="w-full lg:w-1/3">
        <div className="h-full border-r-0 lg:border-l-[2px] border-[#b4b2ac] lg:pl-8">
          <h2 className="text-4xl lg:text-5xl font-bold lg:text-left mb-4">
            Contact
          </h2>
          <div className="flex items-center gap-x-3">
            <Link href="https://www.facebook.com/chikhoa.nguyen.10">
              <IoLogoFacebook className="size-6" />
            </Link>
            <Link href="https://www.instagram.com/sunny_biolie/">
              <RiInstagramFill className="size-6" />
            </Link>
            <Link href="https://github.com/SunnyBiolie">
              <IoLogoGithub className="size-6" />
            </Link>
          </div>
          <div className="block lg:hidden w-16 h-1 bg-[#b4b2ac] mt-6" />
        </div>
      </div>
      <div className="flex-1 space-y-8">
        <div className="space-y-2">
          <p>You can contact me via email:</p>
          <p
            // href="mailto:khoa.phamnguyenchi49@gmail.com"
            className="flex items-center gap-x-2 ml-2"
          >
            <IoIosMail className="size-6" />
            <span className="font-semibold">
              khoa.phamnguyenchi49@gmail.com
            </span>
          </p>
          <p>or phone number:</p>
          <p
            // href="tel:+840907026759"
            className="flex items-center gap-x-2 ml-2"
          >
            <FaSquarePhone className="size-6" />
            <span className="font-semibold">0907026759</span>
          </p>
        </div>
        <Button asChild>
          <Link href="/KhoaPham-Resume.pdf">My Resume</Link>
        </Button>
      </div>
    </section>
  );
};
