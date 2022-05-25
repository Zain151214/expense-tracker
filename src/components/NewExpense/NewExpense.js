import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

let NewExpense = (props) => {

    let saveExpenseDate = (enteredExpenseDate) => {

        let expenseDate = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        };
        
        props.onAddExpenseHandler(expenseDate);

        console.log(expenseDate);
    };


    return (
        <div className="new-expense">
            <ExpenseForm onSafeExpenseDate={saveExpenseDate} />
        </div>
    );
};

export default NewExpense;