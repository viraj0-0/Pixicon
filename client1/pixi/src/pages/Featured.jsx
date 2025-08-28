// client/src/pages/Featured.jsx
import React, { useState, useEffect } from "react";
import IconCard from "../components/IconCard";
import DotGrid from "../assets/Dotgrid";

export default function Featured() {
  const [featuredIcons, setFeaturedIcons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFeaturedIcons = async () => {
    const userData = JSON.parse(localStorage.getItem("user-info"));
    if (!userData || !userData.userId) {
      setError("Please log in to see your saved icons.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://pixicon-backend.onrender.com/api/icons/${userData.userId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch icons.");
      }
      const data = await response.json();
      setFeaturedIcons(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle icon removal
  const handleIconRemoved = (removedIconName) => {
    setFeaturedIcons((prevIcons) =>
      prevIcons.filter((icon) => icon.iconName !== removedIconName)
    );
  };

  useEffect(() => {
    fetchFeaturedIcons();
  }, []);

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
    <div className="pt-32 px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">
          Your Saved Icons
        </h1>
        <p className="text-base sm:text-lg text-neutral-400">
          A collection of your favorite icons.
        </p>
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-7xl mx-auto w-full">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : featuredIcons.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
            {featuredIcons.map((icon) => (
              <IconCard
                key={icon._id}
                iconName={icon.iconName}
                savedIcons={featuredIcons.map((i) => i.iconName)}
                onIconRemoved={handleIconRemoved}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg sm:text-xl text-neutral-500">
              You haven’t saved any icons yet.
            </p>
            <p className="text-sm sm:text-base text-neutral-600">
              Browse the library and click the save button to add some.
            </p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
