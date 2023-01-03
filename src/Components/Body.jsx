import React from "react";
import css from "../my.module.css";
import Backlinks from "../miniComponents/Backlinks";
import EnrolledFriends from "../miniComponents/EnrolledFriends";
import ReferralCode from "../miniComponents/ReferralCode";

const Body = () => {
  return (
    // <div>
    <div id={css.body_width}>
      <Backlinks />
      <EnrolledFriends />
      <ReferralCode />
    </div>
    // </div>
  );
};

export default Body;
