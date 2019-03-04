import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.css';

const bc = 'simple-input';

const defaultProps = {
  className: '',
  label: '',
  type: 'text',
  input: {}
};

const propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.object.isRequired
};

const Input = ({ className, label, type, input }) => (
  <div className={cn(bc, className, 'form-group')}>
    {label ? <label>{label}</label> : null}
    <input type={type} className="form-control" {...input} />
  </div>
);

Input.displayName = 'Input';
Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

/** See about React.memo https://reactjs.org/blog/2018/10/23/react-v-16-6.html#reactmemo */
export default React.memo(Input);