import { Link } from "react-router-dom";

interface NewsListingProps {
  link: string;
  imageSrc: string;
  title: string;
  subtitle: string;
}

const NewsListing: React.FC<NewsListingProps> = ({
  link,
  imageSrc,
  title,
  subtitle,
}) => {
  return (
    <Link to={link} className="bg-white shadow-lg p-4 ">
      <img src={imageSrc} alt={title} className="w-full object-contain" />

      <h2 className="mt-4 text-xl font-bold text-slate-800 flex justify-center">
        {title}
      </h2>
      <h3 className="mt-4 text-xl text-slate-800 flex justify-center">
        {subtitle}
      </h3>
    </Link>
  );
};

export default NewsListing;
