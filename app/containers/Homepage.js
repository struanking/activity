import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Homepage extends Component {

  render() {
    return (
      <div>
        <h1>The Homepage!</h1>
        <Link to='/activities'>Activities</Link>
      </div>
    );
  }
}

Homepage.propTypes = {
  children: PropTypes.node,
};

export default Homepage;
