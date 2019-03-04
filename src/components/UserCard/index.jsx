import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const bc = 'user-card';

const defaultProps = {
  className: '',
  name: '',
  lastName: '',
  age: 0,
  onEdit: () => {},
  onDelete: () => {}
};

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

const UserCard = ({ name, lastName, age, className, onEdit, onDelete }) => (
  <div className={cn(bc, className, 'card')}>
    <div className="card-body">
      <p>{name}</p>
      <p>{lastName}</p>
      <p>{age}</p>
      <button className="btn btn-primary" onClick={() => onEdit(name)}>Edit</button>
      <button className="btn btn-danger" onClick={() => onDelete(name)}>Delete</button>
    </div>
  </div>
);

UserCard.displayName = 'UserCard';
UserCard.defaultProps = defaultProps;
UserCard.propTypes  = propTypes;

export default React.memo(UserCard);