import { useRef } from "react";
import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.scss";
import { useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
const amountInputRef = useRef()
  const submitHandler = (event) => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value

    const enteredAmountNumber = +enteredAmount

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      return
    }
    setAmountIsValid(false)
    props.addToCart(enteredAmountNumber)

  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
       ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
