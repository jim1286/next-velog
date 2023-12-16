import Link from "next/link";
import Image from "next/image";
import Welcome from "@/images/welcome.svg";

type Props = {
  title: string;
  postId: string;
  userId: string;
  likes: number;
  createAt: string;
  subTitle?: string;
};

function PostCard({ title, postId, userId, likes, createAt, subTitle }: Props) {
  const href = "/post/" + postId;

  return (
    <Link className="w-1/3 h-96 p-4" href={href}>
      <div className="w-full h-full border cursor-pointer">
        <Image className="w-full h-2/6" src={Welcome} alt="Welcome to Velog" />
        <div className="bg-white flex flex-col p-3 w-full h-3/6">
          <div className="h-6	text-slate-950">{title}</div>
          <div className="flex-1 text-slate-950">{subTitle}</div>
          <div className="h-6	text-xs text-slate-500">{createAt}</div>
        </div>
        <div className="flex justify-between items-center bg-white w-full p-3 text-slate-950 h-1/6 text-sm border-t">
          <div>{userId.slice(0, 4)}</div>
          <div>좋아요 : {likes}</div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
