"use client";
import { useEffect, useState } from "react";
import { fetchPosts } from "../data";

interface Post {
  category: string;
  title: string;
  content_text: string;
  id: number;
}

export default function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    const posts = await fetchPosts(100);
    setData(posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const searchResult = filterPost(search);
    setResult(searchResult);
  }, [search]);

  function updateSearch(e: string) {
    setSearch(e);
    console.log(search);
  }

  const filterPost = (searchtext: string) => {
    const regex = new RegExp(searchtext, "i");

    return data.filter(
      (search: Post) => regex.test(search.category)
      //|| regex.test(search.title)
    );
  };

  return (
    <div>
      <input
        className="custom_input"
        placeholder="Search posts"
        type="text"
        onChange={(e) => updateSearch(e.target.value)}
      />
      <div>
        {/* <div>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. facere
            deserunt in? Corporis, et nam.
          </h3>
          <h5>Category:lorem</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maiores laboriosam fugiat recusandae tempore corporis vitae in, corrupti deleniti eos, assumenda architecto laudantium nisi laborum nemo veniam praesentium accusantium nulla?</p>
        </div> */}
        {result.map((post: Post) => {
          return (
            <h1 key={post.id}>
              <span>{post.category}</span>
            </h1>
          );
        })}
      </div>
    </div>
  );
}
