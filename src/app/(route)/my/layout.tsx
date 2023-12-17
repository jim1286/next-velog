"use client";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen px-40 overflow-auto">{children}</div>
  );
}
