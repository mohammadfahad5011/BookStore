import React from "react";
import { useSelector } from "react-redux";



const Featured = () => {
  return (
    <div class="flex items-center space-x-4">
      <button class="filter-btn active-filter" id="lws-filterAll">
        All
      </button>
      <button class="filter-btn" id="lws-filterFeatured">
        Featured
      </button>
    </div>
  );
};

export default Featured;
