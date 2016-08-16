import { expect } from 'chai';
import { Map, fromJS } from 'immutable';

import reducer from './activityReducer';

describe('Activity reducer', function () {

  it('should set initial state', () => {
    const initialState = new Map();
    const nextState = reducer(initialState, {});
    expect(nextState).to.equal(fromJS({}));
  });

  it('should add an activity to state', () => {
    const initialState = new Map();
    const nextState = reducer(initialState, {
      type: 'ACTIVITY_ADD',
      data: {
        id: 1,
        name: 'first'
      }
    });
    expect(nextState).to.equal(fromJS(
      {
        id: 1,
        name: 'first'
      }
    ));
  });

  it('should update an activity in state', () => {
    const initialState = new Map({
      id: 1,
      name: 'foo'
    });
    const nextState = reducer(initialState, {
      type: 'ACTIVITY_UPDATE',
      data: {
        id: 1,
        name: 'bar'
      }
    });
    expect(nextState).to.equal(fromJS(
      {
        id: 1,
        name: 'bar'
      }
    ));
  });
});
