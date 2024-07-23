import React from "react";

// function ExprnseList({expenses}) {
//     console.log(expenses);
//     return(
//         <>

//             <h2>List of Expenses:</h2>

//             <ul>
//                 {
//                     expenses.map(exp=>(
//                         <li id={exp.id}>{exp.tital}  -  {exp.amount}  -  {exp.category}</li>
//                     ))
//                 }
//             </ul>
//         </>
//     );

// }

function ExprnseList({filterExpenses}) {
    return(
        <>

            <h2>{filterExpenses>0 ? 'List of Expenses:' : null}</h2>

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
                            <td>{exp.tital}</td>
                            <td>{exp.amount}</td>
                            <td>{exp.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </>
    );

}

export default ExprnseList;