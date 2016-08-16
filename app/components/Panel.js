import React from 'react';

function Panel(props) {
  const { children, title } = props;
  return (
    <div>
      <h1>{title}!</h1>
      {children}
    </div>
  );
}

export default Panel;
