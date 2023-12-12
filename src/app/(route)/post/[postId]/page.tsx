"use client";

import { Loading, PostCard } from "@/components";
import { PostService } from "@/service";
import { DateUtil } from "@/utils";
import { nanoid } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";

interface Props {
  params: { postId: string };
}

export default function Post({ params }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["post", params.postId],
    queryFn: () => PostService.getPost(params.postId),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    data && (
      <PostCard
        key={nanoid()}
        postId={data.postId}
        title={data.title}
        userId={data.userId}
        likes={data.likes}
        createAt={DateUtil.utcToLocalYYYYMMDD(data.createdAt)}
      />
    )
  );
}
