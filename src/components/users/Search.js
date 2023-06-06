import React, { Component } from 'react';
import propTypes from 'prop-types';
class Search extends Component {

    // form inputs are always component level state 
    // In react state is always attached to the inputs using the value attr
    // making it a controlled event
    // onChange event needs to be applied to the various inputs
    state = {
        text: '',
    };

    static propTypes = {
        searchUsers: propTypes.func.isRequired,
        clearUsers: propTypes.func.isRequired,
        showClear: propTypes.bool.isRequired,
        setAlert: propTypes.func.isRequired,
    }

    /*
        Declaring the submit fn without it being an arrow function means the 
        form tag is going to have to be bound with the fn => onSubmit={this.onSubmit.bind(this)}
    onSubmit(e) {
        e.preventDefault();
    }
    */

    onSubmit = (e) => {
        e.preventDefault();
        // Set alert {validation for empty user value}
        if(this.state.text === ''){
            this.props.setAlert('Please enter something', 'light')
        } else{

            // Passing the user input up through props
            this.props.searchUsers(this.state.text);
    
            this.setState({ text: '' })
        }

    }

    onChange = (e) => {
        // for single inputs the inpt name is required
        // this.setState({ text: e.target.value });

        // For multiple inputs
        this.setState({ [e.target.name]: e.target.value });

    }


    render() {
        const { showClear, clearUsers } = this.props;
        return (

            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text}
                        onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>

                {
                    // if showClear is true show btn else hide btn
                    showClear && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>
                }
                
            </div>
        )
    }
}


export default Search;