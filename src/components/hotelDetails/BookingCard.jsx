
import React, { useState } from "react";
import { CalendarDays, Users, ShieldCheck } from "lucide-react";

function BookingCard({ price }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const difference = Math.ceil(
      (end - start) / (1000 * 60 * 60 * 24)
    );

    return difference > 0 ? difference : 1;
  };

  const nights = calculateNights();
  const total = price * nights;

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      alert("Check-out must be after check-in.");
      return;
    }

    alert(`Booking request for ${guests} guests and ${nights} nights.`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-5 sticky top-24">

      {/* Price */}
      <p className="text-sm text-gray-500">Starting from</p>

      <h2 className="text-3xl font-bold text-gray-900 mt-1">
        ₹{price.toLocaleString("en-IN")}
        <span className="text-sm font-normal text-gray-500">
          / night
        </span>
      </h2>

      <div className="border-t border-gray-200 my-5" />

      {/* Check In */}
      <label className="block text-sm font-semibold mb-2">
        Check-in
      </label>

      <div className="flex items-center border border-gray-300 rounded-lg px-3 mb-4">
        <CalendarDays size={18} className="text-indigo-600" />

        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full p-3 outline-none text-sm bg-transparent"
        />
      </div>

      {/* Check Out */}
      <label className="block text-sm font-semibold mb-2">
        Check-out
      </label>

      <div className="flex items-center border border-gray-300 rounded-lg px-3 mb-4">
        <CalendarDays size={18} className="text-indigo-600" />

        <input
          type="date"
          min={checkIn || undefined}
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full p-3 outline-none text-sm bg-transparent"
        />
      </div>

      {/* Guests */}
      <label className="block text-sm font-semibold mb-2">
        Guests
      </label>

      <div className="flex items-center border border-gray-300 rounded-lg px-3 mb-5">
        <Users size={18} className="text-indigo-600" />

        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full p-3 outline-none text-sm bg-transparent"
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5 Guests</option>
          <option value="6">6 Guests</option>
        </select>
      </div>

      {/* Continue */}
      <button
        onClick={handleBooking}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
      >
        Continue
      </button>

      {/* Price Summary */}
      <div className="mt-6">
        <h3 className="font-bold mb-4">Pricing Summary</h3>

        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span>
            ₹{price.toLocaleString("en-IN")} × {nights} night(s)
          </span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>

        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span>Cleaning fee</span>
          <span>₹0</span>
        </div>

        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span>Platform fee</span>
          <span>₹0</span>
        </div>

        <div className="border-t border-gray-200 pt-4 flex justify-between font-bold">
          <span>Total</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-5 text-xs text-green-600">
        <ShieldCheck size={16} />
        Secure booking
      </div>

    </div>
  );
}

export default BookingCard;
