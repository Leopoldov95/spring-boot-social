import React from "react";
import Navbar from "../components/global/Navbar";
import Feed from "../components/home/Feed";

const Home = () => {
  return (
    <div>
      {/* Branding (For Mobile Only) */}
      <div className="text-colorPrimary text-xl mb-4 flex items-center gap-2">
        Spring <img className="w-4" src="/images/spring.svg" />
      </div>
      {/* Feed */}
      <Feed />
      {/* Navbar */}
    </div>
  );
};

export default Home;
