import axiosInstance from './axiosInstance';

const getPostsAPI = async (): Promise<any> => {
  const response = await axiosInstance.get(`/posts`);

  if (response.status === 200) return response.data;
  else throw Error(response.statusText);
};

export { getPostsAPI };
