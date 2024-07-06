"use client";

import { useEffect, useRef, useState } from "react";
import { useGetPostsQuery } from "@/query/post";
import Link from "next/link";
import { useReactToPrint } from "react-to-print";
import "./post-list.css";

interface Post {
  id: number;
  title: string;
  body: string; // body 필드 추가
}

const PostList = () => {
  const { data, isLoading, error } = useGetPostsQuery();
  const [currentTitle, setCurrentTitle] = useState("Post List");
  const [nextTitle, setNextTitle] = useState<string | null>(null);
  const [animateOut, setAnimateOut] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [intersectingPostId, setIntersectingPostId] = useState<number | null>(
    null
  );
  const observer = useRef<IntersectionObserver | null>(null);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const postId = entry.target.getAttribute("data-id");
          if (postId) {
            setIntersectingPostId(Number(postId));
            const postTitle = entry.target.getAttribute("data-title");
            if (postTitle) {
              setNextTitle(postTitle);
              setAnimateOut(true);
              setTimeout(() => {
                setAnimateOut(false);
                setCurrentTitle(postTitle);
                setAnimateIn(true);
                setTimeout(() => {
                  setAnimateIn(false);
                  setNextTitle(null);
                }, 500); // 애니메이션을 500ms 동안 유지
              }, 500); // 애니메이션을 500ms 동안 유지
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

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div className="flex flex-col h-full">
      <div className="sticky top-0 z-10 p-4 bg-gray-200">
        <div className="relative">
          <h1
            className={`text-xl font-bold ${
              animateOut ? "animate-title-out" : ""
            }`}
          >
            {currentTitle}
          </h1>
          {nextTitle && (
            <h1
              className={`text-xl font-bold absolute top-0 left-0 ${
                animateIn ? "animate-title-in" : ""
              }`}
            >
              {nextTitle}
            </h1>
          )}
        </div>
        <button
          onClick={handlePrint}
          className="p-2 mt-2 text-white bg-blue-500 rounded"
        >
          Print
        </button>
      </div>
      <div className="flex-1 overflow-y-auto" ref={printRef}>
        <ul className="post-list">
          {data?.map((post: Post) => (
            <li
              key={post.id}
              className={`post-item ${
                intersectingPostId === post.id ? "bg-yellow-200" : ""
              }`} // 높이 조정 및 스타일 추가
              data-id={post.id}
              data-title={post.title}
            >
              <div className="print-header">
                <h1 className="text-xl font-bold">{currentTitle}</h1>
              </div>
              <Link href={`/posts/${post.id}`} className="post-link">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
