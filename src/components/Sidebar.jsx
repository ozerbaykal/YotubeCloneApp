import React, { useContext } from "react";
import { categories } from "../constants";
import { Link } from "react-router-dom";
import { VideoContext } from "../context/videoContext";

const Sidebar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(VideoContext);

  return (
    <div className="flex flex-col p-1 md:p-4 ">
      {categories.map((item, i) => (
        <Link to="/" key={i} onClick={() => setSelectedCategory(item)}>
          <div
            className={`
        ${selectedCategory.name === item.name && "bg-[#2d2d2d]"}
        
        flex gap-2 py-[10px] px-2 md:text-10px hover:bg-[#2D2D2D] items-center md:px-3 cursor-pointer rounded-md 
        `}
          >
            <span className="max-md:text-2xl py-[1px]">{item.icon}</span>
            <span className="max-md:hidden">{item.name}</span>
          </div>

          {item.divider && <hr />}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;