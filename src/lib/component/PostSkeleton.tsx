export const PostSkeleton = () => {
  return (
    <div className="w-3/4 p-4 mx-auto mt-5 bg-gray-400 rounded-md h-28">
      <div className="flex flex-row gap-4">
        <div className="w-1/6 h-20 bg-gray-500 rounded-md"></div>
        <div className="flex flex-col w-5/6 gap-3">
          <div className="w-4/12 h-3 bg-gray-500"></div>
          <div className="w-3/12 h-3 bg-gray-500"></div>
          <div className="w-11/12 h-3 bg-gray-500"></div>
          <div className="w-11/12 h-3 bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
};
