import React from 'react';

const Form = props => <input type={props.type} />;

Form.propType = {
  type: PropTypes.string.isRequired,
};

export default Form;
