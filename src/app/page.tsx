import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold text-gray-800">환영합니다</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <HomeCard
          href="/observer"
          title="Observer"
          description="Observer 페이지로 이동합니다."
          color="bg-blue-500"
        />
        <HomeCard
          href="/products"
          title="제품"
          description="제품 목록 페이지로 이동합니다."
          color="bg-green-500"
        />
        <HomeCard
          href="/contact"
          title="연락처"
          description="연락처 페이지로 이동합니다."
          color="bg-purple-500"
        />
        <HomeCard
          href="/"
          title="홈"
          description="현재 페이지입니다."
          color="bg-gray-500"
        />
      </div>
    </div>
  );
}

interface HomeCardProps {
  href: string;
  title: string;
  description: string;
  color: string;
}

const HomeCard = ({ href, title, description, color }: HomeCardProps) => (
  <Link
    href={href}
    className={`${color} hover:opacity-90 transition-opacity duration-200 p-6 rounded-lg shadow-md text-white`}
  >
    <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
    <p>{description}</p>
  </Link>
);
