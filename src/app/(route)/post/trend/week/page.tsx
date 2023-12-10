"use client";

import React from "react";
import Loading from "@/components/Loading";
import PostCard from "@/components/PostCard";
import { getPostAll } from "@/service/post.service";
import { nanoid } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import { DateUtil } from "@/utils";

export default function Week() {
  const { data, isLoading } = useQuery({
    queryKey: ["postList"],
    queryFn: async () => await getPostAll(),
  });

  return (
    <div className="flex flex-wrap w-full">
      {data &&
        data.map((post) => (
          <PostCard
            key={nanoid()}
            title={post.title}
            userId={post.userId}
            likes={post.likes}
            createAt={DateUtil.utcToLocalYYYYMMDD(post.createdAt)}
          />
        ))}
      {isLoading && <Loading />}
    </div>
  );
}
