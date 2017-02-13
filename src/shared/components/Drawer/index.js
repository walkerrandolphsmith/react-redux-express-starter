import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from './../../state';
import { UserIcon, LogoutIcon, CheckMarkIcon } from './../common/Icons';
import { push } from 'react-router-redux';

const mapStateToProps = state => ({
    name: state.atom.user.name,
    verified: state.atom.user.verified
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...Actions, push }, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
export class Drawer extends Component {
    constructor(props, context) {
        super(props, context);
        this.viewProfile = this.viewProfile.bind(this);
    }

    viewProfile() {
        this.props.push('/profile');
        this.props.closeDrawer();
    }


    render () {
        const { name, verified, logout } = this.props;

        return (
            <div id="inner-drawer">
                <section id="my-info">
                    <header><h2>Faster</h2></header>
                    <div className="member">
                        <p>
                            {verified ? <CheckMarkIcon /> : ''}
                            {name}
                        </p>
                    </div>
                </section>
                <section id="menu">
                    <ul>
                        <li onClick={this.viewProfile}><UserIcon /><span>Account</span></li>
                        <li onClick={logout}><LogoutIcon /><span>Logout</span></li>
                    </ul>
                </section>
            </div>
        );
    }
}