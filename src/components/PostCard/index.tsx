type Props = {
  title: string;
  userId: number;
  likes: number;
  createAt: string;
  subTitle?: string;
};

function PostCard({ title, userId, likes, subTitle, createAt }: Props) {
  return (
    <div className="w-1/3 h-96 p-4 ">
      <div className="w-full h-full border cursor-pointer">
        <div className="bg-black w-full h-2/6"></div>
        <div className="bg-white flex flex-col p-3 w-full h-3/6">
          <div className="h-6	text-slate-950">{title}</div>
          <div className="flex-1 text-slate-950">{title}</div>
          <div className="h-6	text-xs text-slate-500">{createAt}</div>
        </div>
        <div className="bg-white w-full p-3 text-slate-950 h-1/6 text-sm border-t">
          {userId}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
