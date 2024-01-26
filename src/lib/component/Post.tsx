import Image from "next/image";
import { typePost } from "./types";

const Post = (post: typePost) => {
  return (
    <section>
      <Image
        src={post.photo_url}
        width={100}
        height={100}
        alt={post.title + " image"}
      />
      <h1>{post.title}</h1>
    </section>
  );
};

export default Post;
