import { PostSkeleton } from "@/component/PostSkeleton";
const Loading = () => {
  return (
    <div className="max-w-3xl mx-auto mt-7">
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </div>
  );
};

export default Loading;
