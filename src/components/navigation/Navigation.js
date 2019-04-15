import React from "react";

const Navigation = ({ changeRoute, isSignin }) => {
  if (isSignin) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => changeRoute("signout")}
          className="f3 dim pointer link black pa3 underline"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => changeRoute("signin")}
          className="f3 dim pointer link black pa3 underline"
        >
          Sign In
        </p>
        <p
          onClick={() => changeRoute("register")}
          className="f3 dim pointer link black pa3 underline"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
