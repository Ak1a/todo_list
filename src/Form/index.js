import React, {Component} from 'react';

export default class Form extends Component {

    state = {
        valueOfName: '',
        valueOfLast: '',
        valueOfAge: '',
        idUser: null
    }

    render () {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group col-8">
                    <label>
                        First name:
                        <input type="text" value={this.state.valueOfName} onChange={this.handleChangeName} className="form-control" />
                    </label>
                </div>
                <div className="form-group col-8">
                    <label>
                        Last name:
                        <input type="text" value={this.state.valueOfLast} onChange={this.handleChangeLast} className="form-control" />
                    </label>
                </div>
                <div className="form-group col-8">
                    <label>
                        Age:
                        <input type="number" value={this.state.valueOfAge} onChange={this.handleChangeAge} className="form-control" />
                    </label>
                </div>
                <div className="form-group col-8">
                    <button type="submit" className="btn btn-primary">Submit</button>
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
        let index = this.props.userId;
        let data = {
            name: this.state.valueOfName,
            last_name: this.state.valueOfLast,
            age: this.state.valueOfAge
        }
        this.props.mainSetState(index, data);
    }

    componentWillReceiveProps = (nextProps) => {
       let index = nextProps.userId

       if (index !== null){
            this.setState({
             valueOfName: this.props.listOfUser[index].name,
             valueOfLast: this.props.listOfUser[index].last_name,
             valueOfAge: this.props.listOfUser[index].age
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