import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="page-width section-space flex-1">
      <p className="eyebrow text-neutral-500">404 / Not found</p>
      <h1 className="section-heading mt-7">This page isn’t here.</h1>
      <p className="mt-6 text-neutral-600">
        Explore the project archive or return to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/projects" className="button button-primary">
          View projects
        </Link>
        <Link href="/" className="button button-secondary">
          Home
        </Link>
      </div>
    </main>
  );
}
