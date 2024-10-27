"use client";

import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import Link from "next/link";

import { PostType } from "@/types/post";
import "./observer-list.css";

interface ObserverListProps {
  data: PostType[];
}

const ObserverList = ({ data }: ObserverListProps) => {
  const [currentTitle, setCurrentTitle] = useState("Post List");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [intersectingPostId, setIntersectingPostId] = useState<number | null>(
    null
  );
  const observer = useRef<IntersectionObserver | null>(null);
  const printRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const postRefs = useRef<Map<number, PostType>>(new Map());

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const postElement = entry.target as HTMLElement;
          const postId = Number(postElement.id.split("-")[1]);
          const post = postRefs.current.get(postId);
          if (post) {
            setIntersectingPostId(postId);
            if (post.title !== currentTitle) {
              setIsTransitioning(true);

              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }

              timeoutRef.current = setTimeout(() => {
                setCurrentTitle(post.title);
                setIsTransitioning(false);
              }, 300);
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
                ? "opacity-0 translate-x-2"
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
          {data?.map((post) => (
            <li
              key={post.id}
              id={`post-${post.id}`}
              className={`post-item ${
                intersectingPostId === post.id ? "bg-yellow-200" : ""
              }`}
              ref={(el) => {
                if (el) postRefs.current.set(post.id, post);
              }}
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

export default ObserverList;
