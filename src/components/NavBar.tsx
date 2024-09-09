import logo from "../assets/logos/logo.png";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }): string =>
    isActive ? "text-black hover:text-black" : "text-gray-500 hover:text-black";

  return (
    <div>
      <nav className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-center">
            <div className="flex flex-none items-center justify-center">
              <NavLink className="flex items-center mr-4" to="/">
                <img
                  className="h-10 w-auto"
                  src={logo}
                  alt="BAIC - Your Wish - Our Way"
                />
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-4 text-sm">
                  <NavLink className={linkClass} to="/Vehicles">
                    VEHICLES
                  </NavLink>
                  <NavLink className={linkClass} to="/jobs">
                    FIND US
                  </NavLink>
                  <NavLink className={linkClass} to="/add-job">
                    TEST DRIVE
                  </NavLink>
                  <NavLink className={linkClass} to="/add-job">
                    BUY NOW
                  </NavLink>
                  <NavLink className={linkClass} to="/add-job">
                    OFFER
                  </NavLink>
                  <NavLink className={linkClass} to="/add-job">
                    FIND A DRIVER
                  </NavLink>
                  <NavLink className={linkClass} to="/add-job">
                    SERVICE
                  </NavLink>
                  <NavLink className={linkClass} to="/add-job">
                    SPARE PARTS
                  </NavLink>
                  <NavLink className={linkClass} to="/add-job">
                    ABOUT US
                  </NavLink>
                  <NavLink className={linkClass} to="/add-job">
                    العربية
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
