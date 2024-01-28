"use client";
import { fetchPostById } from "@/lib/data";
import Image from "next/image";

const page = async () => {
  const post = await fetchPostById(1);
  console.log(post);
  return (
    <article className=" text-center max-w-5xl mx-auto">
      <h1 className="text-3xl text-blue-400">{post.title}</h1>
      <h4 className="text-xl text-red-500">Category: {post.category}</h4>

      <Image
        className="mx-auto my-5"
        src={post.photo_url}
        alt={post.title}
        height={600}
        width={600}
      />

      <div className="ml-2 self-center ">
        <p className="text-sm px-5 ">{post.content_text}...</p>
      </div>
    </article>
  );
};

export default page;
