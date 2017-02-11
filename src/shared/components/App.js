const Menu = require('react-burger-menu').push;
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Drawer } from './Drawer';

const mapStateToProps = (state) => ({
    auth: state.atom.auth,
    user: state.atom.user
});

const mapDispatchToProps = (dispatcher) => bindActionCreators({ push }, dispatcher);

@connect(mapStateToProps)
class MyMenu extends Component {
    constructor(props, context) {
        super(props, context);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.state = { isOpen: false };
    }

    closeDrawer() {
        this.setState({ isOpen: false });
    }

    render() {
        return this.props.auth ? (
            <Menu pageWrapId="page-id" outerContainerId="page-wrapper-id" isOpen={this.state.isOpen} right={true}>
                <Drawer {...this.props} closeDrawer={this.closeDrawer} />
            </Menu>
        ) : (
            <div></div>
        )
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends Component {
    componentDidMount() {
        const { auth, location, push } = this.props;
        const pathname = location.pathname;

        const authenticatedRoutes = [
            'language-selection', 'round', 'history', 'profile'
        ];

        const unathenticatedRoutes = [
            'login', 'signup', 'forgot-password', 'reset-password'
        ];

        if(auth) {
            if(unathenticatedRoutes.includes(pathname)) {
                push('/round');
            }
        } else {
            if(authenticatedRoutes.includes(pathname)) {
                push('/login');
            }
        }
    }

    render() {
        return (
            <div id="page-wrapper-id">
                <MyMenu />
                <div id="page-id">
                    {this.props.children}
                </div>
            </div>
        )
    }
}