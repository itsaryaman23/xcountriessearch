import React from "react";
import styles from "./Header.module.css";

const Header = ({ setSearch }) => {

  const performSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className={styles.headCont}>
      <input
        className={styles.inputField}
        placeholder="Search for countries..."
        onChange={performSearch}
      />
    </div>
  );
};

export default Header;
