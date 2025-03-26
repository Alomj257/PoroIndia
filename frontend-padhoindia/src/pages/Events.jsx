import React, { useState, useEffect } from "react";

const Events = () => {
  const [text, setText] = useState("Loading...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setText("Coming Soon");
    }, 3000); // Switch text after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[30vh] bg-white">
      <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse transition-all duration-700">
        {text}
      </div>
    </div>
  );
};

export default Events;
