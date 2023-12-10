"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  tabRoute: string;
  href: string;
  title: string;
}

function TabLink({ tabRoute, href, title }: Props) {
  const pathName = usePathname();
  const style = pathName.includes(tabRoute)
    ? { borderBottom: "2px solid red" }
    : undefined;

  return (
    <Link
      style={style}
      href={href}
      className="text-center text-xl text-black p-2 w-24"
    >
      {title}
    </Link>
  );
}

export default TabLink;
