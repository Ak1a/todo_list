import React, {Component} from 'react';

export default class Form extends Component {

    state = {
        valueOfName: '',
        valueOfLast: '',
        valueOfAge: '',
        idUser: null
    }

    deleteButton = () => {
        return (
            <button className="btn btn-danger" onClick={this.deleteUser}>
                Delete
            </button>
        )
    }

    render () {

        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group col-8">
                    <label>
                        First name:
                        <input
                            type="text"
                            value={this.state.valueOfName}
                            onChange={this.handleChangeName}
                            className="form-control"
                        />
                    </label>
                </div>
                <div className="form-group col-8">
                    <label>
                        Last name:
                        <input 
                            type="text"
                            value={this.state.valueOfLast}
                            onChange={this.handleChangeLast}
                            className="form-control"
                        />
                    </label>
                </div>
                <div className="form-group col-8">
                    <label>
                        Age:
                        <input
                            type="number"
                            value={this.state.valueOfAge}
                            onChange={this.handleChangeAge}
                            className="form-control"
                        />
                    </label>
                </div>
                <div className="form-group col-8">
                    <button 
                        type="submit"  className="btn btn-primary">
                        {(this.props.userId !== null) ? 'Update' : 'Create'}
                    </button>
                    {this.props.userId !== null && this.deleteButton()}
                </div>
            </form>
        )
    }

    handleChangeName = (e) => {
        this.setState({
            valueOfName: e.target.value
        });
    }

    handleChangeLast = (e) => {
        this.setState({
            valueOfLast: e.target.value
        });
    }

    handleChangeAge = (e) => {
        this.setState({
            valueOfAge: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {
            valueOfName,
            valueOfLast,
            valueOfAge
        } = this.state;

        let index = this.props.userId;

         if( valueOfName.trim() !== '' &&
             valueOfLast.trim() !== '' &&
             valueOfAge !== '' ){

            const data = {
                name: valueOfName,
                last_name: valueOfLast,
                age: valueOfAge
            }

            this.props.mainSetState(index, data);
        } else {
            window.alert('Fields shouldn`t be empty');
        }
    }
        

    deleteUser = (e) => {
        e.preventDefault();

        if(window.confirm('Are sure you want to delete user')){
            let index = this.props.userId;

            this.props.mainSetState(index, false);
        }        
    }

    componentWillReceiveProps = (nextProps) => {
       let index = nextProps.userId; 

       if (index !== null && nextProps.listOfUser[index]){
            this.setState({
                valueOfName: nextProps.listOfUser[index].name,
                valueOfLast: nextProps.listOfUser[index].last_name,
                valueOfAge: nextProps.listOfUser[index].age
             })
        } else {
            this.setState({
                valueOfName: '',
                valueOfLast: '',
                valueOfAge: ''
                })
        }
        
    }
}