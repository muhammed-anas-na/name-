"use client";
import Link from "next/link";

function Card() {
  return (
    <Link href={'/category/1234'} className="border w-auto mt-5 p-2">
      <div>
        <img
          className="w-52 h-52 object-cover rounded-lg"
          src="banner01.jpg"
          alt="banner01"
        />
      </div>
      <h1 className="font-semibold">Business Name</h1>
    </Link>
  );
}

export default Card;
