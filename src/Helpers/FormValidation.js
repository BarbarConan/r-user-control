import React from 'react';
import PropTypes from 'prop-types';

const CreateForm = props => <input type={props.type} />;

CreateForm.propTypes = {
  type: PropTypes.string,
};

CreateForm.defaultProps = {
  type: 'text',
};

export default CreateForm;
