import { PostSkeleton } from "@/component/PostSkeleton";
const Loading = () => {
  for (let index = 0; index < 4; index++) {
    return <PostSkeleton />;
  }
};

export default Loading;
