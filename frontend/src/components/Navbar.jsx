import { useContext } from "react";
import logo from "./../assets/prompt_pixel_1.png";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// Import individual assets directly
import credit_star from "./../assets/credit_star.svg";
import profile_icon from "./../assets/profile_icon.png";

const Navbar = () => {
  const { user, setShowLogin } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <nav className="navbar ">
      <div className="flex items-center justify-between py-4 ">
        <Link to="/">
          <img
            src={logo}
            alt="PromptPixels Logo"
            className="w-28 sm:w-32 lg:w-40"
          />
        </Link>

        <div>
          {user ? (
            <div className="flex items-center gap-2 sm:gap-3 ">

              {/* Buy credits button starts herer */}
              <button
                onClick={() => navigate("/buy-credits")}
                className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700"
              >
                <img className="w-5 " src={credit_star} alt="Credit star" /> {/* credit star img in credit button */}
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  Credits left : 50
                </p>
              </button> 
              {/* Buy credits button ends here */}
              <p className="text-gray-600 max-sm:hidden pl-4">Hi, Krish</p>
              <div className="relative group">
                <img
                  src={profile_icon}
                  alt="Profile"
                  className="w-10 drop-shadow"
                />
                <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                  <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                    <li className="py-1 px-2 cursor-pointer pr-10">logout</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-6">
              <p
                onClick={() => navigate("/buy-credits")}
                className="cursor-pointer"
              >
                Pricing
              </p>
              <button onClick={() => setShowLogin(true)} className="bg bg-zinc-800 text-white px-7 py-2 sm:px-10 md:px-6 lg:px-6 text-sm rounded-full">
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
