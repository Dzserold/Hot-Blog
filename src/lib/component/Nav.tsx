import Image from "next/image";
import chili from "@/images/chili.svg";

const Nav = () => {
  return (
    <nav>
      <div className="flex row p-1">
        <Image src={chili} height={30} width={30} alt="chili logo" />
        <h1 className="text-red-500 text-2xl">
          Hot<span className="text-blue-400">Blog</span>
        </h1>
      </div>
    </nav>
  );
};

export default Nav;
