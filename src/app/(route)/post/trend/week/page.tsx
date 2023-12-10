"use client";
import React from "react";
import { getPostAll } from "@/service/post.service";
import { nanoid } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import { DateUtil } from "@/utils";
import { Loading, PostCard } from "@/components";

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
