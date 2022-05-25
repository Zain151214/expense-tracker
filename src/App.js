/*

This is imp points so we comment it for later help ok

// This is our 1st component ok.

// Remember:- we create 1 component in 1 file only not 2 component in 1 file ok.

// we can create component by function or by class 

// this is component named App created by a fucntion not by a class

import "./App.css";

import SubCom from "./components/SubCom";

function App() {
    // to return many lines of code we need to put in div b/c return can only
    // return 1 element.

    // we also use () and put that div in this () but return only 1 tag ok
    // inside that tag we use many but return() returns only 1 tag...

    return (
        // <div>
            /* to use class we use attribute name as "className="" " */
//     <h1 className="h1">First Component</h1>
//     <p id="p">this is p tag</p>
// </div>

// in this we pass our mini compoents if we creatre components in seprate file

// <SubCom />
// we can also use like html tag:-
// <SubCom></SubCom>

// );
// }

// we use default b/c when we use/import in index.js we can also change the name of this 
// conponent as per our nedd so that's why we use default ok

// Remember:- 
// we know all html tags start from small alphabesta so it is compulsory to write
// or create react-component name with capital letter ok.
// export default App;





























// React Project Start 



// import ExpenseItem from './components/ExpenseItem';
import Expenses from "./components/Expenses/Expenses";
import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";


let DUMMY_EXPENSE = [
    {
        id: "e1",
        title: "School Fee",
        amount: 200,
        date: new Date(2021, 3, 10)
    },
    {
        id: "e2",
        title: "Car Fee",
        amount: 300,
        date: new Date(2021, 4, 15)
    },
    {
        id: "e3",
        title: "House Rent",
        amount: 400,
        date: new Date(2021, 5, 20)
    },
    {
        id: "e4",
        title: "Shopping Cost",
        amount: 500,
        date: new Date(2021, 6, 25)
    }
];


let App = () => {
   
    let [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    let addExpenseHandler = (expense) => {
        let updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense)
    }

    return (
        <div className='App-Container'>
            <h1>Expense Tracker</h1>
            <NewExpense onAddExpenseHandler = {addExpenseHandler} />
            <Expenses item={expenses} />
        </div>
    );
};

export default App;














