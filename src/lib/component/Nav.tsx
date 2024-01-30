import Image from "next/image";
import chili from "@/images/chili.svg";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-zinc-950 flex row justify-between p-3 max-w-5xl mx-auto">
      <div className="flex row p-1">
        <Image
          placeholder="empty"
          className="w-8 h-8"
          src={chili}
          height={0}
          width={0}
          alt="chili logo"
        />
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
