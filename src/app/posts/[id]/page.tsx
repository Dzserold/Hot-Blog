"use client";
import { fetchPostById } from "@/lib/data";
import Image from "next/image";

const page = async ({ params }: { params: { id: number } }) => {
  const id = params.id;
  const post = await fetchPostById(id);

  return (
    <article className="max-w-5xl pt-4 mx-auto text-center ">
      <h1 className="text-3xl text-blue-400">{post.title}</h1>
      <h4 className="text-xl text-red-500">Category: {post.category}</h4>

      <Image
        className="mx-auto my-5"
        src={post.photo_url}
        alt={post.title}
        height={600}
        width={600}
      />

      <div className="self-center ml-2 ">
        <p className="px-5 text-sm ">{post.content_text}...</p>
        <p>{post.updated_at.substring(0, 10).replace("-", ".")}</p>
      </div>
    </article>
  );
};

export default page;
