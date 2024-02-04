import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-y-6 items-center">
      <h2 className="text-5xl font-semibold">404</h2>
      <p className="text-2xl">Page Not Found</p>
      <Link href="/" className="text-highlight underline">
        Return Home
      </Link>
    </div>
  );
}
