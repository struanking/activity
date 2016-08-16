import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Panel from 'components/Panel';
import ActivitySummary from 'components/ActivitySummary';

class Activity extends Component {

  render() {
    const { activity } = this.props;

    return (
      <Panel title={'Activity'}>
        <ActivitySummary {...activity.toJS()} />
      </Panel>
    );
  }
}

Activity.propTypes = {
  collection: PropTypes.object,
};

function mapStateToProps(state, props) {
  return {
    activity: state.get('activities').get('0'),
  };
}

export default connect(mapStateToProps)(Activity);
