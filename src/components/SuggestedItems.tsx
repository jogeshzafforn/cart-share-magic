
import React from "react";
import FoodItem from "./FoodItem";

interface SuggestedItemsProps {
  addToCart: (item: any) => void;
}

const SuggestedItems: React.FC<SuggestedItemsProps> = ({ addToCart }) => {
  const suggestedItems = [
    {
      id: "item1",
      name: "Dragon Chicken",
      price: 309,
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      isVeg: false
    },
    {
      id: "item2",
      name: "Chicken Noodles",
      price: 309,
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      isVeg: false
    },
    {
      id: "item3",
      name: "Spicy Fried Chicken",
      price: 309,
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      isVeg: false
    },
    {
      id: "item4",
      name: "Chilli Chicken",
      price: 309,
      image: "https://images.unsplash.com/photo-1633237308525-cd587cf71926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      isVeg: false
    },
    {
      id: "item5",
      name: "Curd Rice",
      price: 178,
      image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      isVeg: true
    }
  ];

  return (
    <div className="bg-white rounded-lg p-4 mb-4 shadow">
      <h2 className="text-lg font-semibold text-gray-500 mb-4">COMPLETE YOUR MEAL</h2>
      <div className="grid grid-cols-5 gap-4">
        {suggestedItems.map((item) => (
          <FoodItem 
            key={item.id} 
            item={item} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestedItems;
