import React from 'react';

function AcitivitySummary(props) {
  return (
    <ul>
      <li>Label: {props.label}</li>
      <li>Sets: {props.sets}</li>
    </ul>
  );
}

export default AcitivitySummary;
