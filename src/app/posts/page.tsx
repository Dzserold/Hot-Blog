"use client";

import { fetchPosts } from "@/lib/data";
import Post from "@/lib/component/Post";
import { typePost } from "@/lib/component/types";

export default async function page() {
  const data = await fetchPosts(10);
  console.log(data);

  return (
    <section>
      {data.map((data: typePost, key: number) => {
        return <Post key={key} title={data.title} photo_url={data.photo_url} />;
      })}
    </section>
  );
}
