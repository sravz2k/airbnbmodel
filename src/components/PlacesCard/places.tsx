import React from "react";
import "./styles.css";
import hotel from "../../assets/hotel-1.jpeg";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

interface Property {
  id: number;
  title: string;
  rating: string;
  price: string;
}

const Places: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="property">
      <img
        src={hotel}
        alt={`Hotel ${property.id}`}
        className="property__hotel-img"
      />
      <div className="property__hotel-name-info">
        <h2 className="property__hotel-name">{property.title}</h2>
        <div className="property__rating">
          <StarOutlinedIcon sx={{ fontSize: "1rem" }} />
          <p>{property.rating}</p>
        </div>
      </div>
      <p style={{ color: "var(--font-gray)" }}>Vattakkaayal</p>
      <p style={{ color: "var(--font-gray)" }}>12-14 Feb</p>
      <div className="property__price-details">
        <CurrencyRupeeOutlinedIcon sx={{ fontSize: "1rem" }} />
        <p className="property__price">{property.price}</p>
        <p>night</p>
      </div>
    </div>
  );
};

export default Places;
