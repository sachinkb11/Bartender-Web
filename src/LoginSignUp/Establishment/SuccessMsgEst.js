import * as React from "react";
import styles from "../../styles/successMsg.module.css";
import { Link } from "react-router-dom";
export default function SuccessMsgEst(props) {
  return (
    <div className={styles.mainContainer}>
      <img src="/images/Group.png"></img>
      <Link  to={"/CpE1"} className="text-2xl text-white">&#10005;</Link>
    </div>
  );
}
