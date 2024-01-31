"use client";
import { useEffect, useState } from "react";
import { fetchPosts } from "../data";

interface Post {
  category: string;
  title: string;
  content_text: string;
}

export default function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    const posts = await fetchPosts(200);
    setData(posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function updateSearch(e: string) {
    setSearch(e);
    setResult(filterPost(search));
    console.log(result);
  }

  const filterPost = (searchtext: string) => {
    const regex = new RegExp(searchtext, "i");

    return data.filter(
      (search: Post) =>
        regex.test(search.category) ||
        regex.test(search.title) ||
        regex.test(search.content_text)
    );
  };

  return (
    <div>
      <input
        className="custom_input"
        placeholder="Search posts"
        type="text"
        value={search}
        onChange={(e) => updateSearch(e.target.value)}
      />
      <div>
        <h1>{search}</h1>
      </div>
    </div>
  );
}
