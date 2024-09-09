interface CarListingProps {
  imageSrc: string;
  carName: string;
}

const CarListing: React.FC<CarListingProps> = ({ imageSrc, carName }) => {
  return (
    <div className="bg-white shadow-lg p-4 flex flex-col items-center">
      <img src={imageSrc} alt={carName} className="w-full object-contain" />

      <h3 className="mt-4 text-lg font-semibold text-slate-700">{carName}</h3>

      <button className="mt-4 py-2 px-4 w-48 h-10 border border-slate-700 bg-white text-slate-700 rounded-lg hover:bg-slate-300">
        View More
      </button>
    </div>
  );
};

export default CarListing;
