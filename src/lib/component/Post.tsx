import Image from "next/image";
import { typePost } from "../types";

const Post = (post: typePost) => {
  return (
    <div
      key={post.id}
      className="mx-auto sm:px-7 flex text-left max-sm:w-80 max-sm:text-center p-3 max-sm:flex-col "
    >
      <Image
        className="max-sm:w-80"
        src={post.photo_url}
        width={250}
        height={250}
        alt={post.title + " image"}
      />
      <div className="ml-2 self-center">
        <h3 className="text-lg text-blue-400">{post.title}</h3>
        <h4 className="text-red-500">Category: {post.category}</h4>
        <p className="text-sm">{post.content_text}...</p>
        <button className="bg-blue-200 text-blue-600 p-1 text-lg font-medium">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Post;
