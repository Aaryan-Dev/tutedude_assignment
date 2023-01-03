import React from "react";
import css from "../my.module.css";

const Navbar = () => {
  return (
    <div id={css.navbar}>
      <div>
        <img src="https://i.postimg.cc/cLv1kLpw/image-1.png" alt="logo" />
      </div>
      <div className={css.links}>
        <div>
          <a href="google.com">My Assignment</a>
        </div>
        <div>
          <a href="google.com">Chat with Mentor</a>
        </div>
        <div>
          <img src="https://i.postimg.cc/m2ZSKv2T/Vector.png" alt="vector" />
          <a href="google.com">ProfileName</a>
          <img
            src="https://i.postimg.cc/DfPgjvhC/Vector-drop.png"
            alt="dropdown"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
