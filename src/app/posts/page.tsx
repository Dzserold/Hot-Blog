import { fetchPosts } from "@/lib/data";
import Post from "@/lib/component/Post";
import { typePost } from "@/lib/types";
import { Suspense } from "react";
import Loading from "./loading";

export default async function page() {
  const data = await fetchPosts(30);

  return (
    <section className="flex-col max-w-5xl mx-auto align-middle">
      <h2 className="p-4 custom-gradiant">Read our blog posts</h2>
      {data.map((data: typePost) => {
        return (
          <Suspense fallback={<Loading />}>
            <Post
              key={data.id}
              id={data.id}
              title={data.title}
              photo_url={data.photo_url}
              content_text={`${data.content_text.substring(0, 240)}...`}
              category={data.category}
            />
          </Suspense>
        );
      })}
    </section>
  );
}
