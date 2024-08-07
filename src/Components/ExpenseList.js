import React from "react";

function ExprnseList({ filterExpenses }) {
    return (
        <>

            <h2>{filterExpenses > 0 ? 'List of Expenses:' : null}</h2>

            {filterExpenses.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterExpenses.map(exp => (
                            <tr key={exp.id}>
                                <td>{exp.title}</td> 
                                <td>{exp.amount}</td>
                                <td>{exp.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </>
    );

}

export default ExprnseList;