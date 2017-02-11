import './profile.less';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from './../../state';
import { ResetPassword } from './../Auth';
import { CheckMarkIcon, ExclamationIcon } from './../common/Icons';


const mapStateToProps = (state) => ({
    user: state.atom.user
});

@connect(mapStateToProps)
export class Profile extends Component {
    render(){
        const { name, avatar, verified } = this.props.user;

        return(
            <div className="profile">
                <div className="avatar">
                    <img src={avatar} alt="" />
                    <div className="member">
                        <div>{name}</div>
                        {verified ? <TrustedUser /> : <StandardUser />}
                    </div>
                </div>
                <ResetPassword />
            </div>
        )
    }
}

class TrustedUser extends Component {
    render() {
        return (
            <div>
                <CheckMarkIcon />
                <span>Email Verified</span>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
class StandardUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.sendEmailVerification = this.sendEmailVerification.bind(this);
    }

    sendEmailVerification() {
        this.props.sendEmailVerification(this.props.user.id);
    }

    render() {
        return (
            <div>
                <ExclamationIcon />
                <span>Please Verify Email</span>
                <span onClick={this.sendEmailVerification}>Resend Verification Link</span>
            </div>
        )
    }
}