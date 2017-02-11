import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { Actions } from './../../state';
import { ValidationIcons } from './ValidationIcons';
import { Button } from './../common/Buttons';
import { isValidEmail, isValidUsername, isValidPassword, passwordsMatch } from './formValidation';

@connect(() => ({}), (dispatch) => bindActionCreators({ ...Actions, push }, dispatch))
export class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            loading:false,
            email: '',
            isEmailValid: true,
            isEmailFocused: false,
            name: '',
            isNameValid: true,
            isNameFocused: false,
            password: '',
            isPasswordValid: true,
            isPasswordFocused: false,
            passwordConfirm: '',
            isPasswordConfirmValid: true,
            isPasswordConfirmFocused: false
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onEmailFocus = this.onEmailFocus.bind(this);
        this.onEmailBlur = this.onEmailBlur.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onNameFocus = this.onNameFocus.bind(this);
        this.onNameBlur = this.onNameBlur.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordFocus = this.onPasswordFocus.bind(this);
        this.onPasswordBlur = this.onPasswordBlur.bind(this);
        this.onPasswordConfirmChange = this.onPasswordConfirmChange.bind(this);
        this.onPasswordConfirmFocus = this.onPasswordConfirmFocus.bind(this);
        this.onPasswordConfirmBlur = this.onPasswordConfirmBlur.bind(this);
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

    onNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value, isNameValid: isValidUsername(value) });
    }

    onNameFocus(event) {
        this.setState({ isNameFocused: true });
    }

    onNameBlur(event) {
        this.setState({ isNameFocused: false });
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

    onPasswordConfirmChange(event) {
        const value = event.target.value;
        this.setState({
            passwordConfirm: value,
            isPasswordConfirmValid: passwordsMatch(this.state.password, value)
        });
    }

    onPasswordConfirmFocus(event) {
        this.setState({ isPasswordConfirmFocused: true });
    }

    onPasswordConfirmBlur(event) {
        this.setState({ isPasswordConfirmFocused: false });
    }

    handleSignUp = () => {
        const { name, email, password } = this.state;

        this.props.signup({
            username: email,
            email,
            password,
            name
        });
    };

    loginForm = () => {
        this.props.push('/login');
    };

    requestPasswordResetForm = () => {
        this.props.push('/forgot-password');
    };

    render(){
        const isEmailEmpty = this.state.email ? 'input_hasValue' : 'input_empty';
        const isEmailValid = this.state.isEmailValid ? 'input_valid' : 'input_invalid';
        const isEmailError = this.state.isEmailValid ? '' : 'input_error';
        const isEmailFocused = this.state.isEmailFocused ? 'input_focused' : 'input_unfocused';
        const emailClassNames = `input_group ${isEmailEmpty} ${isEmailError} ${isEmailValid} ${isEmailFocused}`;
        const emailErrorClassNames = `error_container ${this.state.isEmailValid ? 'invisible' : 'visible'}`;

        const isNameEmpty = this.state.name ? 'input_hasValue' : 'input_empty';
        const isNameValid = this.state.isNameValid ? 'input_valid' : 'input_invalid';
        const isNameError = this.state.isNameValid ? '' : 'input_error';
        const isNameFocused = this.state.isNameFocused ? 'input_focused' : 'input_unfocused';
        const nameClassNames = `input_group ${isNameEmpty} ${isNameError} ${isNameValid} ${isNameFocused}`;
        const nameErrorClassNames = `error_container ${this.state.isNameValid ? 'invisible' : 'visible'}`;

        const isPasswordEmpty = this.state.password ? 'input_hasValue' : 'input_empty';
        const isPasswordValid = this.state.isPasswordValid ? 'input_valid' : 'input_invalid';
        const isPasswordError = this.state.isPasswordValid ? '' : 'input_error';
        const isPasswordFocused = this.state.isPasswordFocused ? 'input_focused' : 'input_unfocused';
        const passwordClassNames = `input_group ${isPasswordEmpty} ${isPasswordError} ${isPasswordValid} ${isPasswordFocused}`;
        const passwordErrorClassNames = `error_container ${this.state.isPasswordValid ? 'invisible' : 'visible'}`;


        const isPasswordConfirmEmpty = this.state.passwordConfirm ? 'input_hasValue' : 'input_empty';
        const isPasswordConfirmValid = this.state.isPasswordConfirmValid ? 'input_valid' : 'input_invalid';
        const isPasswordConfirmError = this.state.isPasswordConfirmValid ? '' : 'input_error';
        const isPasswordConfirmFocused = this.state.isPasswordConfirmFocused ? 'input_focused' : 'input_unfocused';
        const passwordConfirmClassNames = `input_group ${isPasswordConfirmEmpty} ${isPasswordConfirmError} ${isPasswordConfirmValid} ${isPasswordConfirmFocused}`;
        const passwordConfirmErrorClassNames = `error_container ${this.state.isPasswordConfirmValid ? 'invisible' : 'visible'}`;
        
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

                <div className={nameClassNames}>
                    <label className="input_label" htmlFor="name">
                        <span className="label_text">Name</span>
                    </label>
                    <input type="text"
                           className="input"
                           id="name"
                           onChange={this.onNameChange}
                           onChange={this.onNameChange}
                           onFocus={this.onNameFocus}
                           onBlur={this.onNameBlur}
                    />
                    <div className={nameErrorClassNames}><span>What is your name?</span></div>
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

                <div className={passwordConfirmClassNames}>
                    <label className="input_label" htmlFor="passwordConfirm">
                        <span className="label_text">Confirm Password</span>
                    </label>
                    <input type="password"
                           className="input"
                           id="passwordConfirm"
                           onChange={this.onPasswordConfirmChange}
                           onChange={this.onPasswordConfirmChange}
                           onFocus={this.onPasswordConfirmFocus}
                           onBlur={this.onPasswordConfirmBlur}
                    />
                    <div className={passwordConfirmErrorClassNames}><span>Passwords must match.</span></div>
                    <ValidationIcons />
                </div>

                <Button text="Sign Up" classNames="wide-button" onClick={this.handleSignUp} />

                <br />
                <div className="message">
                    <span onClick={this.loginForm}>Log In</span>
                    <span onClick={this.requestPasswordResetForm}>Forgot Password</span>
                </div>
            </div>
        )
    }
}