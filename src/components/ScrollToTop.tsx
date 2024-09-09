import { useState, useEffect } from "react";

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-transparent text-slate-800 text-bold p-3 rounded-full shadow-lg hover:bg-slate-500 focus:outline-none"
        ></button>
      )}
    </>
  );
};

export default ScrollToTopButton;
