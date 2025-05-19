import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <div className={styles.search}>
    <p>Find contacts by name</p>
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SearchBox;
