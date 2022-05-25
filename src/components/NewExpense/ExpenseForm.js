import React, {useState} from "react";
import "./ExpenseForm.css";

let ExpenseForm = (props) => {

    let [enteredTitle, setEnteredTitle] = useState("");

    let [enteredAmount, setEnteredAmount] = useState("");
    
    let [enteredDate, setEnteredDate] = useState("");


    
    let titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    let amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    
    let dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    let submitHandler = (event) => {
        event.preventDefault();

        let expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSafeExpenseDate(expenseDate);

        console.log(expenseDate);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__action">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;