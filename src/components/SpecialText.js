import React from 'react';
import {connect} from 'react-redux';

function SpecialText({ text }) {
  return (
      <div>
        Special Text: {text ? text : "null"}
      </div>
  );
}

function mapStateProps(state) {
  console.log(state);
  return {
    text: state.specialText,
  }
}
export default connect(mapStateProps, {}) (SpecialText);