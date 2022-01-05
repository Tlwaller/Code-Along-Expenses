import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(0);

  const filterChangeHandler = selectedYear => {
    setFilteredYear(+selectedYear);
  }; 

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {
          props.items.map((e, i) => {
            if(e.date.getFullYear() === filteredYear || filteredYear === 0) {
              return (
                <ExpenseItem
                  key={e.id}
                  title={e.title}
                  amount={e.amount}
                  date={e.date}
                />
                )
            } else return null;
          })
        }
      </Card>
    </div>
  );
};

export default Expenses;
