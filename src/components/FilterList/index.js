import React, { useContext } from 'react';
import Filter from './Filter';
import { ToDoContext } from '../ToDoList/ToDoContext';

function FilterList() {
  const { state } = useContext(ToDoContext);

  const filters = state.items.reduce((filters, currVal) => {
    if (currVal.status === 'COMPLETE') {
      filters.COMPLETE.count++;
    }
    else {
      filters.INCOMPLETE.count++;
    }
    return filters;
  }, {
      COMPLETE: {
        label: 'Complete',
        count: 0,
      },
      INCOMPLETE: {
        label: 'Incomplete',
        count: 0
      }
    });

  const buttons = Object.keys(filters).map((key, i) => {
    return <Filter label={filters[key].label} count={filters[key].count} key={i + 1} />;
  });

  return buttons;
}

export default FilterList;