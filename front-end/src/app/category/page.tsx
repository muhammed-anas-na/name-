import Header from "../../Components/Header/page";
import Filterbar from "../../Components/FilterBar/page";
import Card from '../../Components/Card/page';
import Footer from '../../Components/Footer/page';
import React from "react";
import Pagination from "../../Components/pagination/page";

function CategoryPage() {
  let service = "Catering"
  return (
    <>
      <Header />
      <div className="relative">
        <img
          className="w-full h-96 object-cover"
          src={`${service}.jfif`}
          alt={`${service}.jfif`}
        />
        <h1 className="absolute inset-0 flex top-40 justify-center text-white font-extrabold text-2xl sm:text-4xl lg:text-5xl">
          {service}
        </h1>
      </div>
      <Filterbar/>
      
      <div className="flex justify-around flex-wrap sm:gap-10">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Pagination/>
      <Footer/>
    </>
  );
}

export default CategoryPage;
