import React from 'react';
import { Field, reduxForm } from 'redux-form'

let Form = props => {
    const {handleSubmit, userId, users} = props;

    console.log(props)

    return (
            <form onSubmit={handleSubmit}>
            <div className="form-group col-8">
                <label>
                    First name:
                    <Field 
                        name="name" 
                        component="input" 
                        type="text" 
                        className="form-control"
                        value='l'
                        />
                </label>
            </div>
            <div className="form-group col-8">
                <label>
                    Last name:
                    <Field 
                        name="lastName" 
                        component="input" 
                        type="text" 
                        className="form-control"/>
                </label>
            </div>
            <div className="form-group col-8">
                <label>
                    Age:
                    <Field 
                        name="age" 
                        component="input" 
                        type="number" 
                        className="form-control"/>
                </label>
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
