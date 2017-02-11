import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from './../../state';
import { ValidationIcons } from './ValidationIcons';
import { isValidPassword, passwordsMatch } from './formValidation';

@connect(() => ({}), (dispatch) => bindActionCreators({ ...Actions }, dispatch))
export class ResetPassword extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            loading:false,
            password: '',
            isPasswordValid: true,
            isPasswordFocused: false,
            confirmPassword: '',
            isPasswordConfirmValid: true,
            isPasswordConfirmFocused: false
        };
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordFocus = this.onPasswordFocus.bind(this);
        this.onPasswordBlur = this.onPasswordBlur.bind(this);
        this.onPasswordConfirmChange = this.onPasswordConfirmChange.bind(this);
        this.onPasswordConfirmFocus = this.onPasswordConfirmFocus.bind(this);
        this.onPasswordConfirmBlur = this.onPasswordConfirmBlur.bind(this);
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
            confirmPassword: value,
            isPasswordConfirmValid: passwordsMatch(this.state.password, value)
        });
    }

    onPasswordConfirmFocus(event) {
        this.setState({ isPasswordConfirmFocused: true });
    }

    onPasswordConfirmBlur(event) {
        this.setState({ isPasswordConfirmFocused: false });
    }

    handleChangePassword = () => {
        const { password, confirmPassword } = this.state;

        const credentials = { password, confirmPassword };
        this.props.resetPassword(credentials);
    };

    render(){
        const isPasswordEmpty = this.state.password ? 'input_hasValue' : 'input_empty';
        const isPasswordValid = this.state.isPasswordValid ? 'input_valid' : 'input_invalid';
        const isPasswordError = this.state.isPasswordValid ? '' : 'input_error';
        const isPasswordFocused = this.state.isPasswordFocused ? 'input_focused' : 'input_unfocused';
        const passwordClassNames = `input_group ${isPasswordEmpty} ${isPasswordError} ${isPasswordValid} ${isPasswordFocused}`;
        const passwordErrorClassNames = `error_container ${this.state.isPasswordValid ? 'invisible' : 'visible'}`;


        const isPasswordConfirmEmpty = this.state.confirmPassword ? 'input_hasValue' : 'input_empty';
        const isPasswordConfirmValid = this.state.isPasswordConfirmValid ? 'input_valid' : 'input_invalid';
        const isPasswordConfirmError = this.state.isPasswordConfirmValid ? '' : 'input_error';
        const isPasswordConfirmFocused = this.state.isPasswordConfirmFocused ? 'input_focused' : 'input_unfocused';
        const passwordConfirmClassNames = `input_group ${isPasswordConfirmEmpty} ${isPasswordConfirmError} ${isPasswordConfirmValid} ${isPasswordConfirmFocused}`;
        const passwordConfirmErrorClassNames = `error_container ${this.state.isPasswordConfirmValid ? 'invisible' : 'visible'}`;

        return(
            <div className="form">
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
                    <label className="input_label" htmlFor="confirmPassword">
                        <span className="label_text">Confirm Password</span>
                    </label>
                    <input type="password"
                           className="input"
                           id="confirmPassword"
                           onChange={this.onPasswordConfirmChange}
                           onChange={this.onPasswordConfirmChange}
                           onFocus={this.onPasswordConfirmFocus}
                           onBlur={this.onPasswordConfirmBlur}
                    />
                    <div className={passwordConfirmErrorClassNames}><span>Passwords must match.</span></div>
                    <ValidationIcons />
                </div>

                <button className="button button_wide" onClick={this.handleChangePassword}>Change Password</button>
            </div>
        )
    }
}