import React, { useState } from "react";
import "./styles.css";
import Places from "./places";

const PlacesCard = () => {
  const [properties, setProperties] = useState([
    { id: 1, title: "Beautiful Apartment", rating: "4.6", price: "10,000" },
    { id: 2, title: "Cozy Cottage", rating: "4.2", price: "8,000" },
    { id: 3, title: "Luxury Villa", rating: "3.5", price: "2,000" },
    { id: 4, title: "Apartment", rating: "5.0", price: "3,000" },
    { id: 5, title: "Cottage", rating: "4.6", price: "5,000" },
    { id: 6, title: "Villa", rating: "4.8", price: "1,100" },
    { id: 7, title: "Beach Apartment", rating: "4.0", price: "7,000" },
    { id: 8, title: "Beach Cottage", rating: "2.7", price: "8,000" },
    { id: 9, title: "Beach Villa", rating: "5.0", price: "3,000" },
  ]);
  const [visiblePlacesCount, setVisiblePlacesCount] = useState(8);

  const showMore = () => {
    setVisiblePlacesCount((prevVisible) => prevVisible + 2);
  };

  return (
    <div>
      <div className="card">
        {properties.slice(0, visiblePlacesCount).map((property) => (
          <Places key={property.id} property={property} />
        ))}
      </div>
      {visiblePlacesCount < properties.length && (
        <p className="card__more-places-div">
          Continue exploring lakefront homes
        </p>
      )}

      {visiblePlacesCount < properties.length && (
        <button onClick={showMore} className="card__show-more-div">
          Show More
        </button>
      )}
    </div>
  );
};

export default PlacesCard;
