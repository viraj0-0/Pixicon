// client1/pixi/src/pages/Browse.jsx
import React, { useState, useMemo, useEffect } from "react";
import IconCard from "../components/IconCard";
import allIcons from "../assets/allicon.json";
import categorizedIcons from "../assets/icons.json";
import CategorySelector from "../components/CategorySelector";
import DotGrid from "../assets/Dotgrid";

const categories = Object.keys(categorizedIcons);

export default function Browse() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [savedIcons, setSavedIcons] = useState([]); // New state for saved icons

  // Fetch all saved icons once on component mount
  useEffect(() => {
    const fetchSavedIcons = async () => {
      const userData = JSON.parse(localStorage.getItem("user-info"));
      if (!userData || !userData.userId) {
        return;
      }
      try {
        const response = await fetch(
          `https://pixicon-backend.onrender.com/api/icons/${userData.userId}`
        );
        const data = await response.json();
        const iconNames = data.map((icon) => icon.iconName);
        setSavedIcons(iconNames);
      } catch (error) {
        console.error("Failed to fetch saved icons:", error);
      }
    };
    fetchSavedIcons();
  }, []);

  const filteredIcons = useMemo(() => {
    let iconsToFilter =
      selectedCategory === "all"
        ? allIcons
        : categorizedIcons[selectedCategory] || [];

    if (searchTerm.trim() !== "") {
      iconsToFilter = iconsToFilter.filter((icon) =>
        icon.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );
    }
    return iconsToFilter;
  }, [searchTerm, selectedCategory]);

  return (
    <>
  <div style={{ position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '-1' }}>
  <DotGrid
    dotSize={5}
    gap={15}
    baseColor="#271E37"
    activeColor="#6A0DAD"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}

  />
</div>
    <div className=" min-h-screen text-white px-4 sm:px-6 lg:px-8">
      <div className="pt-28">
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Browse Icons</h1>
          <p className="text-lg text-neutral-400 mb-8">
            Find the perfect icon from our extensive library.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search icons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-xl bg-white/5 border border-white/10 
                 backdrop-blur-md text-white placeholder-white/40
                 focus:outline-none focus:ring-2 focus:ring-purple-500/60 
                 shadow-sm transition"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </div>

            {/* Category Select */}
            <div className="relative w-full md:w-64">
              {/* <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 appearance-none rounded-xl bg-white/5 border border-white/10
                 backdrop-blur-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500/60
                 shadow-sm transition"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    className="capitalize bg-neutral-900 text-white"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select> */}
              <CategorySelector
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
  categories={categories}
/>

              

              {/* Custom Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {filteredIcons.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
              {filteredIcons.map((icon) => (
                <IconCard key={icon} iconName={icon} savedIcons={savedIcons} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-neutral-500">No icons found.</p>
              <p className="text-neutral-600">
                Try adjusting your search or filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
