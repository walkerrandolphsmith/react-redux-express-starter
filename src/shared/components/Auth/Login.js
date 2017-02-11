import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { Actions } from './../../state';
import { ValidationIcons } from './ValidationIcons';
import { isValidEmail, isValidPassword } from './formValidation';
import { Button } from './../common/Buttons';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({ ...Actions, push }, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
export class Login extends Component {
    constructor(){
        super();
        this.state = {
            loading:false,
            email: '',
            password: '',
            isEmailValid: true,
            isEmailFocused: false,
            isPasswordValid: true,
            isPasswordFocused: false
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onEmailFocus = this.onEmailFocus.bind(this);
        this.onEmailBlur = this.onEmailBlur.bind(this);
        this.onPasswordFocus = this.onPasswordFocus.bind(this);
        this.onPasswordBlur = this.onPasswordBlur.bind(this);
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

    onPasswordChange(event) {
        const value = event.target.value;
        this.setState({ password: value, isPasswordValid: isValidPassword(value) });
    }

    onPasswordFocus(event) {
        this.setState({ isPasswordFocused: true });
    }

    onPasswordBlur(event) {
        this.setState({ isPasswordFocused: false });
    }
    
    handleLogin = () => {
        const { email, password } = this.state;

        this.props.login({
            username: email,
            password
        });
        this.state.loading = true;
        this.setState(this.state);
    };

    signUpForm = () => {
        this.props.push('/signup');
    };

    requestPasswordResetForm = () => {
        this.props.push('/forgot-password');
    };

    render(){
        const { authError } = this.props;

        const isEmailEmpty = this.state.email ? 'input_hasValue' : 'input_empty';
        const isEmailValid = this.state.isEmailValid ? 'input_valid' : 'input_invalid';
        const isEmailError = this.state.isEmailValid ? '' : 'input_error';
        const isEmailFocused = this.state.isEmailFocused ? 'input_focused' : 'input_unfocused';
        const emailClassNames = `input_group ${isEmailEmpty} ${isEmailError} ${isEmailValid} ${isEmailFocused}`;
        const emailErrorClassNames = `error_container ${this.state.isEmailValid ? 'invisible' : 'visible'}`;

        const isPasswordEmpty = this.state.password ? 'input_hasValue' : 'input_empty';
        const isPasswordValid = this.state.isPasswordValid ? 'input_valid' : 'input_invalid';
        const isPasswordError = this.state.isPasswordValid ? '' : 'input_error';
        const isPasswordFocused = this.state.isPasswordFocused ? 'input_focused' : 'input_unfocused';
        const passwordClassNames = `input_group ${isPasswordEmpty} ${isPasswordError} ${isPasswordValid} ${isPasswordFocused}`;
        const passwordErrorClassNames = `error_container ${this.state.isPasswordValid ? 'invisible' : 'visible'}`;

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

                <div className={passwordClassNames}>
                    <label className="input_label" htmlFor="password">
                        <span className="label_text">Password</span>
                    </label>
                    <input type="password"
                           className="input"
                           id="password"onChange={this.onPasswordChange}
                           onChange={this.onPasswordChange}
                           onFocus={this.onPasswordFocus}
                           onBlur={this.onPasswordBlur}
                    />
                    <div className={passwordErrorClassNames}><span>Try a stronger password.</span></div>
                    <ValidationIcons />
                </div>
                
                <Button text="Sign In" classNames="wide-button" onClick={this.handleLogin} />

                <br />
                <div className="message">
                    <span onClick={this.signUpForm}>Sign Up</span>
                    <span onClick={this.requestPasswordResetForm}>Forgot Password</span>
                </div>
            </div>
        )
    }
}