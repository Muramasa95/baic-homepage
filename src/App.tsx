import { BrowserRouter as Router } from "react-router-dom";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Slideshow from "./components/Slideshow";
import HomeCards from "./components/HomeCards";
import CarListings from "./components/CarListings";
import NewsListings from "./components/NewsListings";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomBar";
import ScrollToTopButton from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <TopBar />
      <NavBar />
      <Slideshow />
      <HomeCards />
      <CarListings />
      <NewsListings />
      <Footer />
      <BottomBar />
      <ScrollToTopButton />
    </Router>
  );
};

export default App;
