import React from "react";

function Button({name}) {
  return (
    <>
      <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition">
        {name}
      </button>
    </>
  );
}

export default Button;
