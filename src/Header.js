import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center cursor-pointer">
            <img
              src="Group.svg"
              alt="SALOMO Logo"
              className="h-8 w-auto mr-2"
            />
            <span
              className="text-4xl "
              style={{ fontFamily: "'Hachi Maru Pop', cursive", color: "#FF6060" }}
            >
              SALOMO
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/home"
              className={`text-gray-700 hover:text-gray-900 ${
                isActive("/home") ? "text-green-600 font-semibold" : ""
              }`}
            >
              ホーム
            </Link>
            <Link
              to="/post"
              className={`text-gray-700 hover:text-gray-900 ${
                isActive("/post") ? "text-green-600 font-semibold" : ""
              }`}
            >
              投稿（お客様）
            </Link>
            <Link
              to="/requests"
              className={`text-gray-700 hover:text-gray-900 ${
                isActive("/requests") ? "text-green-600 font-semibold" : ""
              }`}
            >
              求人一覧 (美容師)
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/signup"
              className="bg-gradient-to-r from-green-400 to-blue-500 
                         hover:from-green-500 hover:to-blue-600
                         text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition"
            >
              無料で始める
            </Link>
            <Link
              to="/join"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition"
            >
              美容師として参加
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
