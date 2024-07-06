"use client";

import { useEffect, useRef, useState } from "react";
import { useGetPostsQuery } from "@/query/post";
import Link from "next/link";
import { useReactToPrint } from "react-to-print";
import "./post-list.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList = () => {
  const { data, isLoading, error } = useGetPostsQuery();
  const [currentTitle, setCurrentTitle] = useState("Post List");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [intersectingPostId, setIntersectingPostId] = useState<number | null>(
    null
  );
  const observer = useRef<IntersectionObserver | null>(null);
  const printRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const postId = entry.target.getAttribute("data-id");
          if (postId) {
            setIntersectingPostId(Number(postId));
            const postTitle = entry.target.getAttribute("data-title");
            if (postTitle && postTitle !== currentTitle) {
              setIsTransitioning(true);

              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }

              timeoutRef.current = setTimeout(() => {
                setCurrentTitle(postTitle);
                setIsTransitioning(false);
              }, 300); // 트랜지션 시간과 일치
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
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [data, currentTitle]);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    pageStyle: `
      @media print {
        .print-header {
          display: block;
        }
      }
    `,
  });

  return (
    <div className="flex flex-col h-full">
      <div className="sticky top-0 z-10 p-4 bg-gray-200">
        <div className="relative h-8">
          {" "}
          {/* 고정 높이 추가 */}
          <h1
            className={`text-xl font-bold absolute transition-all duration-300 ${
              isTransitioning
                ? "opacity-0 -translate-x-2"
                : "opacity-100 translate-x-0"
            }`}
          >
            {currentTitle}
          </h1>
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
              }`}
              data-id={post.id}
              data-title={post.title}
            >
              <div className="print-header" style={{ display: "none" }}>
                <h1 className="text-xl font-bold">{post.title}</h1>
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
