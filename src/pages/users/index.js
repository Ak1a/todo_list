import Users from './Users';
import { reduxForm } from 'redux-form';
import { CONTACT_FORM } from '../../constants/formNames';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  getSelectedUser,
  getUsers,
  getInitialValues
} from './selectors';
import {
  getUserListAsync,
  removeUserAsync,
  selectUser,
  resetSelectedUser
} from './actions';

const mapStateToProps = createStructuredSelector({
  users: getUsers,
  selectedUser: getSelectedUser,
  initialValues: getInitialValues
});

const mapDispatchToProps = {
  getUsersAsyncRequest: getUserListAsync.request, // we need action to process it in middleware in a future
  removeUserAsyncRequest: removeUserAsync.request,
  getUsersAsyncSuccess: getUserListAsync.success,
  removeUserAsyncSuccess: removeUserAsync.success,
  selectUser,
  resetSelectedUser
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withForm = reduxForm({
  form: CONTACT_FORM
});

export default compose(
  withConnect,
  withForm
)(Users);