import React from 'react';
import { Button } from 'react-bootstrap';

function Filter({ label, count, ...props }) {
  return <Button>{label} {count}</Button>;
}

export default Filter;