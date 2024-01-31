"use client";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  function updateSearch(e: string) {
    setSearch(e);
    console.log(search);
  }

  return (
    <div>
      <input
        className="custom_input"
        placeholder="Search posts"
        type="text"
        value={search}
        onChange={(e) => updateSearch(e.target.value)}
      />
      <h1>{search}</h1>
    </div>
  );
};

export default Search;
