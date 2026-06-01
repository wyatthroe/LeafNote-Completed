import React from "react";

const EmptyCard = ({ imgSrc = "/notes.jpg", message }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      <p className="w-4/5 sm:w-1/2 text-sm sm:text-base font-medium leading-7 text-[#1E239B]">
        <span className="block text-[#16A34A] font-semibold text-lg mb-1">
          Nothing here yet
        </span>
        <span className="text-[#B45309]">
          {message ||
            "Start by adding your first note -- your ideas need a place to grow!"}
        </span>
      </p>

      <p className="mt-3 text-xs text-[#64748B italic">
        Click the <span className="text-[#16A34A] font-semibold">'+'</span>{" "}
        button below to create a new Note!
      </p>
    </div>
  );
};

export default EmptyCard