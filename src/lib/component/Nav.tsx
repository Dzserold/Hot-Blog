import Image from "next/image";
import chili from "@/images/chili.svg";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="customBorder-nav bg-zinc-950 ">
      <div className="flex justify-between max-w-5xl p-3 mx-auto row">
        <Link href="/">
          <div className="flex p-1 row">
            <Image
              placeholder="empty"
              className="w-8 h-8"
              src={chili}
              height={0}
              width={0}
              alt="chili logo"
            />
            <h1 className="ml-1 text-3xl text-red-500">
              Hot<span className="text-blue-400">Blog</span>
            </h1>
          </div>
        </Link>
        <ul className="flex text-xl cursor-pointer row">
          <Link href="/">
            <li className="p-2 text-blue-400  hover:text-red-500">Home</li>
          </Link>
          <Link href="/posts">
            <li className="p-2 text-blue-400 hover:text-red-500">Posts</li>
          </Link>
          <Link href="/about">
            <li className="p-2 text-blue-400 hover:text-red-500">About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
