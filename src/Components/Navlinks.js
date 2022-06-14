import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
function Navlinks(props) {
  return (
    <div class="container">
      <nav id="navbar">
        <ul>
          <li>
            <a href="#">
              <h5>Date And Times</h5>
            </a>
          </li>
          <li>
            <Link to="/packages">
              <h5>Tickets</h5>
            </Link>
          </li>
          <li>
            <Link to="/packages">
              <h5> Event Details</h5>
            </Link>
          </li>
          <li>
            <Link to="/packages">
              <h5>Waivers</h5>
            </Link>
          </li>
          <li>
            <Link to="/packages">
              <h5>Financial</h5>
            </Link>
          </li>
          <li>
            <Link to="/packages">
              <h5>Notes</h5>
            </Link>
          </li>
          <li>
            <Link to="/packages">
              <Button
                variant="contained"
                sx={{ backgroundColor: "red" }}
                type="submit"
              >
                {" "}
                Add Event
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navlinks;
