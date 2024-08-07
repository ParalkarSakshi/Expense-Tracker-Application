import React, { useState } from "react";

function ExpenseForm({addExpense}) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    function handleSubmit(e) {
        // addExpense({title:vegatable, amount:150, category:food})
        e.preventDefault();
        addExpense({id:Date.now(),title,amount,category});
        setTitle('');
        setAmount('');
        setCategory('');
    }

    return (
        <>
        
            <form onSubmit={handleSubmit}>
                <label>
                    Expense Title:
                    <input
                        type="text"
                        placeholder="enter the title"
                        className="input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label><br />

                <label>
                    Amount:
                    <input
                        type="number"
                        placeholder="enter the amount"
                        className="input"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </label><br />

                <label>
                    Categories:
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="select"
                        required
                    >
                        <option value='' disabled>Select Category</option>
                        <option value='food'>Food</option>
                        <option value='transport'>Transport</option>
                        <option value='entertainment'>Entertainment</option>
                        <option value='utility'>Utility</option>
                        <option value='others'>Others</option>
                    </select>
                </label><br />

                <button type="submit" id="submit">Submit</button>

            </form>
        </>
    );

}

export default ExpenseForm;