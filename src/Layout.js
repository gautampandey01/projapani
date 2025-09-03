import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Spinner from "./Spinner"; // The spinner component you made

export default function Layout() {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white">
        {loading ? <Spinner /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
