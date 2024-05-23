import React from "react";
import Link from "next/link";

const cards = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link href="/bookDeets/1" className="hover: underline">
            Expound
          </Link>
        </div>
      </div>
    </div>
  );
};

export default cards;
