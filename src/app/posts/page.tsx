"use client";
import { fetchPosts } from "@/lib/data";
import Post from "@/lib/component/Post";
import { typePost } from "@/lib/types";
export default async function page() {
  const data = await fetchPosts();
  console.log(data);

  return (
    <section className="flex-col gap-2">
      {data.map((data: typePost) => {
        return (
          <Post
            id={data.id}
            title={data.title}
            photo_url={data.photo_url}
            content_text={data.content_text}
          />
        );
      })}
    </section>
  );
}
