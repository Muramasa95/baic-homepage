import NewsListing from "./NewsListing";
import SocialIcons from "./SocialIcons";

const NewsListings: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen py-8">
      <span className="text-gray-700 text-4xl font-bold mb-4">Latest News</span>
      <span className="text-gray-700 mb-8">Stay tuned for our latest news</span>
      <div className="p-8">
        <div className="grid grid-cols-1 gap-6 items-center">
          <NewsListing
            imageSrc={"/src/assets/news/SONG1710-opq813202611-768x512.jpg"}
            title={"2024 Beijing Auto Show"}
            subtitle={"Showcasing Baic Newest BJ Models"}
            link={"/news1"}
          />
        </div>
        <div className="py-12 flex flex-col items-center justify-center">
          <span className="text-gray-700 text-4xl font-bold mb-4">
            Lat's Connect
          </span>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default NewsListings;
