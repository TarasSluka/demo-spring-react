import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';

const styleSheet = createStyleSheet('UserAdd', theme => ({
    paper: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
}));


class UserAdd extends Component {
    // user = {
    //     name: '',
    //     email: ''
    // };

    constructor(props) {
        super(props);
        this.submitUser = this.submitUser.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            name: '',
            email: '',
            rule: false,
            saveDisabled: true,
            errorEmail: "errorEmail"
        };

    }


    handleChange(event) {

        const target = event.target;

        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log({"target.type": target.type, "target.name": target.name, "target.value": target.value});
        this.setState({
            [name]: value
        });
        if (this.state.name.length != 0) {
            this.state.saveDisabled = false;
        }
        console.log("handleChange: ", target.valueOf());
    }

    submitUser(event) {
        event.preventDefault();
        const user = {
            email: this.state.email,
            name: this.state.name
        };

        console.log("user: ", user);
    }

    render() {
        return (

            <div>
                <h3>User Add</h3>
                <form>
                    <input
                        name="name"
                        type='text'
                        placeholder='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        // ref={(input)=> this.name = name}
                    />
                    <label hidden={this.state.email.length.valueOf() < 4}>{this.state.errorEmail}</label>
                    <input
                        name="email"
                        type='text'
                        placeholder='email'
                        onChange={this.handleChange}
                        value={this.state.email}
                        // ref={(input)=> this.name = name}
                    />
                    <input
                        name="rule"
                        type='checkbox'
                        onChange={this.handleChange}
                        value={this.state.rule}
                        // ref={(input)=> this.name = name}
                    />

                    <button
                        className='add__btn'
                        onClick={this.submitUser}
                        disabled={this.state.saveDisabled}
                    >
                        save
                    </button>
                </form>
            </div>
        )
            ;
    }
}

UserAdd.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(UserAdd);