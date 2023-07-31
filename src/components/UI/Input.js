import { Fragment } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <Fragment>
      <p>
        <label htmlFor={props.id} className={classes.label}>
          {props.label}
        </label>
        <input
          className={classes.input}
          type={props.type}
          id={props.id}
          onChange={props.onChange}
          value={props.value}
        />
      </p>
    </Fragment>
  );
};

export default Input;
