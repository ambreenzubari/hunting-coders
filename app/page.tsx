import Head from "next/head";
import Link from "next/link";
import { FaNewspaper } from "react-icons/fa";

export const metadata = {
  title: "NEXT JS PAGE",
  description: "My Page Description",
  icons: {
    icon: "/icon.png", // Make sure the path is correct
  },
  // Add keywords for SEO
  keywords: "Next.js, SEO, JavaScript, Web Development, Coding Tutorials",
  // Open Graph meta tags for social sharing
  openGraph: {
    title: "NEXT JS PAGE - Empowering Developers",
    description:
      "Learn Next.js with our comprehensive tutorials and coding guides.",
    url: "https://yourwebsite.com", // Your website URL
    images: [
      {
        url: "/images/og-image.png", // Replace with an actual image
        width: 800,
        height: 600,
        alt: "NEXT JS PAGE",
      },
    ],
    type: "website",
  },
  // Twitter card metadata for better visibility on Twitter
  twitter: {
    card: "summary_large_image",
    title: "NEXT JS PAGE - Empowering Developers",
    description:
      "Learn Next.js with our comprehensive tutorials and coding guides.",
    images: ["/images/twitter-card-image.png"], // Replace with a valid image path
  },
  // Canonical URL to avoid duplicate content issues
  alternates: {
    canonical: "https://yourwebsite.com", // Add your actual site URL
  },
};

export default async function Home(props: any) {
  const response = await fetch("http://localhost:3000/api/getAllBlogsData", {
    cache: "no-store",
  });
  const blogs = await response.json();

  // Get only the first 3 blogs
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <div>
      <Head>
        <title>Hunting Coder</title>
        <meta
          name="description"
          content="Hunting Coder - A blog for hunting coders by a hunting coder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-24 px-6 text-center">
          <div className="absolute inset-0">
            <img
              src="/coder.jpg" // Replace with your image path
              alt="Hero Image"
              className="object-cover w-full h-full absolute inset-0 opacity-30"
            />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              Hunting Coder
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              A blog for hunting coders by a hunting coder
            </p>
            <Link href="/about">
              <span className="bg-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-400 transition duration-300 ease-in-out cursor-pointer">
                Learn More
              </span>
            </Link>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-gray-900 text-center">
              Featured Blogs
            </h2>
            <ul className="space-y-8">
              {featuredBlogs.map((blog: any) => (
                <li
                  key={blog.id}
                  className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full">
                        <FaNewspaper className="text-3xl" />
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6 flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">
                        <Link
                          href={`/blogpost/${blog.slug}`}
                          className="hover:text-blue-600 transition-colors duration-300"
                        >
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="text-gray-700 mb-4">{blog.metaDesc}</p>
                      <div className="flex justify-end">
                        <Link
                          href={`/blogpost/${blog.slug}`}
                          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-500 transition-colors duration-300"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-block bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
              >
                View All Blogs
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
