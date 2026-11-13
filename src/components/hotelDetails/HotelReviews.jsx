
import React from "react";
import { Star, UserRound } from "lucide-react";

function HotelReviews({ hotel }) {
  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      comment: "Excellent hotel! The rooms were clean and the staff was very helpful."
    },
    {
      name: "Priya Singh",
      rating: 4,
      comment: "Very comfortable stay. Great location and delicious food."
    },
    {
      name: "Aman Verma",
      rating: 5,
      comment: "Wonderful experience. Would definitely visit again!"
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-bold">Guest Reviews</h2>
        <span className="text-sm text-gray-500">
          ({hotel.reviews} reviews)
        </span>
      </div>

      <div className="space-y-5">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-5">

            <div className="flex items-center gap-3">
              <div className="bg-indigo-100 rounded-full p-2">
                <UserRound className="text-indigo-600" />
              </div>

              <div>
                <h3 className="font-semibold">{review.name}</h3>

                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="currentColor"
                      className="text-yellow-500"
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-6 mt-3">
              {review.comment}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelReviews;
