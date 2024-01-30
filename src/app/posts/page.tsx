import { fetchPosts } from "@/lib/data";
import Post from "@/lib/component/Post";
import { typePost } from "@/lib/types";
export default async function page() {
  const data = await fetchPosts();

  return (
    <section className="flex-col max-w-5xl mx-auto align-middle">
      <h2 className="custom-gradiant p-4">Read our blog posts</h2>
      {data.map((data: typePost) => {
        return (
          <Post
            key={data.id}
            id={data.id}
            title={data.title}
            photo_url={data.photo_url}
            content_text={data.content_text.substring(0, 240)}
            category={data.category}
          />
        );
      })}
    </section>
  );
}
