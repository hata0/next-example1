import Link from "next/link";

export const Top = () => {
  return (
    <div>
      <div>hello</div>
      <Link href="/posts" className="text-blue-500">
        投稿一覧
      </Link>
    </div>
  );
};
