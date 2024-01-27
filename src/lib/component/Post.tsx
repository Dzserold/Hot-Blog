import Image from "next/image";
import { typePost } from "../types";

const Post = (post: typePost) => {
  return (
    <div key={post.id} className="flex ">
      <Image
        src={post.photo_url}
        width={200}
        height={200}
        alt={post.title + " image"}
      />
      <div className="ml-2 self-center">
        <h1>{post.title}</h1>
        <p className="text-sm">{post.content_text.substring(0, 200)}...</p>
      </div>
    </div>
  );
};

export default Post;
