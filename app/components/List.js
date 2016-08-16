import React from 'react';

import ListItem from './ListItem';

function List(props) {
  const { list } = props;
  return (
    <ul>
      {
        list.valueSeq().map(item => <ListItem key={item} item={item.toJS()} />)
      }
    </ul>
  );
}

export default List;
