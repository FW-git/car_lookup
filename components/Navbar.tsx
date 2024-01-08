import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center ">
          <Image
            src="/logo.svg"
            alt="CarSearch Logo"
            width={229.6}
            height={35}
            className="object-contain mt-6"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="font-black text-primary-blue rounded-full bg-white min-w-[130px] bg-gray-300 bg-opacity-40 px-4 py-2 rounded-3xl cursor-not-allowed disabled"
        />
      </nav>
    </header>
  );
};

export default Navbar;
