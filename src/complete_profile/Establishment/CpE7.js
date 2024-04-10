import * as React from "react";
import styles from '../../styles/successMsg.module.css'
import { Link } from "react-router-dom";
export default function cpE7(props) {
    return (
        <div className={styles.mainContainer}>
            <img src="/images/Group.png"></img>
            <Link to={"/CpE8"} className="mt-5 text-white text-3xl">&#10005;</Link>
        </div>
    );
}


