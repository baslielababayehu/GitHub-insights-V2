import React from "react";
// import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className=" col-lg-3 col-m-4 col-xs-12 card text-center my-2 mx-3">
      <img
        style={{ margin: "auto" }}
        src={avatar_url}
        alt=""
        className=""
        style={{ width: "80px" }}
      />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-3">
        View Full Profile
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
