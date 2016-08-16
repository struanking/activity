import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Panel from 'components/Panel';
import List from 'components/List';

class Activities extends Component {

  render() {
    return (
      <Panel title={'Activities'}>
        <List list={this.props.collection} />
      </Panel>
    );
  }
}

Activities.propTypes = {
  collection: PropTypes.object,
};

function mapStateToProps(state, props) {
  return {
    collection: state.get('activities'),
  };
}

export default connect(mapStateToProps)(Activities);
