import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

const Icon = ({ name, className }) => (
  <svg className={className}>
    <use href={`/icons.svg#icon-${name}`} />
  </svg>
);

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <div className={styles.row}>
          <Icon name="user" className={styles.icon} />
          <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.row}>
          <Icon name="phone" className={styles.icon} />
          <span className={styles.number}>{number}</span>
        </div>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
