export const fetchPosts = async () => {
  try {
    const posts = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=${10}`
    ).then((response) => response.json());

    const data = await posts.blogs;
    return data;
  } catch (error) {
    console.log(error);
  }
};
