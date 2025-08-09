import SharedHero from "@/components/portfolio/SharedHero";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
  
  <SharedHero title = ""/>
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-6xl font-bold mb-4 text-red-600">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-4">
        {`The page you're looking for does not exist or has been moved.`}
      </p>
      <Link
        href="/"
        className="text-cyan underline font-medium hover:text-cyan-700"
      >
        Go back home
      </Link>
    </div>
    </>
  );
}
