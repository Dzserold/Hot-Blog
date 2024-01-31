export const fetchPosts = async (quantity: number) => {
  try {
    const data = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=${quantity}`
    ).then((response) => response.json());

    const posts = await data.blogs;
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPostById = async (id: number) => {
  try {
    const data = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
    ).then((response) => response.json());

    const post = await data.blog;
    return post;
  } catch (error) {
    console.log(error);
  }
};
