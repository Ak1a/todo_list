import React, { PureComponent } from 'react';
import { Field } from 'redux-form';
import Input from '../../components/common/Input';
import PropTypes from 'prop-types';
import UserCard from '../../components/UserCard';

import { getUsers, removeUser } from '../../services/usersService';

const bc = 'users-page';

const contactForm = [
  {
    name: 'name',
    type: 'text',
    label: 'First Name'
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Last Name'
  },
  {
    name: 'age',
    type: 'number',
    label: 'Age'
  }
];

const defaultProps = {
  users: []
};

const propTypes = {
  users: PropTypes.array
};

class Users extends PureComponent {
  static displayName = 'Users';

  static defaultProps = defaultProps;

  static propTypes = propTypes;

  componentDidMount() {
    const { getUsersAsyncRequest, getUsersAsyncSuccess } = this.props;
    getUsersAsyncRequest(); // just action
    getUsers.then(users => {
      getUsersAsyncSuccess(users); // just action. Set users to Store.
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={bc}>
        <div className="row">
          <div className="col">
            <UserCard name="Alex" age="22"/>
          </div>

          <div className="col">
            <form onSubmit={handleSubmit}>
              {contactForm.map(({ name, type, label }) => (
                <Field
                  key={name}
                  name={name}
                  component={Input}
                  label={label}
                  type={type}
                />
              ))}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Users;