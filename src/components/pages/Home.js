import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/users";
import GithubContext from "../../context/github/githubContext";
import { useContext } from "react";

export const Home = () => {
  const githubContext = useContext(GithubContext);
  return (
    <Fragment>
      <Search />
      <div className="mt-4" style={{ borderTop: "0.1rem solid" }}>
        <div>
          {githubContext.users.length > 0 ? (
            <h2 className="ml-2 mt-3">Profiles</h2>
          ) : (
            console.log("")
          )}
          <Users />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
