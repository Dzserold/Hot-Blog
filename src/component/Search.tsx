"use client";
import { useEffect, useState } from "react";
import { fetchPosts, fetchPostById } from "../lib/data";
import PostCard from "./PostCard";
import Post from "./Post";
import { typePostCard, typePost } from "../lib/types";

export default function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [randomPost, setRandomPost] = useState<typePost | null>(null);

  const fetchRandomPost = async () => {
    const randNum = Math.floor(Math.random() * 1000);
    const data = await fetchPostById(randNum);
    setRandomPost(data);
  };

  useEffect(() => {
    fetchRandomPost();
  }, []);

  const fetchData = async () => {
    const posts = await fetchPosts(100);
    setData(posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const searchResult = filterPost(search);
    if (search === "" || search === " ") {
      setResults([]);
    } else {
      setResults(searchResult);
      // the Random blog post dissapear if the user starts searching
      if (results.length > 0) {
        setRandomPost(null);
      }
    }
  }, [search]);

  function updateSearch(e: string) {
    setSearch(e);
  }

  const filterPost = (searchtext: string) => {
    const regex = new RegExp(searchtext, "i");

    const found = data?.filter(
      (search: typePostCard) =>
        regex.test(search.category) || regex.test(search.title)
    );
    return found;
  };

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
      {randomPost && (
        <div className="max-w-4xl">
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
