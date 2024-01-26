export const fetchPosts = async (limit: number) => {
  try {
    const posts = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=${limit}`
    ).then((response) => response.json());

    const data = await posts.blogs;
    return data;
  } catch (error) {
    console.log(error);
  }
};
