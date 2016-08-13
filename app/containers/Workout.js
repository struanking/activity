import React, { Component, PropTypes } from 'react';

class Workout extends Component {

  render() {
    return (
      <div>
        <h1>Workout!</h1>
      </div>
    );
  }
}

Workout.propTypes = {
  children: PropTypes.node,
};

export default Workout;
