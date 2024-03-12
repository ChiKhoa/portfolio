import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactPage = () => {
  return (
    <>
      <div className="mb-8">
        <div className="text-highlight text-xl mb-2">Social media</div>
        <div className="grid grid-cols-3 gap-4">
          <Link
            href="https://www.facebook.com/chikhoa.nguyen.10"
            className="flex items-center gap-2 hover:text-highlight transition cursor-pointer"
          >
            <FaFacebook className="w-6 h-6" />
            chikhoa.nguyen.10
          </Link>
          <Link
            href="https://www.instagram.com/sunny_biolie/"
            className="flex items-center gap-2 hover:text-highlight transition cursor-pointer"
          >
            <FaInstagram className="w-6 h-6" />
            sunny_biolie
          </Link>
        </div>
      </div>
      <div className="mb-8">
        <div className="text-highlight text-xl mb-2">Email</div>
        <div className="flex items-center gap-2 transition">
          <SiGmail className="w-6 h-6" />
          khoa.phamnguyenchi49@gmail.com
        </div>
      </div>
    </>
  );
};

export default ContactPage;
