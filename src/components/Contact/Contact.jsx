import React from "react";
import styles from "./Contact.module.css";

const Icon = ({ name, className }) => (
  <svg className={className}>
    <use href={`/icons.svg#icon-${name}`} />
  </svg>
);

const Contact = ({ id, name, number, onDelete }) => (
  <li className={styles.item}>
    <div className={styles.info}>
      <Icon name="user" className={styles.icon} />
      <span className={styles.name}>{name}</span>
      <Icon name="phone" className={styles.icon} />
      <span className={styles.number}>{number}</span>
    </div>

    <button
      className={styles.deleteButton}
      onClick={() => onDelete(id)}
      type="button"
    >
      Delete
    </button>
  </li>
);

export default Contact;
