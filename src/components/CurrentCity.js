import React from 'react';
import { connect } from 'react-redux';

function CurrentCity({ text }) {
  return (
      <div>
        CurrentCity: {text ? text : "null"}
      </div>
  );
}

function mapStateProps(state) {
  return {
    text: state.currentCity,
  }
}
export default connect(mapStateProps, null) (CurrentCity);