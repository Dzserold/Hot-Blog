import { typePostCard } from "../types";
import Link from "next/link";

export default function PostCard(data: typePostCard) {
  return (
    <div>
      <h3 className="text-lg text-blue-400">{data.title}</h3>
      <h4 className="text-red-500">Category: {data.category}</h4>
      <p className="text-sm">{data.content_text}</p>
      <Link href={"posts/" + data.id}>
        <button className="bg-blue-200 hover:bg-red-300 text-blue-600 p-1 mt-1 text-md font-medium">
          Read more
        </button>
      </Link>
    </div>
  );
}
