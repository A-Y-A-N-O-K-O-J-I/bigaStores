import techTips from "../data/tech"; 
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"; 
import FirstSection from "../components/FirstSection";
import { Link } from "react-router-dom"; // Use Link for client-side routing

// Utility function to convert titles to slug format
function convertToSlug(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')  // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '')  // Remove non-alphanumeric characters
    .replace(/\-\-+/g, '-')  // Replace multiple hyphens with one
    .trim('-');  // Trim any trailing hyphens
}

export default function AdviceTips() {
  return (
    <>
      <NavBar />
      <FirstSection title="Tips And Advice for your Devices" content="tips" />
      <div className="flex min-h-screen flex-col space-y-5 items-center">
        <h2 className="text-blue-500 text-xl">- Tech Tips -</h2>
        <div className="grid md:grid-cols-3 gap-6 px-3 grid-rows-1">
          {techTips.map((tips) => {
            // Convert the title to slug format for SEO-friendly URL
            const slug = convertToSlug(tips.title);
            
            return (
              <Link key={tips.title} to={`/article/${slug}`} className="relative h-[180px] w-[200px]">
                <img
                  src={tips.image}
                  alt={`Image for ${tips.title}`} // Add meaningful alt text for SEO and accessibility
                  className="absolute top-0 left-0 rounded-3xl h-[100px] w-[200px] object-cover"
                />
                <div className="absolute top-14 left-0 bg-white shadow-md rounded-3xl h-[100px] w-[200px] flex items-center justify-center">
                  <h2 className="text-[#898989] text-center text-sm">{tips.title}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
