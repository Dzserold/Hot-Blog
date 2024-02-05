import { typePostCard } from "../types";
import Link from "next/link";

// This function shows the post Card in the user searches for Posts
export default function PostCard(data: typePostCard) {
  function getHighlightedText(text: string, highlight: string) {
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === highlight.toLowerCase()
                ? { backgroundColor: " rgba(223, 255, 99, 1)" }
                : {}
            }
          >
            {part}
          </span>
        ))}
      </span>
    );
  }

  return (
    <div>
      <h3 className="text-lg text-blue-400">
        {getHighlightedText(data.title, data.query)}
      </h3>
      <h4 className="text-red-500">
        Category: {getHighlightedText(data.category, data.query)}
      </h4>
      <p className="text-sm">{data.content_text}</p>
      <Link href={"posts/" + data.id}>
        <button className="p-1 mt-1 font-medium text-blue-600 bg-blue-200 hover:bg-red-300 text-md">
          Read more
        </button>
      </Link>
    </div>
  );
}
