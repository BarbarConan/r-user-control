import React from 'react';
import PropTypes from 'prop-types';

const MakeLabel = props => {
  const { id, label } = props;
  return <label htmlFor={id}>{label}</label>;
};

MakeLabel.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const CreateForm = props => {
  const { id, label, type, name, onclick, onchange } = props;
  return (
    <div>
      <MakeLabel id={id} label={label} />
      <input name={name} id={id} type={type} onClick={onclick} onChange={onchange} />
    </div>
  );
};

CreateForm.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onclick: PropTypes.func,
  onchange: PropTypes.func,
};

CreateForm.defaultProps = {
  type: 'text',
  name: 'enterValidName',
  onclick: null,
  onchange: null,
};

export default CreateForm;
