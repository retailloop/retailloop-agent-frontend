import React, { useState } from "react";
import { Box, Others, FilterContent } from "../style";
import AddCircle from "../../../assets/icons/AddCircle";
import SortIcon from "../../../assets/icons/SortIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import { Link } from "react-router-dom";

const TitleCard = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Box>
      <h1>Businesses</h1>

      {show && <FilterContent>hello</FilterContent>}

      <Others>
        <div className="input_box">
          <div className="icon" style={{ marginLeft: "10px" }}>
            <SearchIcon />
          </div>
          <input type="text" placeholder="Search for company e.g. Plexus" />
        </div>

        <div
          className="filter_box"
          onClick={() => setShow(!show)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="icon">
            {isHovering ? <SortIcon color="#fff" /> : <SortIcon />}
          </div>
          Filter
        </div>

        <Link to="/businesses/create" style={{ textDecoration: "none" }}>
          <div className="add">
            <div className="icon">
              <AddCircle />
            </div>
            Add Business
          </div>
        </Link>
      </Others>
    </Box>
  );
};

export default TitleCard;
