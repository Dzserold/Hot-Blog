"use client";
import { useEffect, useState } from "react";
import { fetchPosts, fetchPostById } from "../lib/data";
import PostCard from "./PostCard";
import Post from "./Post";
import { typePostCard, typePost } from "../lib/types";
import { PostSkeleton } from "./PostSkeleton";

export default function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [randomPost, setRandomPost] = useState<typePost | null>(null);
  const [isSearch, setIsSearch] = useState(false);

  const fetchRandomPost = async () => {
    const randNum = Math.floor(Math.random() * 100);
    const data = await fetchPostById(randNum);
    setRandomPost(data);
  };

  useEffect(() => {
    fetchRandomPost();
  }, []);

  const fetchData = async () => {
    const posts = await fetchPosts(400);
    setData(posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filterPost = (searchtext: string) => {
      const regex = new RegExp(searchtext, "i");

      const found = data?.filter(
        (search: typePostCard) =>
          regex.test(search.category) || regex.test(search.title)
      );
      return found;
    };

    const searchResult = filterPost(search);

    if (search === "" || search === " ") {
      setResults([]);
      setIsSearch(false);
    } else {
      setResults(searchResult);
      // the Random blog post dissapear if the user starts searching
      if (results.length === 0) {
        setIsSearch(true);
      }
    }
  }, [search, results]);

  function updateSearch(e: string) {
    setSearch(e);
  }

  return (
    <section>
      <div className="flex justify-center max-w-screen">
        <input
          className="custom_input"
          placeholder="Search posts title or category"
          type="text"
          onChange={(e) => updateSearch(e.target.value)}
        />
      </div>
      {/* it will show a preloading skeleton and if the data
      fetched then a random blog post will apear. But if there 
      is no search it comes back */}
      {!isSearch && randomPost ? (
        <div className="max-w-3xl mt-6">
          <Post
            photo_url={randomPost.photo_url}
            id={randomPost.id}
            title={randomPost.title ?? "No title available"}
            category={randomPost.category ?? "No category available"}
            content_text={
              `${randomPost.content_text.substring(0, 200)}...` ??
              "No content text available"
            }
          />
        </div>
      ) : (
        !isSearch && (
          <div className="mt-10">
            <PostSkeleton />
          </div>
        )
      )}
      <article className="grid gap-3 p-3 mx-auto max-w-screen sm:grid-cols-2 mt-7">
        {results &&
          results.map((result: typePostCard) => {
            return (
              <PostCard
                key={result.id}
                id={result.id}
                title={result.title}
                category={result.category}
                content_text={`${result.content_text.substring(0, 100)}...`}
                query={search}
              />
            );
          })}
      </article>
    </section>
  );
}
