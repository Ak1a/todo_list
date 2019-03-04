import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../components/common/Input';

let Form = props => {
    const {handleSubmit, userId, users} = props;

    console.log(props)

    return (
            <form onSubmit={handleSubmit}>
            <div className="form-group col-8">
              <Field
                name="name"
                component={Input}
                label="Test"
              />
            </div>
            <div className="form-group col-8">
              <Field
                name="lastName"
                component={Input} />
            </div>
            <div className="form-group col-8">
              <Field
                name="age"
                component={Input} />
            </div>
            <div className="form-group col-8">
            <button type="submit" className="btn btn-primary">Submit</button>
            
            </div>
        </form>
    )
}

Form = reduxForm({
    // a unique name for the form
    form: 'contact'
  })(Form)
           
class newForm extends React.Component {
    submit = values => {
      // print the form values to the console
      console.log(values)
    }
    render() {
        console.log('form',this.props)
      return <Form onSubmit={this.submit} userId={this.props.chooseUserID} users={this.props.listOfUser} />
    }
  }
  export default newForm;
