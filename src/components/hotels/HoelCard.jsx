
import React from "react";
import { MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function HotelCard({hotel}) {
  const navigate=useNavigate();
  const  handleViewDetails=(()=>{
    navigate("/hoteldetails")


  });
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300" >

      {/* Hotel Image */}
      <div className="relative" onClick={handleViewDetails}>
        <img
          // src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          src={hotel.img}
          alt="Hotel"
          className="w-full h-52 object-cover"
        />

        <span className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Available
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5">

        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            {hotel.name}
          </h2>

          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-semibold">{hotel.rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500 mt-2">
          <MapPin size={16} />
          <span className="text-sm">{hotel.location}</span>
        </div>

        <p className="text-gray-600 text-sm mt-4">
          {/* Experience luxury and comfort with premium rooms
          and excellent hospitality. */}
          {hotel.details}
        </p>

        {/* Price and Button */}
        <div className="flex justify-between items-center mt-5">
          <div>
            <span className="text-2xl font-bold text-green-600">
              {/* ₹2,499 */}
              {hotel.price}
            </span>
            <span className="text-gray-500 text-sm"> / night</span>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default HotelCard;
