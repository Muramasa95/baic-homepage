import CarListing from "./CarListing";

const CarListings: React.FC = () => {
  return (
    <div className="bg-[url('/src/assets/background-banner.jpg')] bg-cover py-5">
      <span className="text-white text-4xl font-bold flex justify-center">
        OUR VEHICLES
      </span>
      <span className="text-white flex text-2xl justify-center">
        Baic Saudi
      </span>
      <div className="min-h-screen p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CarListing
            imageSrc="/src/assets/cars/U5-Homepage2.jpg"
            carName="UE PLUS"
          />
          <CarListing
            imageSrc="/src/assets/cars/D50-Homepage2.jpg"
            carName="BAIC D50"
          />
          <CarListing
            imageSrc="/src/assets/cars/X35-Homepage1.jpg"
            carName="BAIC X35"
          />
          <CarListing
            imageSrc="/src/assets/cars/X55-Home1.jpg"
            carName="BAIC X55"
          />
          <CarListing
            imageSrc="/src/assets/cars/X7-Homepage.jpg"
            carName="BAIC X7"
          />
          <CarListing
            imageSrc="/src/assets/cars/BJ40-Plus-Homepage.jpg"
            carName="BAIC BJ40 PLUS"
          />
          <CarListing
            imageSrc="/src/assets/cars/BJ40-C-Homepage3.jpg"
            carName="BAIC BJ40 C"
          />
          <CarListing
            imageSrc="/src/assets/cars/BJ40-Se-Homepage3.jpg"
            carName="BAIC BJ40 SE"
          />
          <CarListing
            imageSrc="/src/assets/cars/BJ40-f-Homepage3.jpg"
            carName="BAIC BJ40 F"
          />
          <CarListing
            imageSrc="/src/assets/cars/BJ40-S-Homepage5.jpg"
            carName="BAIC BJ40 S"
          />
          <CarListing
            imageSrc="/src/assets/cars/bj80-Homepage1.jpg"
            carName="BAIC BJ80"
          />
          <CarListing
            imageSrc="/src/assets/cars/BJ60-Homepage.jpg"
            carName="BAIC BJ60"
          />
        </div>
      </div>
    </div>
  );
};

export default CarListings;
