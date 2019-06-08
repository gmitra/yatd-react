import React from 'react';
import Filter from '../components/Filter';

function Sidebar(props) {
  const numFilters = Array(5).fill(true);
  const filters = numFilters.map((n, i) => {
    return <Filter label={`Filter ${i + 1}`} count="4" key={i + 1} />
  });

  return <React.Fragment>{filters}</React.Fragment>;
}

export default Sidebar;