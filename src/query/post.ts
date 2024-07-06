import { getPostsAPI } from "@/apis/post";
import { useQuery } from "@tanstack/react-query";

 const useGetPostsQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => getPostsAPI(),
  });
};



export {useGetPostsQuery}