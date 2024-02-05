"use client";
import { useEffect, useState } from "react";
import { fetchPosts } from "../data";
import PostCard from "./PostCard";
import { typePostCard } from "../types";

export default function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResult] = useState([]);

  const fetchData = async () => {
    const posts = await fetchPosts(100);
    setData(posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const searchResult = filterPost(search);
    if (search === "") {
      setResult([]);
    } else {
      setResult(searchResult);
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
      <article className="grid gap-3 p-3 mx-auto max-w-screen sm:grid-cols-2 mt-7">
        {results &&
          results.map((result: typePostCard) => {
            return (
              <PostCard
                query={search}
                key={result.id}
                id={result.id}
                title={result.title}
                category={result.category}
                content_text={`${result.content_text.substring(0, 100)}...`}
              />
            );
          })}
      </article>
    </section>
  );
}
