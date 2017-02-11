import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { ValidationIcons } from './ValidationIcons';
import { Button } from './../common/Buttons';
import { isValidEmail } from './formValidation';


const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({ push }, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
export class RequestPasswordReset extends Component {
    constructor(){
        super();
        this.state = {
            loading:false,
            email: '',
            isEmailValid: true,
            isEmailFocused: false
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onEmailFocus = this.onEmailFocus.bind(this);
        this.onEmailBlur = this.onEmailBlur.bind(this);
    }

    onEmailChange(event) {
        const value = event.target.value;
        this.setState({ email: value, isEmailValid: isValidEmail(value) });
    }

    onEmailFocus(event) {
        this.setState({ isEmailFocused: true });
    }

    onEmailBlur(event) {
        this.setState({ isEmailFocused: false });
    }

    handlePasswordReset = () => {
        //this.props.resetPassword(this.state.email);
        //this.state.loading = true;
    };

    loginForm = () => {
        this.props.push('/login');
    };

    render(){
        const isEmailEmpty = this.state.email ? 'input_hasValue' : 'input_empty';
        const isEmailValid = this.state.isEmailValid ? 'input_valid' : 'input_invalid';
        const isEmailError = this.state.isEmailValid ? '' : 'input_error';
        const isEmailFocused = this.state.isEmailFocused ? 'input_focused' : 'input_unfocused';
        const emailClassNames = `input_group ${isEmailEmpty} ${isEmailError} ${isEmailValid} ${isEmailFocused}`;
        const emailErrorClassNames = `error_container ${this.state.isEmailValid ? 'invisible' : 'visible'}`;

        return(
            <div className="form">
                <div className={emailClassNames}>
                    <label className="input_label" htmlFor="email-address">
                        <span className="label_text">Email Address</span>
                    </label>
                    <input type="email"
                           className="input"
                           id="email-address"
                           onChange={this.onEmailChange}
                           onFocus={this.onEmailFocus}
                           onBlur={this.onEmailBlur}
                    />
                    <div className={emailErrorClassNames}><span>Email is invalid</span></div>
                    <ValidationIcons />
                </div>

                <Button text="Reset Password" classNames="wide-button" onClick={this.handlePasswordReset} />

                <br />
                <div className="message">
                    <span onClick={this.loginForm}>Login</span>
                </div>
            </div>
        )
    }
}