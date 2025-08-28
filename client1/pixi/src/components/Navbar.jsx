
// // src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Home, Compass, FileText, PlusSquare, Star, LogIn, LogOut } from "lucide-react";

// Define navigation links in a single, manageable array of objects
const navLinks = [
  { title: "Home", path: "/", icon: <Home size={18} /> },
  { title: "Browse", path: "/browse", icon: <Compass size={18} /> },
  { title: "Create", path: "/create", icon: <PlusSquare size={18} /> },
  { title: "Docs", path: "/docs", icon: <FileText size={18} /> },
  { title: "Featured", path: "/featured", icon: <Star size={18} /> },
];

export default function Navbar({setIsAuthenticated , isAuthenticated}) {
  const [isOpen, setIsOpen] = useState(false);
  const [userdata, setUserData] = useState(null);

  const navigate = useNavigate();

  // Load user data from local storage on component mount and whenever auth state changes
  useEffect(() => {
    try {
      const data = localStorage.getItem('user-info');
      if (data) {
        setUserData(JSON.parse(data));
      } else {
        setUserData(null);
      }
    } catch (error) {
      console.error("Failed to parse user info from local storage:", error);
      setUserData(null);
    }
  }, [isAuthenticated]);

  // Toggle the mobile navigation menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("user-info");
    setUserData(null);
    setIsAuthenticated(false);
    navigate("/login");
  };
  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl ">
        <div
          className="flex items-center justify-between px-6 py-3 rounded-full border border-white/20
                      bg-black/30 backdrop-blur-lg shadow-lg"
        >
          {/* Left side: Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 -960 960 960"
                width="28px"
                fill="#e3e3e3"
              >
                <path d="M216-176q-45-45-70.5-104T120-402q0-63 24-124.5T222-642q35-35 86.5-60t122-39.5Q501-756 591.5-759t202.5 7q8 106 5 195t-16.5 160.5q-13.5 71.5-38 125T684-182q-53 53-112.5 77.5T450-80q-65 0-127-25.5T216-176Zm112-16q29 17 59.5 24.5T450-160q46 0 91-18.5t86-59.5q18-18 36.5-50.5t32-85Q709-426 716-500.5t2-177.5q-49-2-110.5-1.5T485-670q-61 9-116 29t-90 55q-45 45-62 89t-17 85q0 59 22.5 103.5T262-246q42-80 111-153.5T534-520q-72 63-125.5 142.5T328-192Zm0 0Zm0 0Z" />
              </svg>
            </span>
            <h1 className="font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg">
              Pixicon
            </h1>
          </Link>

          {/* Center: Desktop Links */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 text-white font-medium hover:text-purple-400 transition-colors duration-300"
                >
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Right side: User profile or login button */}
          <div className="hidden lg:flex items-center">
            {userdata ? (
              <div className="flex items-center space-x-3 text-white">
                <img
                  src={userdata.image || 'https://placehold.co/40x40/555/FFF?text=User'}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full border-2 border-purple-400"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/555/FFF?text=User"; }}
                />
                <span className="font-medium text-sm">
                  {userdata.name ? userdata.name.split(' ')[0] : 'User'}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold
                             bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold text-white
                           bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
              >
                <LogIn size={16} />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu (Now fixed) */}
      {isOpen && (
        <div className="fixed top-24 w-full lg:hidden px-6 py-4 rounded-2xl border border-white/20 bg-black/30 backdrop-blur-lg shadow-lg z-40">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.path}
                  className="flex items-center gap-3 text-white font-medium hover:text-purple-400 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10">
              {userdata ? (
                <div className="flex items-center space-x-3 text-white">
                  <img
                    src={userdata.image || 'https://placehold.co/40x40/555/FFF?text=User'}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full border-2 border-purple-400"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/555/FFF?text=User"; }}
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">{userdata.name ? userdata.name.split(' ')[0] : 'User'}</span>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-1 text-xs text-red-400 mt-1"
                    >
                      <LogOut size={14} />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-3 text-white font-medium hover:text-purple-400 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
