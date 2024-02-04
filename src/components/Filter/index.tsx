import React, { useEffect, useState } from "react";
import "./styles.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { Switch } from "@mui/material";
import axios from "axios";

const Filter: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = React.useState<number>();
  const [links, setLinks] = React.useState<{ label: string; imgSrc: string }[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://sravhi12.free.beeceptor.com/favimages"
      );
      setLinks(response.data);
    };

    fetchData();
  }, []);

  const linkArray = [...links];

  return (
    <div className="filter">
      <div className="filter__scroll no--scrollbar">
        {linkArray.length > 0 ? (
          linkArray.map((data, i) => (
            <button
              key={i}
              className={`filter__images ${
                i === selectedFilter && "selected--filter"
              }`}
              onClick={() => {
                setSelectedFilter(i);
              }}
            >
              <img
                alt=""
                className="filter__images-logo"
                tabIndex={-1}
                aria-label=""
                aria-hidden="true"
                src={data.imgSrc}
              />
              <div className="filter__images-label">{data.label}</div>
            </button>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="filters__icon" tabIndex={0} aria-label="filters">
        <div>
          <TuneOutlinedIcon />
        </div>
        <div>Filters</div>
      </div>
      <div className="filter__total" tabIndex={0} aria-label="display ">
        <div className="filter__total-text">Display total before taxes</div>
        <Switch />
      </div>
    </div>
  );
};

export default Filter;
