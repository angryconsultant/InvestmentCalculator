import styles from "./InvestmentForm.module.css";
import React, { useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";

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

  return (
    <form className={`${styles.form}`}>
      <div className={styles["input-group"]}>
        <Input
          id="current-savings"
          label="Startbelopp (SEK)"
          type="number"
          onChange={(event) =>
            inputChangeHandler("current-savings", event.target.value)
          }
          value={userInput["current-savings"]}
        />
        <Input
          id="yearly-contribution"
          label="Sparande per år (SEK)"
          type="number"
          onChange={(event) =>
            inputChangeHandler("yearly-contribution", event.target.value)
          }
          value={userInput["yearly-contribution"]}
        />
      </div>
      <div className={styles["input-group"]}>
        <Input
          id="expected-return"
          label="Ränta per år (%, per år)"
          type="number"
          onChange={(event) =>
            inputChangeHandler("expected-return", event.target.value)
          }
          value={userInput["expected-return"]}
        />
        <Input
          id="duration"
          label="Sparhorisont (år)"
          type="number"
          onChange={(event) =>
            inputChangeHandler("duration", event.target.value)
          }
          value={userInput["duration"]}
        />
      </div>
      <p className={styles.actions}>
        <Button type="reset" className="buttonAlt" onClick={resetHandler}>
          Återställ
        </Button>

        <Button type="submit" className="button" onClick={submitHandler}>
          Beräkna
        </Button>
      </p>
    </form>
  );
};

export default InvestmentForm;
