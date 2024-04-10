import * as React from "react";
import styles from "../../styles/successMsg.module.css";
import { Link } from "react-router-dom";
export default function Cp8(props) {
  return (
    <div className={styles.mainContainer}>
      <img src="/images/Group.png"></img>
      <Link to={"/CurrentGigs"} className="mt-5 text-3xl">
        &#10005;
      </Link>
    </div>
  );
}
