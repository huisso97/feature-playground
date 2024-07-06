import axiosInstance from "./axiosInstance";

const getPostsAPI = async (): Promise<any> => {
  const response = await axiosInstance.get(`/posts`);
  console.log(response);
  if (response.status === 200) return response.data;
  else throw Error(response.statusText);
};

export { getPostsAPI };
