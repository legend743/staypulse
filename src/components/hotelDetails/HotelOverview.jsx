
import React from "react";
import {
  BedDouble,
  Bath,
  Trees,
  MapPin,
  ShieldCheck,
  Users
} from "lucide-react";

function HotelOverview({ hotel }) {
  const highlights = [
    {
      icon: BedDouble,
      title: "Cozy Bedrooms",
      description: "Comfortable rooms"
    },
    {
      icon: Bath,
      title: "3 Bathrooms",
      description: "Clean and spacious"
    },
    {
      icon: Trees,
      title: "Garden",
      description: "Beautiful outdoor space"
    },
    {
      icon: MapPin,
      title: "Easy Location",
      description: "Convenient location"
    }
  ];

  return (
    <div className="space-y-8">

      {/* Property Highlights */}
      <div>
        <h2 className="text-xl font-bold mb-4">Property Highlights</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-4 text-center"
              >
                <Icon className="mx-auto text-indigo-600 mb-2" size={24} />
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* About Hotel */}
      <div>
        <h2 className="text-xl font-bold mb-3">About this place</h2>

        <p className="text-gray-600 leading-7">
          {hotel.description}
        </p>

        <p className="text-gray-600 leading-7 mt-3">
          Experience exceptional hospitality, beautifully designed
          rooms and a relaxing atmosphere. Whether you are travelling
          with family or friends, enjoy a comfortable stay with
          excellent facilities and convenient access to nearby attractions.
        </p>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex gap-3 items-start">
          <ShieldCheck className="text-indigo-600" />
          <div>
            <h3 className="font-semibold">Safe and Secure</h3>
            <p className="text-sm text-gray-500">
              Comfortable and secure accommodation.
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <Users className="text-indigo-600" />
          <div>
            <h3 className="font-semibold">Family Friendly</h3>
            <p className="text-sm text-gray-500">
              Suitable for families and groups.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HotelOverview;
