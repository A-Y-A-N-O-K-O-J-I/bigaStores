import { useParams } from "react-router-dom";
import techTips from "../data/tech"; // Import the techTips data

export default function ArticlePage() {
  const { slug } = useParams(); // Get the slug from the URL
  const article = techTips.find(
    (tip) => convertToSlug(tip.title) === slug // Match the slug to the article's title
  );

  if (!article) {
    return (
      <div className="h-screen bg-gray-900 flex flex-col justify-center items-center text-white">
        <div className="text-3xl font-semibold mb-5">Article Not Found</div>
        <button className="bg-blue-600 px-6 py-3 mt-10 text-white rounded-full shadow-lg hover:bg-blue-700">
          <a href="/">Go Back To Home</a>
        </button>
      </div>
    );
  }

  return (
	  <article>
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-5">{article.title}</h1>
        
        {/* Display the description as the main content */}
        <div className="text-lg text-gray-800 space-y-4">
          <p>{article.description}</p> {/* Treat description as content */}
        </div>
      </div>
    </div>
    </article>
  );
}

// Utility function to convert titles to slug format
function convertToSlug(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '') // Remove non-alphanumeric characters
    .replace(/\-\-+/g, '-'); // Replace multiple hyphens with a single one
}
