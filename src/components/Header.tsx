import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="TopTableGames">TopTableGames</Link>
        <Link to="">About Me
        </Link>
      </nav>
    </header>
  );
}

export default withRouter(Header);
