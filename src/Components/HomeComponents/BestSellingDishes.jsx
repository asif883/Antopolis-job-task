"use client";
import React, { useEffect, useState } from "react";
import FoodCard from "../FoodCard";

const BestSellingDishes = () => {
  const [visibleForm, setVisibleForm] = useState(null)
  const [allFood, setAllFood] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleAddFood = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const category = e.target.category.value;
    const image = e.target.image.value;

    const productDetails = { name, category, image };

    try {
      const res = await fetch("/api/add-food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productDetails),
      });

      if (res.ok) {
        alert("Product Added successfully");
        setVisibleForm(null)
        e.target.reset()
        fetchData()
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetch("/api/all-food");
      const data = await res.json()
      setAllFood(data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchData()
  }, []);


  const handleCategory = async (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    const newCategory = {category}

    try {
      const res = await fetch("/api/add-category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });

      if (res.ok) {
        alert("Category Added successfully");
        setVisibleForm(null)
        e.target.reset()
      }
    } catch (error) {
      console.log(error);
    }

  }



  const filteredFood =
    selectedCategory === "All"
      ? allFood
      : allFood.filter((food) => food.category.toLowerCase() === selectedCategory.toLowerCase())

  return (
    <div className="my-16 max-w-7xl mx-auto px-3 md:px-16">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
          Our Best Selling Dishes
        </h1>
        <p className="text-md max-w-2xl mx-auto mt-2.5 text-gray-700 font-semibold">
          Discover our most loved flavors! Handpicked by our customers, these
          best-selling dishes blend mouth-watering taste with unforgettable
          satisfaction.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex gap-3 flex-col md:flex-row items-center justify-between mt-8">
        <div className="flex items-center gap-3">
          {["All", "Breakfast", "Lunch", "Dinner"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`border px-3 py-1.5 rounded-3xl font-semibold cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gray-800 text-white border-gray-800"
                  : "text-gray-900 border-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

       
        <div className="flex items-center gap-3">
          <button
            onClick={() => setVisibleForm((prev) => (prev === "food" ? null : "food"))}
            className="border border-gray-800 px-3 py-1.5 rounded-3xl text-white bg-gray-800 font-semibold cursor-pointer"
          >
            Add Food
          </button>
          <button
            onClick={() => setVisibleForm((prev) => (prev === "category" ? null : "category"))}
            className="border border-gray-800 px-3 py-1.5 rounded-3xl text-white bg-gray-800 font-semibold cursor-pointer"
          >
            Add Category
          </button>
        </div>
      </div>

      {/* Add Food Form */}
      {visibleForm === "food" && (
        <div className="mt-8 max-w-lg mx-auto shadow-2xl rounded-2xl relative z-10">
          <h1 className="text-center pt-4 font-bold text-xl">Add Food</h1>
          <form onSubmit={handleAddFood} className="flex flex-col gap-3 max-w-xs mx-auto py-8">
            <input className="p-2 border" name="name" type="text" placeholder="Product Name" required />
            <input className="p-2 border" type="text" name="category" placeholder="Food Category" required />
            <input className="p-2 border" type="text" name="image" placeholder="Image URL" required />
            <input type="submit" value="Submit" className="bg-gray-800 text-white rounded-4xl p-1.5" />
          </form>
        </div>
      )}

      {/* Add Category Form */}
      {visibleForm === "category" && (
        <div className="mt-8 max-w-lg mx-auto shadow-2xl rounded-2xl relative z-10">
          <h1 className="text-center pt-4 font-bold text-xl">Add Category</h1>
          <form onSubmit={handleCategory} className="flex flex-col gap-3 max-w-xs mx-auto py-8">
            <input className="p-2 border" name="category" type="text" placeholder="Category" required />
            <input type="submit" value="Save" className="bg-gray-800 text-white rounded-4xl p-1.5" />
          </form>
        </div>
      )}

      {/* Food Card Grid */}
      <div className="mt-8 grid gap-3 md:gap-8 grid-cols-2 md:grid-cols-3">
        {filteredFood?.map((food) => (
          <FoodCard key={food._id} {...food} />
        ))}
      </div>
    </div>
  );
};

export default BestSellingDishes;
