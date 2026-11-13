
import React, { useState } from "react";

import { MapPin, Star } from "lucide-react";
import HotelOverview from "../hotelDetails/HotelOverview";
import HotelReviews from "../hotelDetails/HotelReviews";
import HotelPolicies from "../hotelDetails/HotelPolicies";
import HotelGallery from "../hotelDetails/HotelGallery";
import BookingCard from "../hotelDetails/BookingCard";



const hotel = {
  name: "The Grand Residency",
  location: "Lucknow, Uttar Pradesh",
  description:
    "Enjoy comfortable rooms, beautiful interiors and premium hospitality. Experience a relaxing stay with excellent facilities and convenient access to nearby attractions.",
  rating: 4.8,
  likes: 245,
  reviews: 120,
  price: 2499,

  images: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd"
  ]
};

function HotelDetails() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Amenities",
    "Reviews",
    "Policies"
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <HotelOverview hotel={hotel} />;

      case "Amenities":
        return <HotelAmenities />;

      case "Reviews":
        return <HotelReviews hotel={hotel} />;

      case "Policies":
        return <HotelPolicies />;

      default:
        return <HotelOverview hotel={hotel} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">

      {/* Hotel Heading */}
      <div className="mb-6">

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {hotel.name}
        </h1>

        <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-500">

          <span className="flex items-center gap-1">
            <MapPin size={16} />
            {hotel.location}
          </span>

          <span>•</span>
          <span>6 Beds</span>
          <span>•</span>
          <span>3 Bedrooms</span>
          <span>•</span>

          <span className="flex items-center gap-1 text-yellow-600">
            <Star size={16} fill="currentColor" />
            {hotel.rating}
          </span>

          <span className="underline cursor-pointer">
            ({hotel.reviews} reviews)
          </span>

        </div>
      </div>

      {/* Image Gallery */}
      <HotelGallery images={hotel.images} />

      {/* Main Content + Booking Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

        {/* Left Content */}
        <div className="lg:col-span-2 min-w-0">

          {/* Tabs */}
          <div className="flex gap-7 overflow-x-auto border-b border-gray-200 mb-7">

            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap pb-3 text-sm font-medium transition ${
                  activeTab === tab
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-indigo-600"
                }`}
              >
                {tab}
              </button>
            ))}

          </div>

          {/* Selected Component */}
          <div>
            {renderTabContent()}
          </div>

        </div>

        {/* Right Booking Panel */}
        <div className="min-w-0">
          <BookingCard price={hotel.price} />
        </div>

      </div>

    </div>
  );
}

export default HotelDetails;
