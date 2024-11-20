import React from "react";
import { House, ShoppingCart, Search, Heart, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="relative flex h-20 w-full">
      {/* Curved Background */}
      <div className="absolute bottom-0 left-1/2 flex h-16 w-full -translate-x-1/2 transform items-center justify-around rounded-md bg-neutral-100 shadow-md">
        {/* Home Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 shadow-lg transition-transform hover:scale-110">
          <House className="text-xl" />
        </div>
        {/* Cart Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 shadow-lg transition-transform hover:scale-110">
          <ShoppingCart className="text-xl" />
        </div>

        {/* Search Icon (Larger Circle) */}
        <div className="flex h-16 w-16 -translate-y-4 items-center justify-center rounded-full bg-white transition-transform">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-50 shadow-lg transition-transform hover:scale-110">
            <Search className="text-2xl" />
          </div>
        </div>

        {/* Heart Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 shadow-lg transition-transform hover:scale-110">
          <Heart className="text-xl" />
        </div>
        {/* User Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 shadow-lg transition-transform hover:scale-110">
          <User />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
