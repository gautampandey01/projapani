import React, { useState, useRef, useEffect } from "react";
import { User, LogOut } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Example user data—you can replace with real user state/props/context
  const user = {
    name: "123",
    email: "ASDASDAS966@gmail.com"
  };

  // Close the dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  const isActive = (path) => location.pathname === path;

  function handleLogout() {
    // Add your logout logic here!
    // Then redirect:
    navigate("/");
  }

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* Logo */}
<Link to="/home" className="flex items-center cursor-pointer">
  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-2">
    <span className="text-white text-sm font-bold">✕</span>
  </div>
  <span className="text-xl font-bold">SALOMO</span>
</Link>


          {/* Nav Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/home"
              className={`text-gray-700 hover:text-gray-900 ${isActive("/") ? "text-blue-600 bg-blue-50 px-3 py-1 rounded" : ""}`}
            >
              ホーム
            </Link>
            <Link
              to="/post"
              className={`text-gray-700 hover:text-gray-900 ${isActive("/post") ? "text-blue-600 bg-blue-50 px-3 py-1 rounded" : ""}`}
            >
              投稿（お客様）
            </Link>
            <Link
              to="/requests"
              className={`text-gray-700 hover:text-gray-900 ${isActive("/requests") ? "text-blue-600 bg-blue-50 px-3 py-1 rounded" : ""}`}
            >
              求人一覧
            </Link>
            <Link
              to="/info"
              className={`text-gray-700 hover:text-gray-900 ${isActive("/info") ? "text-blue-600 bg-blue-50 px-3 py-1 rounded" : ""}`}
            >
              会社情報
            </Link>
            <Link
              to="/contact"
              className={`text-gray-700 hover:text-gray-900 ${isActive("/contact") ? "text-blue-600 bg-blue-50 px-3 py-1 rounded" : ""}`}
            >
              お問い合わせ
            </Link>
          </div>

          {/* User Icon and Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center focus:outline-none"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              <User className="w-5 h-5 text-gray-600" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-60 bg-white rounded-xl shadow-lg border py-2 z-20">
                {/* User Info */}
                <div className="px-4 pt-3 pb-2">
                  <div className="font-semibold text-base">{user.name}</div>
                  <div className="text-gray-400 text-xs">{user.email}</div>
                </div>
                <hr className="my-1"/>
                {/* Profile */}
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50"
                  onClick={() => setDropdownOpen(false)}
                >
                  <User className="w-4 h-4" /> Profile
                </Link>
                {/* Log out */}
                <button
                  className="flex items-center gap-2 w-[90%] mx-auto mt-2 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-3 rounded-lg justify-center transition"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4" /> Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
