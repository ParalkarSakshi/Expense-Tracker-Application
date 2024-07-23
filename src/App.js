import { useState } from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import ExprnseList from './Components/ExpenseList';
import Filter from './Components/Filter';

function App() {

  const [expenses, setExpenses] = useState([]);

  const [filter, setFilter] = useState('all');
  console.log(filter);

  const filterExpenses = filter === 'all' ? expenses : expenses.filter(exp => exp.category === filter);

  function addExpense(exp) {
    setExpenses([...expenses, exp]);
  }

  return (

    <div className="App">

        <h1>Expense Tracker</h1>

        <ExpenseForm addExpense={addExpense} />

        <Filter setFilter={setFilter} />

        {/* <ExprnseList expenses={expenses} /> */}
        <ExprnseList filterExpenses={filterExpenses} />

    </div>
    
  );
}

export default App;
