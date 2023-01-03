import React from "react";
import css from "../my.module.css";

const Navbar = () => {
  return (
    <div className={css.navigator}>
      <div id={css.navbar}>
        <div id={css.logo}></div>
        <div className={css.links}>
          <div>
            <a className={css.assignment} href="google.com">
              <pre>My Assignment</pre>
            </a>
          </div>
          <div>
            <a className={css.assignment} href="google.com">
              <pre>Chat with Mentor</pre>
            </a>
          </div>
          <div className={css.profileName}>
            <div>
              <img
                src="https://i.postimg.cc/m2ZSKv2T/Vector.png"
                alt="vector"
              />
            </div>
            <div>
              <a className={css.profile} href="google.com">
                <pre> ProfileName </pre>
              </a>
            </div>
            <div>
              <img
                src="https://i.postimg.cc/DfPgjvhC/Vector-drop.png"
                alt="dropdown"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
