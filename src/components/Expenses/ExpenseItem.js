import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

let ExpenseItem = (props) => {

    return (
        // <div className="expense-item">
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">$ {props.amount}</div>
            </div>
        </Card>
    );
};

// to write js code in jsx we need to wrrite in {} the inside prenthisis is considered
// as js code in jsx 




export default ExpenseItem;