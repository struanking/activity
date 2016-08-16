import React from 'react';
import { Link } from 'react-router';

function ListItem(props) {
  const { item } = props;
  
  return (
    <li><Link to={`/activities/${item.id}`}>{item.label}</Link></li>
  );
}

export default ListItem;
