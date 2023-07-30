import styles from "./InvestmentForm.module.css";
import React, { useState } from "react";

const InvestmentForm = (props) => {
  const initialUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    props.onCalculate(userInput);
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setUserInput(initialUserInput);
  };
  const inputChangeHandler = (input, value) => {
    console.log(input, value);
    setUserInput((prevState) => {
      return { ...prevState, [input]: +value };
    });
  };

  // const currentSavingsChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, "current-savings": event.target.value };
  //   });
  //   console.log(event.target.value);
  // };

  // const yearlyContributionChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, "yearly-contribution": event.target.value };
  //     });
  //     console.log(event.target.value);
  //   };

  //   const expectedReturnChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, "expected-return": event.target.value };
  //     });
  //     console.log(event.target.value);
  //   };

  //   const durationChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, "duration": event.target.value };
  //     });
  //     console.log(event.target.value);
  //   };

  return (
    <form className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={userInput["duration"]}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button} onClick={submitHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
