"use client";
import { fetchPosts } from "@/lib/data";

export default async function page() {
  const data = await fetchPosts(10);
  console.log(data);

  return <section></section>;
}
