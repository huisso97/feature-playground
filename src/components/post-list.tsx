"use client";

import { useEffect, useRef, useState } from "react";
import { useGetPostsQuery } from "@/query/post";
import Link from "next/link";
import "./post-list.css";

interface Post {
  id: number;
  title: string;
}

const PostList = () => {
  const { data, isLoading, error } = useGetPostsQuery();
  const [currentTitle, setCurrentTitle] = useState("Post List");
  const [intersectingPostId, setIntersectingPostId] = useState<number | null>(
    null
  );
  const [animate, setAnimate] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const postId = entry.target.getAttribute("data-id");
          if (postId) {
            setIntersectingPostId(Number(postId));
            const postTitle = entry.target.getAttribute("data-title");
            if (postTitle) {
              setAnimate(true);
              setTimeout(() => {
                setCurrentTitle(postTitle);
                setAnimate(false);
              }, 500); 
            }
          }
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
    });

    const elements = document.querySelectorAll(".post-item");
    elements.forEach((element) => observer.current?.observe(element));

    return () => {
      observer.current?.disconnect();
    };
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const posts = data?.map((post: Post) => ({
    id: post.id,
    title: post.title,
  }));

  return (
    <div className="flex flex-col h-full">
      <div className="sticky top-0 z-10 p-4 bg-gray-200">
        <h1 className={`text-xl font-bold ${animate ? "animate-title" : ""}`}>
          {currentTitle}
        </h1>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul>
          {posts?.map((post: Post) => (
            <li
              key={post.id}
              className={`mb-2 post-item h-20 ${
                intersectingPostId === post.id ? "bg-yellow-200" : ""
              }`} // 높이 조정 및 스타일 추가
              data-id={post.id}
              data-title={post.title}
            >
              <Link
                href={`/posts/${post.id}`}
                className="text-blue-500 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
