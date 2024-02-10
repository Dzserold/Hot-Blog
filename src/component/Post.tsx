import Image from "next/image";
import { typePost } from "../lib/types";
import Link from "next/link";

// Post component on the Posts page
const Post = (post: typePost) => {
  return (
    <div
      key={post.id}
      className="flex p-3 mx-auto text-left sm:px-7 max-sm:w-80 max-sm:text-center max-sm:flex-col "
    >
      <Image
        className="max-sm:w-80"
        src={post.photo_url}
        width={250}
        height={250}
        alt={post.title + " image"}
      />
      <div className="self-center ml-2">
        <h3 className="text-lg text-blue-400">{post.title}</h3>
        <h4 className="text-red-500">Category: {post.category}</h4>
        <p className="text-sm">{post.content_text}</p>
        <Link href={"posts/" + post.id.toString()}>
          <button className="p-1 mt-1 text-lg font-medium text-blue-600 bg-blue-200 hover:bg-red-300">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
