import Image from "next/image";
import chili from "@/images/chili.svg";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex row justify-between p-1">
      <div className="flex row p-1">
        <Image src={chili} height={30} width={30} alt="chili logo" />
        <h1 className="text-red-500 text-3xl ml-1">
          Hot<span className="text-blue-400">Blog</span>
        </h1>
      </div>
      <ul className="flex row cursor-pointer text-xl">
        <Link href="/">
          <li className=" p-2 text-blue-400 hover:text-red-500">Home</li>
        </Link>
        <Link href="/posts">
          <li className="p-2 text-blue-400 hover:text-red-500">Posts</li>
        </Link>
        <li className="p-2 text-blue-400 hover:text-red-500">About</li>
      </ul>
    </nav>
  );
};

export default Nav;
