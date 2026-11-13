
import React from "react";

function HotelPolicies() {
  const policies = [
    {
      title: "Check-in",
      description: "From 12:00 PM"
    },
    {
      title: "Check-out",
      description: "Until 11:00 AM"
    },
    {
      title: "Cancellation",
      description: "Cancellation policies depend on the selected booking plan."
    },
    {
      title: "Pets",
      description: "Please contact the property before bringing pets."
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-5">Hotel Policies</h2>

      <div className="space-y-4">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between gap-2 border-b border-gray-200 pb-4"
          >
            <h3 className="font-semibold">{policy.title}</h3>
            <p className="text-sm text-gray-600 sm:max-w-md">
              {policy.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelPolicies;
