import React from "react";
import { Home,Search,BedDouble } from "lucide-react";

function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-gray-950/95 background-blur-md text-white shadow-2xl shadow-gray-950/70 border-h border-green ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer ">
          <BedDouble className="w-8 h-8 text-green-800 drop-shadow-lg"/>
          <h1 className="text-3xl font-extrabold tracking-widest uppercase">stay<span className="text-green-300" >pulse</span></h1>
        </div>
        
        <div className="flex items-center mx-10 bg-gray-800 rounded-lg border border-gray-700 px-3 focus-within:border-green-400">

  <input
    type="text"
    placeholder="Search hotels..."
    className="bg-transparent text-white px-2 py-2 outline-none w-64 placeholder-gray-400"
  />

  <Search className="w-5 h-5 text-green-300 cursor-pointer" />

</div>
        </div>
       
      </header>
    </>
  );
}

export default Navbar;
