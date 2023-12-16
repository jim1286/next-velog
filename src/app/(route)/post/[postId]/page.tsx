"use client";

import { Loading, PostCard } from "@/components";
import { useAppSelector } from "@/redux/hook";
import { PostService } from "@/service";
import { DateUtil } from "@/utils";
import { nanoid } from "@reduxjs/toolkit";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface Props {
  params: { postId: string };
}

export default function Post({ params }: Props) {
  const userId = useAppSelector((state) => state.userReducer.user?.userId);
  const deleteMutate = useMutation({
    mutationFn: PostService.deletePost,
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error),
  });
  const { data, isLoading } = useQuery({
    queryKey: ["post", params.postId],
    queryFn: () => PostService.getPost(params.postId),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>error</div>;
  }

  const handleDelete = () => {
    if (!userId) {
      return;
    }

    const param = {
      postId: params.postId,
      userId,
    };

    deleteMutate.mutate(param);
  };

  return (
    <div>
      <Link
        href={"/post/trend/week"}
        className="bg-red-50"
        onClick={handleDelete}
      >
        삭제
      </Link>
      <PostCard
        key={nanoid()}
        postId={data.postId}
        title={data.title}
        userId={data.userId}
        likes={data.likes}
        createAt={DateUtil.utcToLocalYYYYMMDD(data.createdAt)}
      />
    </div>
  );
}
