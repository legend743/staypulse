
import React from "react";
import {
  Wifi,
  Car,
  Waves,
  Utensils,
  Snowflake,
  Tv,
  Dumbbell,
  Coffee
} from "lucide-react";

function HotelAmenities() {
  const amenities = [
    { icon: Wifi, name: "Free Wi-Fi" },
    { icon: Car, name: "Free Parking" },
    { icon: Waves, name: "Swimming Pool" },
    { icon: Utensils, name: "Restaurant" },
    { icon: Snowflake, name: "Air Conditioning" },
    { icon: Tv, name: "Smart TV" },
    { icon: Dumbbell, name: "Fitness Center" },
    { icon: Coffee, name: "Breakfast" }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-5">
        Available Amenities
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {amenities.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-400 transition"
            >
              <Icon size={22} className="text-indigo-600 shrink-0" />
              <span className="text-sm font-medium text-gray-700">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HotelAmenities;
